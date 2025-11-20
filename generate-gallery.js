const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, 'photos');
const outputFile = path.join(photosDir, 'list.json');

try {
  const files = fs.readdirSync(photosDir)
    .filter(f => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
    .filter(f => !f.toLowerCase().includes('logo') && !f.startsWith('.'));

  fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
  console.log(`Generated list.json with ${files.length} photos`);
} catch (err) {
  console.error('Error generating gallery:', err);
  process.exit(1);
}
