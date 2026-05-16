'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

export default function MobileGallery({ images }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <div className="mobile-gallery">
      <div className="mobile-gallery-grid">
        {images.slice(0, 7).map((src, i) => (
          <div key={i} className="mobile-gallery-item" onClick={() => setLightboxSrc(src)}>
            <Image
              src={src}
              alt="Birch House"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  )
}
