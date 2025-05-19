/**
 * Utility functions for ImageKit integration
 */

// Get the ImageKit URL endpoint from environment variables
const IMAGEKIT_URL_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/pon54xoks';

/**
 * Converts a local image path to an ImageKit URL
 * @param src - The source path of the image (e.g., '/images/hero/about-us.jpg')
 * @param transformations - Optional ImageKit transformations
 * @param fallbackToOriginal - Whether to fallback to the original URL if ImageKit is not available
 * @returns The ImageKit URL for the image
 */
export function getImageKitUrl(
  src: string,
  transformations?: Record<string, string | number>,
  fallbackToOriginal: boolean = true
): string {
  // If the source is null, undefined, or empty, return empty string
  if (!src) {
    return '';
  }

  // If the source is already an ImageKit URL, return it as is
  if (src.includes(IMAGEKIT_URL_ENDPOINT)) {
    return src;
  }

  // If the source is an external URL (not from our domain), return it as is
  if (src.startsWith('https://') || src.startsWith('http://')) {
    // If it's not from our domain, return as is
    if (!src.includes('starhiherbs.com') && !src.includes('localhost')) {
      return src;
    }
  }

  try {
    // Handle relative paths
    let path = src;

    // Remove domain part if present
    if (path.includes('://')) {
      const urlParts = path.split('/');
      path = urlParts.slice(3).join('/');
    }

    // Remove leading slash if present
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    // Remove any query parameters
    if (path.includes('?')) {
      path = path.split('?')[0];
    }

    // Ensure the path has a valid image extension
    if (!hasImageExtension(path)) {
      path = ensureImageExtension(path);
    }

    // If no transformations are provided, return the basic URL
    if (!transformations || Object.keys(transformations).length === 0) {
      return `${IMAGEKIT_URL_ENDPOINT}/${path}`;
    }

    // Build transformation string
    const transformationParams = Object.entries(transformations)
      .map(([key, value]) => `${key}-${value}`)
      .join(',');

    // Return URL with transformations
    return `${IMAGEKIT_URL_ENDPOINT}/tr:${transformationParams}/${path}`;
  } catch (error) {
    console.error('Error generating ImageKit URL:', error);
    // If fallback is enabled, return the original URL
    return fallbackToOriginal ? src : '';
  }
}

/**
 * Check if a path has a valid image extension
 */
function hasImageExtension(path: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];
  return imageExtensions.some(ext => path.toLowerCase().endsWith(ext));
}

/**
 * Ensure a path has a valid image extension
 * If it doesn't have one, add .jpg as a default
 */
function ensureImageExtension(path: string): string {
  if (hasImageExtension(path)) {
    return path;
  }

  // If the path doesn't end with a file extension, add .jpg
  if (!path.includes('.') || path.split('.').pop()!.length > 4) {
    return `${path}.jpg`;
  }

  return path;
}

/**
 * Common image transformations presets
 */
export const ImageKitTransformations = {
  thumbnail: { w: 300, h: 300, c: 'maintain_ratio' },
  small: { w: 600, c: 'maintain_ratio' },
  medium: { w: 1200, c: 'maintain_ratio' },
  large: { w: 1800, c: 'maintain_ratio' },
  hero: { w: 1920, q: 90, c: 'maintain_ratio' },
  blur: { bl: 10 },
  grayscale: { e: 'grayscale' },
};

/**
 * Example usage:
 *
 * import { getImageKitUrl, ImageKitTransformations } from '@/lib/imagekit';
 *
 * // Basic usage
 * const imageUrl = getImageKitUrl('/images/hero/about-us.jpg');
 *
 * // With transformations
 * const thumbnailUrl = getImageKitUrl('/images/products/product1.jpg', ImageKitTransformations.thumbnail);
 *
 * // With custom transformations
 * const customUrl = getImageKitUrl('/images/blog/post1.jpg', { w: 800, h: 600, c: 'maintain_ratio', q: 80 });
 */
