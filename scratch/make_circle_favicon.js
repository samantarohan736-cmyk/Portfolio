import fs from 'fs';

const imgBuffer = fs.readFileSync('src/assets/profileImage.jpeg');
const base64Img = imgBuffer.toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <clipPath id="circle">
    <circle cx="50" cy="50" r="50" />
  </clipPath>
  <image href="data:image/jpeg;base64,${base64Img}" width="100" height="100" clip-path="url(#circle)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

fs.writeFileSync('public/favicon.svg', svgContent);
fs.writeFileSync('public/profile-circle.svg', svgContent);
console.log('Circular SVG favicon generated successfully!');
