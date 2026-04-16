'use client'

import { useState } from 'react'
import Lightbox from './Lightbox'

// Same slot positions as the original — layout unchanged
const SLOTS = [
  { height: '25vh', width: '25vw' },
  { height: '30vh', width: '35vw', top: '-30vh', left: '5vw' },
  { height: '45vh', width: '20vw', top: '-10vh', left: '-25vw' },
  { height: '25vh', width: '25vw', left: '27.5vw' },
  { height: '25vh', width: '20vw', top: '27.5vh', left: '5vw' },
  { height: '25vh', width: '30vw', top: '27.5vh', left: '-22.5vw' },
  { height: '15vh', width: '15vw', top: '22.5vh', left: '25vw' },
]

export default function ZoomParallax({ images }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <>
      <div className="desktop-gallery">
        {images.slice(0, 7).map((src, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              display: 'flex',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                pointerEvents: 'all',
                ...SLOTS[i],
              }}
              onClick={() => setLightboxSrc(src)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Birch House"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div className="desktop-gallery-hover" />
            </div>
          </div>
        ))}
      </div>

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </>
  )
}
