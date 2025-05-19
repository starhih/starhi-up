/**
 * Main script to update all image references to use ImageKit
 * Run with: node scripts/update-all-images.js
 */

const { spawn } = require('child_process');
const path = require('path');
require('dotenv').config();

// Check if ImageKit URL endpoint is set
if (!process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT) {
  console.error('Error: NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT is not set in .env file');
  process.exit(1);
}

console.log('ImageKit URL Endpoint:', process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT);

/**
 * Run a script and return a promise that resolves when the script completes
 * @param {string} scriptPath - Path to the script to run
 * @returns {Promise<void>} - Promise that resolves when the script completes
 */
function runScript(scriptPath) {
  return new Promise((resolve, reject) => {
    const scriptProcess = spawn('node', [scriptPath], { stdio: 'inherit' });
    
    scriptProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Script ${scriptPath} exited with code ${code}`));
      }
    });
    
    scriptProcess.on('error', (error) => {
      reject(error);
    });
  });
}

/**
 * Main function to run all update scripts
 */
async function main() {
  console.log('Starting image update process...');
  
  try {
    // Run the script to update image imports
    console.log('\n=== Updating Image Imports ===');
    await runScript(path.join(__dirname, 'update-image-imports.js'));
    
    // Run the script to update CSS image URLs
    console.log('\n=== Updating CSS Image URLs ===');
    await runScript(path.join(__dirname, 'update-css-images.js'));
    
    console.log('\n=== All Image Updates Completed Successfully ===');
  } catch (error) {
    console.error('Error running update scripts:', error);
    process.exit(1);
  }
}

// Run the main function
main();
