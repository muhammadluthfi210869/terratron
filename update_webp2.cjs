const fs = require('fs');
const path = require('path');

const publicAssetDir = path.join(__dirname, 'public', 'asset');
const srcDir = path.join(__dirname, 'src');

var allWebpFiles = [];
function walkAssets(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const stat = fs.statSync(path.join(dir, file));
        if (stat.isDirectory()) {
            walkAssets(path.join(dir, file));
        } else if (file.endsWith('.webp')) {
            allWebpFiles.push(path.join(dir, file));
        }
    }
}
walkAssets(publicAssetDir);

function findWebpEquivalent(oldPath) {
    let decoded = '';
    try {
        decoded = decodeURI(oldPath);
    } catch {
        decoded = oldPath;
    }

    let basename = path.basename(decoded, path.extname(decoded));

    const exactName1 = basename + '.webp';
    const exactName2 = basename + ' (1).webp';

    let match = allWebpFiles.find(p => path.basename(p) === exactName1 || path.basename(p) === exactName2);

    // Fallback: try case-insensitive or space-insensive matching if exact fails
    if (!match) {
        match = allWebpFiles.find(p => p.toLowerCase().includes(basename.toLowerCase()));
    }

    if (match) {
        const relativePath = path.relative(path.join(__dirname, 'public'), match).replace(/\\/g, '/');
        return '/' + relativePath;
    }

    return null;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    const regex = /(\/asset\/[^\'\"]+?\.(?:jpg|jpeg|png))/gi;

    let newContent = content.replace(regex, (match) => {
        const webpMatch = findWebpEquivalent(match);
        if (webpMatch) {
            changed = true;
            return webpMatch;
        }
        console.log(`Warning: Could not find webp equivalent for ${match} in ${filePath}`);
        return match;
    });

    if (changed) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

var allSrcFiles = [];
function walkSrc(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const stat = fs.statSync(path.join(dir, file));
        if (stat.isDirectory()) {
            walkSrc(path.join(dir, file));
        } else if (/\.(js|jsx|css|ts|tsx)$/i.test(file)) {
            allSrcFiles.push(path.join(dir, file));
        }
    }
}
walkSrc(srcDir);

allSrcFiles.forEach(processFile);
console.log("Done");
