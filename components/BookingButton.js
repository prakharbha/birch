'use client'

export default function BookingButton({ className = 'btn btn-filled', children }) {
  return (
    <button className={`${className} distributor`}>
      {children}
    </button>
  )
}
