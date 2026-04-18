'use client'

import { useEffect } from 'react'

// Patch history.pushState/replaceState so the Life House booking engine
// (which calls pushState("", ...)) doesn't collide with Next.js's internal
// __NA state copy, which expects the state to be an object.
function patchHistoryForBookingEngine() {
  if (typeof window === 'undefined' || window.__lhHistoryPatched) return
  window.__lhHistoryPatched = true

  const origPush = history.pushState.bind(history)
  const origReplace = history.replaceState.bind(history)

  history.pushState = function (state, title, url) {
    return origPush(state === '' || state === null ? {} : state, title, url)
  }
  history.replaceState = function (state, title, url) {
    return origReplace(state === '' || state === null ? {} : state, title, url)
  }
}

function waitForBookingEngine(callback, maxWaitMs = 10000) {
  const start = Date.now()
  const interval = setInterval(() => {
    const fn = window.openBookingFlow
    const renderer = window.renderBookingEngine
    // The SDK initially sets renderBookingEngine = ()=>null (8 chars).
    // Once the main bundle loads it becomes the real function (much longer).
    const rendererReady =
      typeof renderer === 'function' && renderer.toString().length > 20

    if (typeof fn === 'function' && rendererReady) {
      clearInterval(interval)
      callback()
    } else if (Date.now() - start > maxWaitMs) {
      clearInterval(interval)
      if (typeof fn === 'function') callback()
    }
  }, 200)
}

export default function BookingButton({ className = 'tlink', children }) {
  // Run the history patch after Next.js has hydrated (so our wrapper
  // sits on top of Next.js's wrapper, not the other way around).
  useEffect(() => {
    patchHistoryForBookingEngine()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    waitForBookingEngine(() => {
      try {
        window.openBookingFlow()
      } catch (err) {
        console.error('Booking engine error:', err)
      }
    })
  }

  return (
    <a href="#" className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
