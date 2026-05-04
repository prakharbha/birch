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
    setAnimating(false)
    setTimeout(() => {
      sessionStorage.setItem('pillars_banner_dismissed', '1')
      setVisible(false)
    }, 350)
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
          padding: 56px 52px 48px;
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

        /* Top decorative rule */
        .pillars-modal::before {
          content: '';
          display: block;
          width: 48px;
          height: 1px;
          background: rgba(139, 115, 85, 0.5);
          margin: 0 auto 32px;
        }

        /* Bottom decorative rule */
        .pillars-modal::after {
          content: '';
          display: block;
          width: 48px;
          height: 1px;
          background: rgba(139, 115, 85, 0.5);
          margin: 32px auto 0;
        }

        .pillars-modal__eyebrow {
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8b7355;
          margin: 0 0 20px;
        }

        .pillars-modal__heading {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 300;
          font-style: italic;
          color: #2a1f0f;
          letter-spacing: 0.01em;
          line-height: 1.3;
          margin: 0 0 24px;
        }

        .pillars-modal__text {
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #5a4a34;
          letter-spacing: 0.05em;
          line-height: 1.75;
          margin: 0;
        }

        .pillars-modal__cta {
          display: inline-block;
          margin-top: 32px;
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2a1f0f;
          text-decoration: none;
          border-bottom: 1px solid rgba(42, 31, 15, 0.35);
          padding-bottom: 2px;
          transition: border-color 0.25s ease, color 0.25s ease;
        }

        .pillars-modal__cta:hover {
          color: #8b7355;
          border-color: rgba(139, 115, 85, 0.6);
        }

        .pillars-modal__close {
          position: absolute;
          top: 18px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #8b7355;
          font-size: 22px;
          line-height: 1;
          opacity: 0.5;
          transition: opacity 0.2s ease;
          font-family: var(--font-jost), sans-serif;
          font-weight: 200;
        }

        .pillars-modal__close:hover {
          opacity: 1;
        }

        @media (max-width: 480px) {
          .pillars-modal {
            padding: 44px 32px 36px;
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

          <a className="pillars-modal__cta" href="/" onClick={dismiss}>
            We invite you to discover Birch House
          </a>
        </div>
      </div>
    </>
  )
}
