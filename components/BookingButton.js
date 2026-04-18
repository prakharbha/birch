'use client'

function waitForBookingEngine(callback, maxWaitMs = 10000) {
  const start = Date.now()
  const interval = setInterval(() => {
    const fn = window.openBookingFlow
    const renderer = window.renderBookingEngine
    // SDK sets renderBookingEngine = ()=>null initially (very short).
    // The real function from assets/index-*.js is much longer.
    const ready =
      typeof fn === 'function' &&
      typeof renderer === 'function' &&
      renderer.toString().length > 20

    if (ready) {
      clearInterval(interval)
      callback()
    } else if (Date.now() - start > maxWaitMs) {
      clearInterval(interval)
      if (typeof fn === 'function') callback()
    }
  }, 200)
}

export default function BookingButton({ className = 'tlink', children }) {
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
