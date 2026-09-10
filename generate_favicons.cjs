const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const { execSync } = require('child_process');

// SVG with Black left chevron (#18181B) and Red right chevron (#FF203C) matching SalesNego Circle-profile-logo.svg
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <g transform="translate(6, 0)">
    <!-- Left Black Chevron -->
    <path
      d="M 152 144 L 252 256 L 152 368"
      fill="none"
      stroke="#18181B"
      stroke-width="72"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Right Red Chevron -->
    <path
      d="M 260 144 L 360 256 L 260 368"
      fill="none"
      stroke="#FF203C"
      stroke-width="72"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>`;

// Also create a version with a subtle white halo/contrast stroke for ultra-clear visibility on dark browser tabs
const svgWithHalo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <g transform="translate(6, 0)">
    <!-- White background contrast stroke for dark browser tabs -->
    <path
      d="M 152 144 L 252 256 L 152 368"
      fill="none"
      stroke="#FFFFFF"
      stroke-width="88"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.9"
    />
    <!-- Left Black Chevron -->
    <path
      d="M 152 144 L 252 256 L 152 368"
      fill="none"
      stroke="#18181B"
      stroke-width="72"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Right Red Chevron -->
    <path
      d="M 260 144 L 360 256 L 260 368"
      fill="none"
      stroke="#FF203C"
      stroke-width="72"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>`;

fs.writeFileSync('public/favicon.svg', svg);
fs.writeFileSync('dist/favicon.svg', svg);

function renderPNG(size, targetPath) {
  const resvg = new Resvg(svgWithHalo, { fitTo: { mode: 'width', value: size } });
  const pngData = resvg.render().asPng();
  fs.writeFileSync(targetPath, pngData);
  fs.writeFileSync(targetPath.replace('public/', 'dist/'), pngData);
  console.log(`Rendered ${size}x${size} -> ${targetPath}`);
}

renderPNG(32, 'public/favicon.png');
renderPNG(192, 'public/favicon-192.png');
renderPNG(512, 'public/favicon-512.png');
renderPNG(180, 'public/apple-touch-icon.png');

// Convert 32x32 PNG to favicon.ico
execSync('convert public/favicon.png public/favicon.ico && cp public/favicon.ico dist/favicon.ico');
console.log('Successfully generated updated profile logo favicons!');
