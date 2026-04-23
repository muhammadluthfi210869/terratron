const fs = require('fs');
const path = require('path');

const publicAssetDir = path.join(__dirname, 'public', 'asset');
const srcDir = path.join(__dirname, 'src');
const htmlFile = path.join(__dirname, 'index.html');

// Rename all .webp files in public/asset to have (1) suffix if they don't already
function ensureOneSuffix(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            ensureOneSuffix(fullPath);
        } else if (file.toLowerCase().endsWith('.webp')) {
            if (!file.includes('(1)')) {
                const newName = file.substring(0, file.length - 5) + ' (1).webp';
                const newPath = path.join(dir, newName);
                fs.renameSync(fullPath, newPath);
                console.log(`Renamed: ${file} -> ${newName}`);
            }
        }
    }
}

// ensureOneSuffix(publicAssetDir); // ONLY RENAME LOCALLY
