const fs = require('fs');
const path = require('path');

// Simple PDF text extraction (basic approach)
const pdfPath = process.argv[2];
const pdfBuffer = fs.readFileSync(pdfPath);
const pdfText = pdfBuffer.toString('latin1');

// Extract text between stream objects
const textMatches = pdfText.match(/BT[\s\S]*?ET/g) || [];
let extractedText = '';

textMatches.forEach(match => {
  // Extract text within parentheses or brackets
  const textContent = match.match(/\((.*?)\)/g) || [];
  textContent.forEach(text => {
    extractedText += text.replace(/[()]/g, '') + ' ';
  });
});

console.log(extractedText.substring(0, 50000));
