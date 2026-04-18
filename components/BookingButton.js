'use client'

export default function BookingButton({ className = 'tlink', children }) {
  const handleClick = (e) => {
    e.preventDefault()
    try {
      if (typeof window !== 'undefined' && typeof window.openBookingFlow === 'function') {
        window.openBookingFlow()
      }
    } catch (err) {
      // SDK not ready yet — retry after short delay
      setTimeout(() => {
        try { window.openBookingFlow && window.openBookingFlow() } catch (_) {}
      }, 300)
    }
  }

  return (
    <a href="#" className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
