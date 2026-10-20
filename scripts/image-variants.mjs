// Builds the resized AVIF copies that next/image serves (see lib/imageLoader.js).
// Vercel's optimizer passes AVIF sources through at full size, so we resize ahead of time:
// public/images/<name>.avif → public/images/w<width>/<name>.avif for every width in next.config.mjs.
// Run after adding or replacing an image: npm run images
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import { IMAGE_WIDTHS } from '../lib/imageWidths.mjs'

const dir = path.resolve('public/images')
const sources = fs.readdirSync(dir).filter(f => f.endsWith('.avif'))

for (const file of sources) {
  const src = path.join(dir, file)
  const quality = /logo/i.test(file) ? 70 : 55
  for (const width of IMAGE_WIDTHS) {
    const out = path.join(dir, `w${width}`, file)
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) continue
    fs.mkdirSync(path.dirname(out), { recursive: true })
    await sharp(src).resize({ width, withoutEnlargement: true }).avif({ quality, effort: 6 }).toFile(out)
  }
  console.log(file)
}
