'use client'

import { useState } from 'react'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer" aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FaqAccordion({ faqs }) {
  return (
    <div className="faq-list">
      {faqs.map(f => (
        <FaqItem key={f.q} q={f.q} a={f.a} />
      ))}
    </div>
  )
}
