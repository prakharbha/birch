'use client'

import { loadBooking, openBooking } from '@/lib/mews'

// Hovering or focusing starts loading the booking engine, so it's usually ready by the click.
export default function BookingButton({ className = 'btn btn-filled', children }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => openBooking()}
      onPointerEnter={() => loadBooking()}
      onFocus={() => loadBooking()}
    >
      {children}
    </button>
  )
}
