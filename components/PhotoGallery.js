'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import MobileGallery from './MobileGallery'

const ZoomParallax = dynamic(() => import('./ZoomParallax'), { ssr: false })

// 7 images for the zoom parallax slots — local Birch House photography
const parallaxImages = [
  '/images/birch-05.avif',
  '/images/birch-06.avif',
  '/images/birch-10.avif',
  '/images/birch-12.avif',
  '/images/birch-16.avif',
  '/images/birch-18.avif',
  '/images/birch-20.avif',
]

export default function PhotoGallery() {
  return (
    <section className="gallery-section">
      {/* Header — same pattern as reference */}
      <div className="gallery-header">
        <p className="gallery-eyebrow">Birch House</p>
        <h2>The Gallery</h2>
        <div className="rule" />
        <p className="gallery-scroll-hint gallery-scroll-hint--desktop">Click any image to explore</p>
      </div>

      {/* Mobile: simple grid gallery */}
      <MobileGallery images={parallaxImages} />

      {/* Desktop: Zoom parallax */}
      <ZoomParallax images={parallaxImages} />

      {/* Link to full photos page */}
      <div className="gallery-footer">
        <Link href="/photos" className="tlink">View All Photos</Link>
      </div>
    </section>
  )
}
