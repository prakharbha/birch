'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SuiteGallery({ suite, reverse }) {
  const [active, setActive] = useState(0)

  return (
    <article className={`suite-gallery-row ${reverse ? 'suite-gallery-row--reverse' : ''}`}>
      {/* Left — images */}
      <div className="suite-gallery-media">
        <div className="suite-gallery-main">
          <Image
            key={suite.images[active].src}
            src={suite.images[active].src}
            alt={suite.images[active].alt}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="suite-gallery-img"
            style={{ objectFit: 'cover', objectPosition: suite.images[active].pos || 'center' }}
            priority={!reverse}
          />
        </div>
        <div className="suite-gallery-thumbs">
          {suite.images.map((img, i) => (
            <button
              key={img.src}
              className={`suite-thumb-btn ${i === active ? 'suite-thumb-btn--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={img.alt}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="120px"
                className="suite-gallery-img"
                style={{ objectFit: 'cover', objectPosition: img.pos || 'center' }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right — text */}
      <div className="suite-gallery-text">
        <span className="suite-detail">{suite.detail}</span>
        <h2>{suite.name}</h2>
        <div className="rule rule--left" />
        <p>{suite.desc}</p>
        <a
          href="https://pillarshotel.com/birch-house/"
          target="_blank"
          rel="noopener noreferrer"
          className="tlink"
        >
          Reserve
        </a>
      </div>
    </article>
  )
}
