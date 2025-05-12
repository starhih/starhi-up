// This script creates placeholder images for the branded ingredients
// Run with: node scripts/create-branded-placeholders.js

const fs = require('fs');
const path = require('path');

// Create the branded directory if it doesn't exist
const brandedDir = path.join(__dirname, '../public/images/branded');
if (!fs.existsSync(brandedDir)) {
  fs.mkdirSync(brandedDir, { recursive: true });
  console.log(`Created directory: ${brandedDir}`);
}

// List of branded ingredient images
const brandedImages = [
  'curcufit-main',
  'curcufit-logo',
  'curcufit-capsules',
  'curcufit-powder',
  'curcufit-study1',
  'curcufit-study2',
  'curcufit-study3',
  'curcufit-whitepaper',
  'curcufit-mechanism',
  'curcufit-sustainability',
  'curcufit-why-choose'
];

// Create a simple placeholder text file for each image
brandedImages.forEach(image => {
  const filePath = path.join(brandedDir, `${image}.jpg`);
  
  // Create a placeholder file (just a text file with .jpg extension)
  fs.writeFileSync(filePath, `This is a placeholder for ${image} image. Replace with an actual image.`);
  
  console.log(`Created placeholder: ${filePath}`);
});

console.log('All placeholder files created successfully.');
console.log('Please replace these placeholders with actual images before deploying to production.');
