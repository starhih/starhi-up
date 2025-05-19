/**
 * Script to validate image URLs in the project
 * Run with: node scripts/validate-images.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const https = require('https');
const http = require('http');
const { URL } = require('url');
require('dotenv').config();

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);

// Directories to scan
const DIRS_TO_SCAN = ['app', 'components', 'src', 'public'];

// File extensions to process
const FILE_EXTENSIONS = ['.tsx', '.jsx', '.ts', '.js', '.css', '.scss', '.html', '.md'];

// Image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];

// ImageKit URL endpoint
const IMAGEKIT_URL_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/pon54xoks';

// Results
const results = {
  totalImages: 0,
  validImages: 0,
  invalidImages: 0,
  imageUrls: [],
  invalidImageUrls: []
};

/**
 * Check if a file should be processed
 * @param {string} filePath - Path to the file
 * @returns {boolean} - Whether the file should be processed
 */
function shouldProcessFile(filePath) {
  const ext = path.extname(filePath);
  return FILE_EXTENSIONS.includes(ext);
}

/**
 * Extract image URLs from a file
 * @param {string} filePath - Path to the file
 * @param {string} content - File content
 * @returns {string[]} - Array of image URLs
 */
function extractImageUrls(filePath, content) {
  const urls = [];
  const ext = path.extname(filePath);
  
  // Extract URLs from different file types
  if (ext === '.tsx' || ext === '.jsx' || ext === '.ts' || ext === '.js') {
    // Extract from src attributes
    const srcMatches = content.match(/src=["']([^"']+\.(jpg|jpeg|png|gif|webp|svg|avif))["']/g) || [];
    srcMatches.forEach(match => {
      const url = match.match(/src=["']([^"']+)["']/)[1];
      urls.push(url);
    });
    
    // Extract from background styles
    const bgMatches = content.match(/background(-image)?:\s*url\(["']?([^"')]+)["']?\)/g) || [];
    bgMatches.forEach(match => {
      const url = match.match(/url\(["']?([^"')]+)["']?\)/)[1];
      urls.push(url);
    });
    
    // Extract from getImageKitUrl calls
    const imageKitMatches = content.match(/getImageKitUrl\(["']([^"']+)["']/g) || [];
    imageKitMatches.forEach(match => {
      const url = match.match(/getImageKitUrl\(["']([^"']+)["']/)[1];
      urls.push(url);
    });
  } else if (ext === '.css' || ext === '.scss') {
    // Extract from background styles
    const bgMatches = content.match(/background(-image)?:\s*url\(["']?([^"')]+)["']?\)/g) || [];
    bgMatches.forEach(match => {
      const urlMatch = match.match(/url\(["']?([^"')]+)["']?\)/);
      if (urlMatch && urlMatch[1]) {
        urls.push(urlMatch[1]);
      }
    });
  }
  
  return urls;
}

/**
 * Check if a URL is an image
 * @param {string} url - URL to check
 * @returns {boolean} - Whether the URL is an image
 */
function isImageUrl(url) {
  if (!url) return false;
  
  // Check if the URL has an image extension
  const ext = path.extname(url).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Validate an image URL
 * @param {string} url - URL to validate
 * @returns {Promise<boolean>} - Whether the URL is valid
 */
async function validateImageUrl(url) {
  return new Promise((resolve) => {
    try {
      // Skip data URLs
      if (url.startsWith('data:')) {
        resolve(true);
        return;
      }
      
      // Handle relative URLs
      let fullUrl = url;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        // For ImageKit URLs
        if (url.startsWith('/')) {
          fullUrl = `${IMAGEKIT_URL_ENDPOINT}${url}`;
        } else {
          fullUrl = `${IMAGEKIT_URL_ENDPOINT}/${url}`;
        }
      }
      
      // Parse the URL
      const parsedUrl = new URL(fullUrl);
      
      // Choose the appropriate protocol
      const protocol = parsedUrl.protocol === 'https:' ? https : http;
      
      // Make a HEAD request to check if the image exists
      const req = protocol.request(
        {
          method: 'HEAD',
          host: parsedUrl.host,
          path: parsedUrl.pathname + parsedUrl.search,
          timeout: 5000
        },
        (res) => {
          // Check if the response is successful and the content type is an image
          const contentType = res.headers['content-type'] || '';
          const isSuccess = res.statusCode >= 200 && res.statusCode < 300;
          const isImage = contentType.startsWith('image/');
          
          resolve(isSuccess && isImage);
        }
      );
      
      req.on('error', () => {
        resolve(false);
      });
      
      req.on('timeout', () => {
        req.destroy();
        resolve(false);
      });
      
      req.end();
    } catch (error) {
      resolve(false);
    }
  });
}

/**
 * Process a file to extract and validate image URLs
 * @param {string} filePath - Path to the file
 */
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const imageUrls = extractImageUrls(filePath, content);
    
    for (const url of imageUrls) {
      // Skip duplicates
      if (results.imageUrls.includes(url)) {
        continue;
      }
      
      results.imageUrls.push(url);
      results.totalImages++;
      
      // Validate the URL
      const isValid = await validateImageUrl(url);
      
      if (isValid) {
        results.validImages++;
      } else {
        results.invalidImages++;
        results.invalidImageUrls.push({
          url,
          file: filePath
        });
        console.log(`Invalid image URL: ${url} in file: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

/**
 * Recursively scan a directory for files to process
 * @param {string} dir - Directory to scan
 */
async function scanDirectory(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Skip node_modules and .next directories
        if (entry.name !== 'node_modules' && entry.name !== '.next') {
          await scanDirectory(fullPath);
        }
      } else if (entry.isFile() && shouldProcessFile(fullPath)) {
        await processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error);
  }
}

/**
 * Generate a report of invalid image URLs
 */
async function generateReport() {
  const reportPath = path.join(process.cwd(), 'image-validation-report.md');
  
  let report = `# Image Validation Report\n\n`;
  report += `Generated on: ${new Date().toLocaleString()}\n\n`;
  report += `## Summary\n\n`;
  report += `- Total Images: ${results.totalImages}\n`;
  report += `- Valid Images: ${results.validImages}\n`;
  report += `- Invalid Images: ${results.invalidImages}\n\n`;
  
  if (results.invalidImageUrls.length > 0) {
    report += `## Invalid Image URLs\n\n`;
    
    for (const { url, file } of results.invalidImageUrls) {
      report += `- \`${url}\` in file: \`${file}\`\n`;
    }
    
    report += `\n## Recommendations\n\n`;
    report += `1. Check if the images exist at the specified paths\n`;
    report += `2. Ensure all image URLs have proper file extensions (.jpg, .png, etc.)\n`;
    report += `3. Upload missing images to ImageKit with the same path structure\n`;
    report += `4. For images that should be served with a different MIME type, rename them with the appropriate extension\n`;
  } else {
    report += `All images are valid! 🎉\n`;
  }
  
  await writeFile(reportPath, report, 'utf8');
  console.log(`Report generated at: ${reportPath}`);
}

/**
 * Main function to run the script
 */
async function main() {
  console.log('Starting image validation...');
  
  const rootDir = process.cwd();
  
  for (const dir of DIRS_TO_SCAN) {
    const dirPath = path.join(rootDir, dir);
    
    try {
      const dirStat = await stat(dirPath);
      if (dirStat.isDirectory()) {
        console.log(`Scanning directory: ${dirPath}`);
        await scanDirectory(dirPath);
      }
    } catch (error) {
      console.log(`Directory ${dirPath} does not exist, skipping.`);
    }
  }
  
  console.log('\nImage validation completed!');
  console.log(`Total Images: ${results.totalImages}`);
  console.log(`Valid Images: ${results.validImages}`);
  console.log(`Invalid Images: ${results.invalidImages}`);
  
  await generateReport();
}

// Run the script
main().catch(error => {
  console.error('Error running script:', error);
  process.exit(1);
});
