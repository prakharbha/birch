'use client'

import { useEffect } from 'react'
import { loadBooking } from '@/lib/mews'

// Guests coming back from a payment or 3-D Secure step land on ?mewsRedirect=…,
// which the booking engine has to pick up straight away to finish the booking.
export default function BookingReturn() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('mewsRedirect')) loadBooking()
  }, [])

  return null
}
