export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://birchhouseclub.com/sitemap.xml',
    host: 'https://birchhouseclub.com',
  }
}
