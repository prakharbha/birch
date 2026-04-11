'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const ZoomParallax = dynamic(() => import('./ZoomParallax'), { ssr: false })

// 7 images for the zoom parallax slots — local Birch House photography
const parallaxImages = [
  '/images/birch-05.jpg',
  '/images/birch-06.jpg',
  '/images/birch-10.jpg',
  '/images/birch-12.jpg',
  '/images/birch-16.jpg',
  '/images/birch-18.jpg',
  '/images/birch-20.jpg',
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
