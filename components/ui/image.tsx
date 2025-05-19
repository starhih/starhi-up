'use client';

import { useState, useEffect } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { getImageKitUrl } from '@/lib/imagekit';

export interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string;
  transformations?: Record<string, string | number>;
  fallbackToOriginal?: boolean;
}

/**
 * Custom Image component that automatically uses ImageKit for all images
 * This component extends Next.js Image component with ImageKit integration
 */
export default function Image({
  src,
  transformations,
  fallbackToOriginal = true,
  onError,
  ...props
}: ImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!src) return;

    try {
      // Convert the source to an ImageKit URL
      const imageKitUrl = getImageKitUrl(src, transformations, fallbackToOriginal);
      setImageSrc(imageKitUrl);
      setError(false);
    } catch (err) {
      console.error('Error setting image source:', err);
      setImageSrc(src);
      setError(true);
    }
  }, [src, transformations, fallbackToOriginal]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // If there's an error loading the ImageKit URL, fall back to the original URL
    if (!error && fallbackToOriginal) {
      console.warn(`Failed to load image from ImageKit, falling back to original: ${src}`);
      setImageSrc(src);
      setError(true);
    }

    // Call the original onError handler if provided
    if (onError) {
      onError(e);
    }
  };

  // If we have no source, return null
  if (!imageSrc) return null;

  return (
    <NextImage
      src={imageSrc}
      onError={handleError}
      {...props}
    />
  );
}
