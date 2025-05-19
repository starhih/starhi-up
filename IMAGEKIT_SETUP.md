# ImageKit Integration Guide

This guide explains how to use ImageKit for optimized image delivery in the Star Hi Herbs website.

## Overview

ImageKit is a cloud-based image optimization and transformation service that helps deliver images faster and with better quality. This integration:

1. Automatically routes all image requests through ImageKit's CDN
2. Allows for on-the-fly image transformations (resizing, cropping, etc.)
3. Optimizes images for better performance and reduced bandwidth usage

## Setup

### 1. Environment Variables

Make sure your `.env` file contains the following ImageKit configuration:

```
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
```

The `NEXT_PUBLIC_` prefix makes the URL endpoint available to client-side code.

### 2. Upload Images to ImageKit

1. Log in to your ImageKit dashboard
2. Upload your images maintaining the same folder structure as in your project
   - For example, if you have an image at `/images/hero/about-us.jpg` in your project, upload it to the same path in ImageKit

### 3. Run the Image Update Script

We've created scripts to automatically update all image references in your codebase to use ImageKit. Run:

```bash
npm run update-images
```

This script will:
- Update all Next.js Image component imports to use our custom Image component
- Update all image URLs in CSS files to use ImageKit

## Using the Custom Image Component

After running the update script, your codebase will use our custom Image component that automatically routes all images through ImageKit.

### Basic Usage

```jsx
import Image from '@/components/ui/image';

// The src will automatically be converted to an ImageKit URL
<Image src="/images/hero/about-us.jpg" alt="About Us" width={1200} height={600} />
```

### With Transformations

You can apply ImageKit transformations to your images:

```jsx
import Image from '@/components/ui/image';
import { ImageKitTransformations } from '@/lib/imagekit';

// Apply a preset transformation
<Image 
  src="/images/products/product1.jpg" 
  alt="Product" 
  width={300} 
  height={300}
  transformations={ImageKitTransformations.thumbnail} 
/>

// Apply custom transformations
<Image 
  src="/images/blog/post1.jpg" 
  alt="Blog Post" 
  width={800} 
  height={400}
  transformations={{ w: 800, h: 400, c: 'maintain_ratio', q: 80 }} 
/>
```

## Manual Image URL Conversion

If you need to manually convert an image URL to use ImageKit, use the `getImageKitUrl` function:

```jsx
import { getImageKitUrl } from '@/lib/imagekit';

const imageUrl = getImageKitUrl('/images/hero/about-us.jpg');
// Result: https://ik.imagekit.io/your_imagekit_id/images/hero/about-us.jpg

// With transformations
const thumbnailUrl = getImageKitUrl('/images/products/product1.jpg', { w: 300, h: 300 });
// Result: https://ik.imagekit.io/your_imagekit_id/tr:w-300,h-300/images/products/product1.jpg
```

## Available Transformation Presets

The `ImageKitTransformations` object provides common transformation presets:

- `thumbnail`: 300x300px, maintain aspect ratio
- `small`: 600px width, maintain aspect ratio
- `medium`: 1200px width, maintain aspect ratio
- `large`: 1800px width, maintain aspect ratio
- `hero`: 1920px width, 90% quality, maintain aspect ratio
- `blur`: Apply a blur effect
- `grayscale`: Convert to grayscale

## Troubleshooting

### Images Not Loading

1. Check that your ImageKit URL endpoint is correct in the `.env` file
2. Verify that the image exists in your ImageKit account with the same path
3. Check the browser console for any errors

### Image Transformations Not Working

1. Make sure you're using the correct transformation parameters
2. Check the ImageKit documentation for supported transformations
3. Verify that the transformations are being applied in the URL

## ImageKit Documentation

For more information on ImageKit and its features, visit:
- [ImageKit Documentation](https://docs.imagekit.io/)
- [ImageKit Transformations](https://docs.imagekit.io/features/image-transformations)
- [ImageKit URL Structure](https://docs.imagekit.io/integration/url-endpoints)
