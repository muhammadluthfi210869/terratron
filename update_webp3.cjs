const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkSrc(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const stat = fs.statSync(path.join(dir, file));
        if (stat.isDirectory()) {
            walkSrc(path.join(dir, file), fileList);
        } else if (/\.(js|jsx|css|ts|tsx)$/i.test(file)) {
            fileList.push(path.join(dir, file));
        }
    }
    return fileList;
}

const files = walkSrc(srcDir);

let totalChanged = 0;
files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Convert .jpeg, .jpg, .png to .webp
    // Add (1) manually to these explicitly known ones or all of them.
    // Actually the user said: "paling cuma berubah di akhri nama file nya ada (1)".
    // So if the file is "something.png", it might be "something (1).webp" or just "something.webp".

    // Instead of regex capturing, let's just use string replace for all known old images.
    // Or simpler: replace .png, .jpg, .jpeg with .webp globally, and let the user know if there are broken links.
    // Wait, some might have " (1)" and some don't!
});
// let's just write a script that does it dynamically by checking if the webp exists
