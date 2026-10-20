// next/image loader: points each requested width at its pre-built AVIF
// (public/images/w<width>/<name>.avif, made by `npm run images`). Anything else is served as is.
export default function imageLoader({ src, width }) {
  const match = src.match(/^\/images\/([^/]+\.avif)$/)
  return match ? `/images/w${width}/${match[1]}` : src
}
