'use client'

import { useState, useEffect } from 'react'

export default function PillarsBanner() {
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem('pillars_banner_dismissed')) return

    // Check for the cookie set by middleware
    const hasCookie = document.cookie
      .split(';')
      .some((c) => c.trim().startsWith('from_pillars='))

    if (hasCookie) {
      // Small delay so page content loads first
      setTimeout(() => {
        setVisible(true)
        setAnimating(true)
      }, 600)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem('pillars_banner_dismissed', '1')
    setAnimating(false)
    setTimeout(() => setVisible(false), 350)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        .pillars-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(20, 17, 12, 0.65);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .pillars-overlay.is-visible {
          opacity: 1;
        }

        .pillars-modal {
          position: relative;
          background: #faf6ef;
          max-width: 520px;
          width: 100%;
          padding: 30px;
          text-align: center;
          transform: translateY(24px) scale(0.97);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 0.45s ease;
          opacity: 0;
        }

        .pillars-overlay.is-visible .pillars-modal {
          transform: translateY(0) scale(1);
          opacity: 1;
        }


        .pillars-modal__eyebrow {
          font-family: var(--serif), 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(18px, 2vw, 21px);
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #000;
          margin: 0 0 20px;
        }

        .pillars-modal__heading {
          font-family: var(--serif), 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3vw, 32px);
          font-weight: 300;
          font-style: italic;
          color: #000;
          letter-spacing: 0.04em;
          line-height: 1.25;
          margin: 0 0 24px;
        }

        .pillars-modal__text {
          font-family: var(--serif), 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(18px, 2vw, 21px);
          font-weight: 400;
          color: #000;
          letter-spacing: 0.01em;
          line-height: 1.85;
          margin: 0;
        }

        .pillars-modal__cta {
          display: inline-block;
          margin-top: 32px;
          font-family: var(--sans), 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #faf6ef;
          background: #2a1f0f;
          border: 1px solid #2a1f0f;
          padding: 10px 20px;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .pillars-modal__cta:hover {
          background: #4a3520;
          border-color: #4a3520;
        }

        .pillars-modal__close {
          position: absolute;
          top: 18px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #000;
          font-size: 44px;
          line-height: 1;
          opacity: 0.7;
          transition: opacity 0.2s ease;
          font-family: var(--font-jost), sans-serif;
          font-weight: 200;
        }

        .pillars-modal__close:hover {
          opacity: 1;
        }

        @media (max-width: 480px) {
          .pillars-modal {
            padding: 30px;
          }
        }
      `}</style>

      <div
        className={`pillars-overlay${animating ? ' is-visible' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pillars-heading"
        onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
      >
        <div className="pillars-modal">
          <button
            className="pillars-modal__close"
            onClick={dismiss}
            aria-label="Close"
          >
            ×
          </button>

          <p className="pillars-modal__eyebrow">A Message</p>

          <h2 className="pillars-modal__heading" id="pillars-heading">
            The Pillars Hotel &amp; Club<br />is now closed.
          </h2>

          <p className="pillars-modal__text">
            A new chapter continues at Birch House, created by the same
            ownership and many of the same long-standing staff, carrying
            forward the spirit of personal service and understated elegance.
          </p>

          <button className="pillars-modal__cta" onClick={dismiss}>
            We invite you to discover Birch House
          </button>
        </div>
      </div>
    </>
  )
}
