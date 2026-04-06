'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const ZoomParallax = dynamic(() => import('./ZoomParallax'), { ssr: false })

// 7 images for the zoom parallax slots — using the Pillars gallery URLs
const parallaxImages = [
  'https://pillarshotel.com/wp-content/uploads/2023/04/61.jpg',
  'https://pillarshotel.com/wp-content/uploads/2023/04/91.jpg',
  'https://pillarshotel.com/wp-content/uploads/2020/10/ss4.jpg',
  'https://pillarshotel.com/wp-content/uploads/2023/10/for-photo-gallery-1.jpg',
  'https://pillarshotel.com/wp-content/uploads/2023/04/81.jpg',
  'https://pillarshotel.com/wp-content/uploads/2023/04/41.jpg',
  'https://pillarshotel.com/wp-content/uploads/2023/10/photo-gallery-2.jpg',
]

export default function PhotoGallery() {
  return (
    <section className="gallery-section">
      {/* Header — same pattern as reference */}
      <div className="gallery-header">
        <p className="gallery-eyebrow">Birch House</p>
        <h2>The Gallery</h2>
        <div className="rule" />
        <p className="gallery-scroll-hint">Scroll to explore</p>
      </div>

      {/* Zoom parallax — exact same effect as personal-gallery-cv */}
      <ZoomParallax images={parallaxImages} />

      {/* Link to full photos page */}
      <div className="gallery-footer">
        <Link href="/photos" className="tlink">View All Photos</Link>
      </div>
    </section>
  )
}
