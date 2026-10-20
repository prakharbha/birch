import { DEVICE_SIZES, IMAGE_SIZES } from './lib/imageWidths.mjs'

// The Art of Welcome book site is its own Vercel project (repo art-of-welcome, basePath /book),
// served here at birchhouseclub.com/book (Next.js multi-zones).
const BOOK_ORIGIN = 'https://art-of-welcome.vercel.app'

// Images and videos keep their names when replaced, so cache for a day and revalidate in the background.
const MEDIA_CACHE = 'public, max-age=86400, stale-while-revalidate=604800'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/book', destination: `${BOOK_ORIGIN}/book` },
      { source: '/book/:path*', destination: `${BOOK_ORIGIN}/book/:path*` },
    ]
  },
  async headers() {
    return ['/images/:path*', '/videos/:path*'].map(source => ({
      source,
      headers: [{ key: 'Cache-Control', value: MEDIA_CACHE }],
    }))
  },
  images: {
    // Vercel's optimizer serves AVIF sources at full size, so every width is pre-built
    // (npm run images) and the loader points straight at it.
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
    deviceSizes: DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pillarshotel.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
