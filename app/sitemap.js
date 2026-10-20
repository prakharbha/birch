export default function sitemap() {
  const base = 'https://birchhouseclub.com'

  const routes = [
    { url: base,                    priority: 1.0, changeFrequency: 'monthly', lastModified: '2026-08-25' },
    { url: `${base}/suites`,        priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-25' },
    { url: `${base}/suites/junior-suite`,      priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-08-25' },
    { url: `${base}/suites/one-bedroom-suite`, priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-08-25' },
    { url: `${base}/experience`,    priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-05-07' },
    { url: `${base}/location`,      priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-05-07' },
    { url: `${base}/photos`,        priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-05-07' },
    { url: `${base}/reservations`,  priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-05-07' },
  ]

  return routes.map(route => ({
    ...route,
    lastModified: new Date(route.lastModified),
  }))
}
