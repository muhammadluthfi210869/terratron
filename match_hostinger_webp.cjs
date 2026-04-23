const fs = require('fs');
const path = require('path');

const publicAssetDir = path.join(__dirname, 'public', 'asset');
const srcDir = path.join(__dirname, 'src');

/* Rename public assets */
function renameAssets(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            renameAssets(fullPath);
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
renameAssets(publicAssetDir);

/* Update source code to append (1) where missing */
function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Replace .webp with (1).webp, but avoid doing it if it already has (1).webp
    // A regex looking for .webp preceded by something other than " (1)", or maybe just explicitly check matching.

    // Replaces .webp but NOT \s*\(1\)\.webp
    // Ex: "COVER_CAT 305.5E2.webp" -> "COVER_CAT 305.5E2 (1).webp"
    // Note: JS regex negative lookbehind is supported in node.
    const regex = /(?<! \(\d+\))(?<!\(\d+\))\.webp/gi;

    let newContent = content.replace(regex, (match) => {
        changed = true;
        return ' (1).webp';
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
processFile(path.join(__dirname, 'index.html'));

console.log('Finished renaming local files and updating codebase to match Hostinger.');
