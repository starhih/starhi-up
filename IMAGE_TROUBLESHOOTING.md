# Image Troubleshooting Guide

This guide will help you fix common image loading issues in the Star Hi Herbs website.

## Common Issues

### 1. Images with Incorrect MIME Type

**Problem**: Some images are being served with the incorrect MIME type (text/html instead of image/jpeg or image/png), causing them to not load properly.

**Causes**:
- The image doesn't exist at the specified URL
- The server is misconfigured and not setting the correct Content-Type header
- The URL is pointing to a page rather than an actual image file
- The image path doesn't have a file extension

**Solutions**:

1. **Ensure all image paths have proper file extensions**:
   - All image paths should end with a valid image extension (.jpg, .jpeg, .png, etc.)
   - Example: Change `images/product` to `images/product.jpg`

2. **Upload missing images to ImageKit**:
   - Make sure all images referenced in your code are uploaded to ImageKit
   - Maintain the same folder structure as in your code

3. **Use the updated ImageKit utility**:
   - The updated utility will automatically add a file extension if one is missing
   - It will also handle various edge cases like query parameters and relative paths

### 2. Broken Image Links

**Problem**: Some image links are broken because the images don't exist at the specified path.

**Solutions**:

1. **Run the validation script**:
   ```bash
   npm run validate-images
   ```
   This will generate a report of all invalid image URLs in your project.

2. **Fix the invalid URLs**:
   - Upload the missing images to ImageKit
   - Update the image paths in your code
   - Make sure all image paths have proper file extensions

### 3. Images Not Loading from ImageKit

**Problem**: Images are not loading from ImageKit even though they exist.

**Solutions**:

1. **Check the ImageKit URL endpoint**:
   - Make sure the `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` in your `.env` file is correct
   - It should be something like `https://ik.imagekit.io/your_imagekit_id`

2. **Verify the image exists in ImageKit**:
   - Log in to your ImageKit dashboard
   - Check if the image exists at the specified path
   - If not, upload it with the same path structure

3. **Check for CORS issues**:
   - Make sure ImageKit is configured to allow requests from your domain
   - In the ImageKit dashboard, go to Settings > CORS > Add your domain

## How to Use the Updated Image Component

The updated Image component has improved error handling and will automatically fall back to the original URL if the ImageKit URL fails to load.

```jsx
import Image from '@/components/ui/image';

// Basic usage
<Image 
  src="/images/products/product1.jpg" 
  alt="Product" 
  width={300} 
  height={300} 
/>

// With fallback disabled (will show nothing if ImageKit URL fails)
<Image 
  src="/images/products/product1.jpg" 
  alt="Product" 
  width={300} 
  height={300} 
  fallbackToOriginal={false}
/>
```

## How to Fix Specific Image Types

### 1. Background Images in CSS

For background images in CSS, use the `getImageKitUrl` function:

```css
.hero {
  background-image: url('/images/hero.jpg'); /* Original */
}
```

Change to:

```jsx
import { getImageKitUrl } from '@/lib/imagekit';

const heroStyle = {
  backgroundImage: `url(${getImageKitUrl('/images/hero.jpg')})`
};

<div style={heroStyle}>Hero Section</div>
```

### 2. Images in Markdown or HTML

For images in Markdown or HTML content, you'll need to process the content before rendering:

```jsx
import { getImageKitUrl } from '@/lib/imagekit';

// Process Markdown content
const processMarkdown = (content) => {
  // Replace image URLs with ImageKit URLs
  return content.replace(
    /!\[([^\]]+)\]\(([^)]+)\)/g, 
    (match, alt, src) => `![${alt}](${getImageKitUrl(src)})`
  );
};

// Process HTML content
const processHtml = (content) => {
  // Replace image URLs with ImageKit URLs
  return content.replace(
    /<img([^>]*)src=["']([^"']+)["']([^>]*)>/g,
    (match, before, src, after) => `<img${before}src="${getImageKitUrl(src)}"${after}>`
  );
};
```

## Preventing Future Issues

1. **Always use the Image component**:
   - Use the custom Image component for all images
   - It handles error cases and fallbacks automatically

2. **Always include file extensions**:
   - Make sure all image paths have proper file extensions
   - This helps browsers and servers identify the correct MIME type

3. **Run the validation script regularly**:
   - Run `npm run validate-images` to check for invalid image URLs
   - Fix any issues before deploying

4. **Keep your ImageKit account organized**:
   - Maintain the same folder structure in ImageKit as in your code
   - Use descriptive file names

## Need More Help?

If you're still experiencing issues with images, try these steps:

1. Check the browser console for errors
2. Verify that the image exists at the specified path
3. Make sure the image has a valid file extension
4. Check if the image is accessible directly through the browser
5. Try uploading the image to ImageKit manually

If all else fails, you can always use an external image hosting service like Imgur or Cloudinary as a temporary solution.
