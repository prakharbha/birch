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
