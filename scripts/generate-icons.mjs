/**
 * Regenerates favicons, PWA icons and the social share image.
 *
 * The previous public/ icons were all the same 1024x1024, 602 KB file — including
 * the ones named logo192.png and logo512.png, which meant manifest.json declared
 * sizes the files did not have, and the favicon alone cost 602 KB per visit.
 *
 * Run: node scripts/generate-icons.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const LOGO = 'src/assets/logo.png';
const OUT = 'public';

/** Square logo renditions: [filename, pixel size] */
const ICONS = [
  ['favicon-32.png', 32],
  ['logo-96.png', 96], // header/footer, displayed at ~48px for 2x screens
  ['apple-touch-icon.png', 180],
  ['logo-192.png', 192],
  ['logo-512.png', 512],
];

await mkdir(OUT, { recursive: true });

for (const [name, size] of ICONS) {
  await sharp(LOGO)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: true })
    .toFile(`${OUT}/${name}`);
  console.log(`  ${name} (${size}x${size})`);
}

// Social share card. Uses a real photograph of real work — a generated graphic
// would be worse, and no image at all means shared WhatsApp links render blank.
await sharp('src/assets/sanitar_1.jpg')
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${OUT}/og-image.jpg`);
console.log('  og-image.jpg (1200x630)');
