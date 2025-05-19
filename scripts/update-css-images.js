/**
 * Script to update all image URLs in CSS files to use ImageKit
 * Run with: node scripts/update-css-images.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Directories to scan
const DIRS_TO_SCAN = ['app', 'components', 'styles', 'public'];

// File extensions to process
const FILE_EXTENSIONS = ['.css', '.scss', '.sass', '.less'];

// ImageKit URL endpoint
const IMAGEKIT_URL_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/pon54xoks';

// Pattern to match and replace image URLs in CSS
const CSS_URL_PATTERN = /url\(['"]?([^'")]+)['"]?\)/g;

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
 * Convert a local image path to an ImageKit URL
 * @param {string} src - The source path of the image
 * @returns {string} - The ImageKit URL for the image
 */
function getImageKitUrl(src) {
  // If the source is already an ImageKit URL or an external URL, return it as is
  if (src.startsWith('https://') || src.startsWith('http://') || src.startsWith('data:')) {
    return src;
  }

  // Remove leading slash if present
  const path = src.startsWith('/') ? src.substring(1) : src;

  // Return the ImageKit URL
  return `${IMAGEKIT_URL_ENDPOINT}/${path}`;
}

/**
 * Process a CSS file to update image URLs
 * @param {string} filePath - Path to the file
 */
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Replace all image URLs with ImageKit URLs
    const newContent = content.replace(CSS_URL_PATTERN, (match, url) => {
      // Skip data URLs, SVGs, and already processed URLs
      if (url.startsWith('data:') || url.includes('svg+xml') || url.includes(IMAGEKIT_URL_ENDPOINT)) {
        return match;
      }
      
      const imageKitUrl = getImageKitUrl(url);
      return `url('${imageKitUrl}')`;
    });

    // Only write the file if changes were made
    if (newContent !== content) {
      await writeFile(filePath, newContent, 'utf8');
      console.log(`Updated: ${filePath}`);
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
 * Main function to run the script
 */
async function main() {
  console.log('Starting CSS image URL update script...');
  
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
  
  console.log('CSS image URL update completed!');
}

// Run the script
main().catch(error => {
  console.error('Error running script:', error);
  process.exit(1);
});
