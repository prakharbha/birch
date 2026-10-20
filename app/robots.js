export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ stays crawlable: Google needs its CSS, JS and images to render the pages.
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://birchhouseclub.com/sitemap.xml',
  }
}
