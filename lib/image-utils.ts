/**
 * Utility functions for image handling
 */

// Get the ImageKit URL endpoint from environment variables
const IMAGEKIT_URL_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/pon54xoks';

/**
 * Converts any image URL to use ImageKit
 * This is a simpler version that can be used directly in the code
 * 
 * @param src - The source URL of the image
 * @returns The ImageKit URL
 */
export function getImageUrl(src: string): string {
  if (!src) return '';
  
  // If it's already an ImageKit URL, return it as is
  if (src.includes(IMAGEKIT_URL_ENDPOINT)) {
    return src;
  }
  
  // If it's an external URL (not from our domain), return it as is
  if ((src.startsWith('https://') || src.startsWith('http://')) && 
      !src.includes('starhiherbs.com') && 
      !src.includes('localhost')) {
    return src;
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
    
    return `${IMAGEKIT_URL_ENDPOINT}/${path}`;
  } catch (error) {
    console.error('Error generating ImageKit URL:', error);
    return src;
  }
}

/**
 * Converts a CSS background-image url to use ImageKit
 * 
 * @param cssValue - The CSS background-image value (e.g., "url('/images/hero.jpg')")
 * @returns The CSS background-image value with ImageKit URL
 */
export function getBackgroundImageUrl(cssValue: string): string {
  if (!cssValue) return '';
  
  // If it's already using ImageKit, return it as is
  if (cssValue.includes(IMAGEKIT_URL_ENDPOINT)) {
    return cssValue;
  }
  
  try {
    // Extract the URL from the CSS value
    const urlMatch = cssValue.match(/url\(['"]?([^'"]+)['"]?\)/);
    if (!urlMatch || !urlMatch[1]) {
      return cssValue;
    }
    
    const originalUrl = urlMatch[1];
    const imageKitUrl = getImageUrl(originalUrl);
    
    // Replace the original URL with the ImageKit URL
    return cssValue.replace(originalUrl, imageKitUrl);
  } catch (error) {
    console.error('Error generating ImageKit background URL:', error);
    return cssValue;
  }
}

/**
 * Helper function to check if a string is a valid URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Helper function to get the file extension from a URL or path
 */
export function getFileExtension(path: string): string {
  if (!path) return '';
  
  // Remove query parameters
  const pathWithoutQuery = path.split('?')[0];
  
  // Get the file extension
  const parts = pathWithoutQuery.split('.');
  if (parts.length <= 1) return '';
  
  return parts[parts.length - 1].toLowerCase();
}

/**
 * Check if a URL is an image
 */
export function isImageUrl(url: string): boolean {
  if (!url) return false;
  
  const extension = getFileExtension(url);
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'avif'];
  
  return imageExtensions.includes(extension);
}
