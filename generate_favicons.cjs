const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const { execSync } = require('child_process');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <g transform="translate(6, 0)">
    <path
      d="M 152 144 L 252 256 L 152 368"
      fill="none"
      stroke="#3261F6"
      stroke-width="72"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M 260 144 L 360 256 L 260 368"
      fill="none"
      stroke="#FF7F3A"
      stroke-width="72"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>`;

fs.writeFileSync('public/favicon.svg', svg);
fs.writeFileSync('dist/favicon.svg', svg);

function renderPNG(size, targetPath) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } });
  const pngData = resvg.render().asPng();
  fs.writeFileSync(targetPath, pngData);
  fs.writeFileSync(targetPath.replace('public/', 'dist/'), pngData);
  console.log(`Rendered ${size}x${size} -> ${targetPath}`);
}

renderPNG(32, 'public/favicon.png');
renderPNG(192, 'public/favicon-192.png');
renderPNG(512, 'public/favicon-512.png');
renderPNG(180, 'public/apple-touch-icon.png');

// Convert 32x32 to favicon.ico
execSync('convert public/favicon.png public/favicon.ico && cp public/favicon.ico dist/favicon.ico');
console.log('Successfully generated all favicons!');
