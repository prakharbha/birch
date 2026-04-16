'use client'

import { useState } from 'react'
import Lightbox from './Lightbox'

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
