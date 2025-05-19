/**
 * Script to update all Next.js Image imports to use our custom Image component
 * Run with: node scripts/update-image-imports.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Directories to scan
const DIRS_TO_SCAN = ['app', 'components', 'src'];

// File extensions to process
const FILE_EXTENSIONS = ['.tsx', '.jsx', '.ts', '.js'];

// Patterns to match and replace
const PATTERNS = [
  // Replace Next.js Image import with our custom Image import
  {
    match: /import\s+Image\s+from\s+['"]next\/image['"]/g,
    replace: "import Image from '@/components/ui/image'"
  },
  // Replace Image component with src attribute
  {
    match: /<Image\s+([^>]*?)src\s*=\s*["']([^"']+)["']([^>]*?)>/g,
    replace: (match, before, src, after) => {
      // Don't modify if it's already using a variable or is a remote URL
      if (src.startsWith('{') || src.startsWith('http') || src.includes('${')) {
        return match;
      }
      return `<Image ${before}src="${src}"${after}>`;
    }
  }
];

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
 * Process a file to update image imports and usages
 * @param {string} filePath - Path to the file
 */
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    let newContent = content;

    // Apply all patterns
    for (const pattern of PATTERNS) {
      newContent = newContent.replace(pattern.match, pattern.replace);
    }

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
  console.log('Starting image import update script...');
  
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
  
  console.log('Image import update completed!');
}

// Run the script
main().catch(error => {
  console.error('Error running script:', error);
  process.exit(1);
});
