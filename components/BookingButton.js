'use client'

function patchHistory() {
  // Wrap pushState/replaceState so empty-string states (used by the Life House
  // booking engine) are normalised to {} before hitting Next.js's internal
  // copyNextJsInternalHistoryState, which tries to do data.__NA = ... and
  // throws when data is a primitive string.
  const origPush = history.pushState
  const origReplace = history.replaceState

  history.pushState = function (state, title, url) {
    return origPush.call(
      history,
      state === '' || state === null ? {} : state,
      title,
      url
    )
  }
  history.replaceState = function (state, title, url) {
    return origReplace.call(
      history,
      state === '' || state === null ? {} : state,
      title,
      url
    )
  }
}

function waitForBookingEngine(callback, maxWaitMs = 10000) {
  const start = Date.now()
  const interval = setInterval(() => {
    const fn = window.openBookingFlow
    const renderer = window.renderBookingEngine
    // SDK sets renderBookingEngine = ()=>null initially (short string).
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
      // Patch right here — after Next.js has fully set up its router —
      // so our wrapper is always outermost when the booking engine fires.
      patchHistory()
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
