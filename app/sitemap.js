export default function sitemap() {
  const base = 'https://birchhouseclub.com'

  const routes = [
    { url: base,                    priority: 1.0,  changeFrequency: 'monthly' },
    { url: `${base}/suites`,        priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${base}/experience`,    priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${base}/location`,      priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${base}/photos`,        priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${base}/reservations`,  priority: 0.9,  changeFrequency: 'monthly' },
  ]

  return routes.map(route => ({
    ...route,
    lastModified: new Date(),
  }))
}
