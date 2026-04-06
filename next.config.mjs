/** @type {import('next').NextConfig} */
const nextConfig = {
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
