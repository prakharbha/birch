// The Art of Welcome book site is its own Vercel project (repo art-of-welcome, basePath /book),
// served here at birchhouseclub.com/book (Next.js multi-zones).
const BOOK_ORIGIN = 'https://art-of-welcome.vercel.app'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/book', destination: `${BOOK_ORIGIN}/book` },
      { source: '/book/:path*', destination: `${BOOK_ORIGIN}/book/:path*` },
    ]
  },
  images: {
    // Serve AVIF to browsers that accept it, WebP otherwise.
    formats: ['image/avif', 'image/webp'],
    // Sources are static and never change in place, so keep optimized copies for a year.
    minimumCacheTTL: 31536000,
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
