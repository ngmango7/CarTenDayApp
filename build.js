const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');

if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

const files = ['index.html', 'styles.css', 'script.js'];
for (const file of files) {
  const source = path.join(root, file);
  const target = path.join(dist, file);
  fs.copyFileSync(source, target);
}

console.log('Build complete: dist/ created with static app assets.');
