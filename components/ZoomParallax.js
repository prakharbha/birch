'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Same slot layout as the reference — 7 image positions
// Each positioned relative to the flex-centered container
const SLOTS = [
  { height: '25vh', width: '25vw' }, // 0 — center hero
  { height: '30vh', width: '35vw', top: '-30vh', left: '5vw' }, // 1 — top left
  { height: '45vh', width: '20vw', top: '-10vh', left: '-25vw' }, // 2 — mid left
  { height: '25vh', width: '25vw', left: '27.5vw' }, // 3 — center right
  { height: '25vh', width: '20vw', top: '27.5vh', left: '5vw' }, // 4 — bottom left
  { height: '25vh', width: '30vw', top: '27.5vh', left: '-22.5vw' }, // 5 — bottom mid-left
  { height: '15vh', width: '15vw', top: '22.5vh', left: '25vw' }, // 6 — bottom right
]

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

export default function ZoomParallax({ images }) {
  const container = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState(null)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9]

  // Mobile: simple grid gallery with lightbox
  if (!isDesktop) {
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

  // Desktop: zoom parallax with lightbox
  return (
    <div ref={container} style={{ position: 'relative', height: '300vh' }}>
      <div className="zoom-sticky">
        {images.slice(0, 7).map((src, i) => (
          <motion.div
            key={i}
            style={{
              scale: scales[i],
              position: 'absolute',
              top: 0,
              display: 'flex',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                ...SLOTS[i],
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Birch House"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onClick={() => setLightboxSrc(src)}
                className="zoom-image"
              />
            </div>
          </motion.div>
        ))}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  )
}