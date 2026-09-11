const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const { execSync } = require('child_process');

// Official SalesNego Circle Logo with crisp white background
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <!-- Crisp white circular badge background for maximum contrast in both dark & light browser tabs -->
  <circle cx="256" cy="256" r="256" fill="#FFFFFF" />
  <!-- Centered SalesNego Chevrons -->
  <g transform="translate(256, 256) scale(0.72) translate(-256, -256)">
    <path
      d="M 85 94 L 247 256 L 85 418"
      fill="none"
      stroke="#2563EB"
      stroke-width="96"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M 265 94 L 427 256 L 265 418"
      fill="none"
      stroke="#FF6004"
      stroke-width="96"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>`;

// Write SVGs to public and dist
fs.writeFileSync('public/favicon.svg', svg);
fs.writeFileSync('dist/favicon.svg', svg);
fs.writeFileSync('public/salesnego-circle-logo.svg', svg);
fs.writeFileSync('dist/salesnego-circle-logo.svg', svg);

function renderPNG(size, filename) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } });
  const pngData = resvg.render().asPng();
  fs.writeFileSync(`public/${filename}`, pngData);
  fs.writeFileSync(`dist/${filename}`, pngData);
  console.log(`Saved public/${filename} & dist/${filename} (${size}x${size})`);
  return pngData;
}

renderPNG(16, 'favicon-16x16.png');
renderPNG(32, 'favicon-32x32.png');
renderPNG(32, 'favicon.png');
renderPNG(48, 'favicon-48x48.png');
renderPNG(180, 'apple-touch-icon.png');
renderPNG(192, 'favicon-192.png');
renderPNG(512, 'favicon-512.png');

// Create multi-resolution favicon.ico containing 16x16, 32x32, 48x48
execSync('convert public/favicon-16x16.png public/favicon-32x32.png public/favicon-48x48.png public/favicon.ico');
execSync('cp public/favicon.ico dist/favicon.ico');

console.log('White-background Circle Favicons and ICO successfully generated!');
