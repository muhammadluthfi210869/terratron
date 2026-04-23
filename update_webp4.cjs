const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicAssetDir = path.join(__dirname, 'public', 'asset');

// 1. Get all webp files in public/asset
var allWebpFiles = [];
function walkAssets(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkAssets(fullPath);
        } else if (file.toLowerCase().endsWith('.webp')) {
            allWebpFiles.push(fullPath);
        }
    }
}
walkAssets(publicAssetDir);

function getWebpReplacement(originalStr) {
    let decoded = '';
    try {
        decoded = decodeURI(originalStr);
    } catch {
        decoded = originalStr;
    }

    let basename = path.basename(decoded, path.extname(decoded));

    // Exact matching variations
    let possibleNames = [
        basename + '.webp',
        basename + ' (1).webp',
        basename + '(1).webp'
    ];

    for (let pName of possibleNames) {
        let match = allWebpFiles.find(p => path.basename(p).toLowerCase() === pName.toLowerCase());
        if (match) {
            let rel = path.relative(path.join(__dirname, 'public'), match).replace(/\\/g, '/');
            // Restore prefix if original had it
            let finalStr = '/' + rel;
            if (originalStr.startsWith('https://terratron.id')) {
                finalStr = 'https://terratron.id' + finalStr;
            }
            return finalStr;
        }
    }

    // Fuzzy matching fallback
    let match = allWebpFiles.find(p => path.basename(p).toLowerCase().includes(basename.toLowerCase()));
    if (match) {
        let rel = path.relative(path.join(__dirname, 'public'), match).replace(/\\/g, '/');
        let finalStr = '/' + rel;
        if (originalStr.startsWith('https://terratron.id')) {
            finalStr = 'https://terratron.id' + finalStr;
        }
        return finalStr;
    }

    return null;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Pattern to catch ALL image strings like /asset/foo/bar.jpg or https://terratron.id/asset/foo.png
    const regex = /(?:https:\/\/terratron\.id)?\/asset\/[^\'\"<>()\s]+\.(?:jpg|jpeg|png)/gi;

    let changed = false;
    let newContent = content.replace(regex, (match) => {
        let rep = getWebpReplacement(match);
        if (rep && rep !== match) {
            console.log(`Replaced: ${match} -> ${rep}`);
            changed = true;
            return rep;
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated file: ${filePath}`);
    }
}

function walkSrc(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkSrc(fullPath);
        } else if (/\.(js|jsx|css|html)$/i.test(file)) {
            processFile(fullPath);
        }
    }
}

walkSrc(srcDir);
// Also process index.html at root
processFile(path.join(__dirname, 'index.html'));

console.log('Script execution finished.');
