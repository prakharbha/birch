'use client'

function waitForMews(callback, maxWaitMs = 10000) {
  const start = Date.now()
  const interval = setInterval(() => {
    if (typeof window.Mews?.D?.open === 'function') {
      clearInterval(interval)
      callback()
    } else if (Date.now() - start > maxWaitMs) {
      clearInterval(interval)
      console.warn('Mews Distributor did not load in time')
    }
  }, 200)
}

export default function BookingButton({ className = 'btn btn-filled', children }) {
  const handleClick = (e) => {
    e.preventDefault()
    waitForMews(() => {
      try {
        window.Mews.D.open()
      } catch (err) {
        console.error('Mews Distributor error:', err)
      }
    })
  }

  return (
    <a href="#" className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
