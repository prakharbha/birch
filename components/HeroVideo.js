'use client'

import { useEffect, useRef } from 'react'

// The poster paints first; the video only starts downloading once the page has loaded,
// so it doesn't compete with the page itself. Visitors who prefer reduced motion keep the poster.
export default function HeroVideo() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const start = () => {
      const video = ref.current
      if (!video) return
      video.src = window.matchMedia('(max-width: 900px)').matches
        ? '/videos/hero-720.mp4'
        : '/videos/hero-1080.mp4'
      video.muted = true
      video.play().catch(() => {})
    }

    if (document.readyState === 'complete') {
      start()
      return
    }
    window.addEventListener('load', start, { once: true })
    return () => window.removeEventListener('load', start)
  }, [])

  return (
    <video
      ref={ref}
      className="hero-video"
      muted
      loop
      playsInline
      preload="none"
      poster="/videos/hero-poster.avif"
      aria-hidden="true"
    />
  )
}
