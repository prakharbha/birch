'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

export default function PhotosGrid({ photos }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <section className="photos-grid-section">
      <div className="photos-grid">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={`photo-item ${i % 7 === 0 || i % 7 === 4 ? 'photo-item--tall' : ''}`}
            onClick={() => setLightboxSrc(photo.src)}
          >
            <div className="photo-item-inner">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="photo-img"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </section>
  )
}
