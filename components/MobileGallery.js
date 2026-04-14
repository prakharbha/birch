'use client'

import { useState, useEffect } from 'react'

// Lightbox component
function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>×</button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Birch House" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

export default function MobileGallery({ images }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <div className="mobile-gallery">
      <div className="mobile-gallery-grid">
        {images.slice(0, 7).map((src, i) => (
          <div key={i} className="mobile-gallery-item" onClick={() => setLightboxSrc(src)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="Birch House" />
          </div>
        ))}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  )
}