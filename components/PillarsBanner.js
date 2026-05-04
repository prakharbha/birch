'use client'

import { useState, useEffect } from 'react'

export default function PillarsBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem('pillars_banner_dismissed')) return

    // Check for the cookie set by middleware
    const hasCookie = document.cookie
      .split(';')
      .some((c) => c.trim().startsWith('from_pillars='))

    if (hasCookie) setVisible(true)
  }, [])

  function dismiss() {
    sessionStorage.setItem('pillars_banner_dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        .pillars-banner {
          position: relative;
          z-index: 200;
          width: 100%;
          background: #f5f0e8;
          border-bottom: 1px solid rgba(139, 115, 85, 0.25);
          padding: 20px 48px 20px 32px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          animation: pillarsFadeSlide 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
          box-sizing: border-box;
        }

        @keyframes pillarsFadeSlide {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pillars-banner__icon {
          flex-shrink: 0;
          margin-top: 3px;
          width: 18px;
          height: 18px;
          opacity: 0.5;
        }

        .pillars-banner__body {
          flex: 1;
        }

        .pillars-banner__heading {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(15px, 1.8vw, 18px);
          font-weight: 400;
          font-style: italic;
          color: #4a3c28;
          letter-spacing: 0.01em;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .pillars-banner__text {
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: clamp(12px, 1.2vw, 13px);
          font-weight: 300;
          color: #6b5a42;
          letter-spacing: 0.06em;
          line-height: 1.65;
          margin: 0;
        }

        .pillars-banner__link {
          display: inline-block;
          margin-top: 10px;
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #4a3c28;
          text-decoration: none;
          border-bottom: 1px solid rgba(74, 60, 40, 0.4);
          padding-bottom: 1px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .pillars-banner__link:hover {
          color: #2a1f0f;
          border-color: rgba(42, 31, 15, 0.7);
        }

        .pillars-banner__close {
          position: absolute;
          top: 16px;
          right: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #8b7355;
          font-size: 18px;
          line-height: 1;
          opacity: 0.6;
          transition: opacity 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillars-banner__close:hover {
          opacity: 1;
        }

        @media (max-width: 600px) {
          .pillars-banner {
            padding: 16px 44px 16px 20px;
          }
        }
      `}</style>

      <div className="pillars-banner" role="status" aria-live="polite">
        {/* Leaf / branch decorative icon */}
        <svg
          className="pillars-banner__icon"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9 1C9 1 3 5 3 10.5C3 13.5376 5.68629 16 9 16C12.3137 16 15 13.5376 15 10.5C15 5 9 1 9 1Z"
            stroke="#8b7355"
            strokeWidth="1"
            fill="none"
          />
          <line x1="9" y1="16" x2="9" y2="9" stroke="#8b7355" strokeWidth="1" />
        </svg>

        <div className="pillars-banner__body">
          <p className="pillars-banner__heading">
            The Pillars Hotel &amp; Club is now closed.
          </p>
          <p className="pillars-banner__text">
            A new chapter continues at Birch House, created by the same ownership and many of the
            same long-standing staff, carrying forward the spirit of personal service and
            understated elegance.
          </p>
          <a className="pillars-banner__link" href="/">
            We invite you to discover Birch House
          </a>
        </div>

        <button
          className="pillars-banner__close"
          onClick={dismiss}
          aria-label="Dismiss notice"
        >
          ×
        </button>
      </div>
    </>
  )
}
