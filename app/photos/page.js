import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// All Birch House photos — local files downloaded from pillarshotel.com/birch-house/
// plus existing on-property photography
const allPhotos = [
  { src: '/images/birch-01.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-02.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-03.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-04.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-05.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-06.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-07.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-08.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-09.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-10.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-11.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-12.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-13.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-14.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-15.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-16.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-17.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-18.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-19.jpg',                  alt: 'Birch House' },
  { src: '/images/birch-20.jpg',                  alt: 'Birch House' },
  { src: '/images/Canal-walkway-in-Fort-Lauderdale.webp',      alt: 'Canal walkway, Fort Lauderdale' },
  { src: '/images/a1a-night.webp',                             alt: 'A1A at night' },
  { src: '/images/beach-sand-road.webp',                       alt: 'Fort Lauderdale Beach' },
  { src: '/images/Tranquil-poolside-relaxation-area.webp',    alt: 'Birch House pool' },
  { src: '/images/birch_house_hero_16x9.png',                 alt: 'Birch House exterior' },
  { src: '/images/flowers gate.jpg',              alt: 'Entrance gate and garden' },
  { src: '/images/Birch-House-Grand-Suite.jpg',   alt: 'Grand Suite living room' },
  { src: '/images/Birch-House-Grand-Suite-1.jpg', alt: 'Grand Suite bedroom' },
  { src: '/images/bedroom birch house.jpg',       alt: 'Suite bedroom' },
  { src: '/images/girl on bed birch house.jpg',   alt: 'Suite — morning light' },
  { src: '/images/Birch-House batroom.jpg',       alt: 'Suite bathroom' },
]

export default function PhotosPage() {
  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="/images/birch_house_hero_16x9.png"
          alt="Birch House Photography"
          fill
          priority
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
        />
        <div className="page-hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">Photography</span>
          <h1>The Gallery</h1>
          <span className="hero-sub">Birch House, Fort Lauderdale Beach.</span>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <p>
            A visual record of the house — its rooms, its light, its garden, and its
            setting by the coast. Five suites, one gate, and the Atlantic just beyond.
          </p>
        </div>
      </section>

      {/* ── MASONRY GRID ─────────────────────────────────────── */}
      <section className="photos-grid-section">
        <div className="photos-grid">
          {allPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`photo-item ${i % 7 === 0 || i % 7 === 4 ? 'photo-item--tall' : ''}`}
            >
              <div className="photo-item-inner">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="photo-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="page-cta">
        <div className="prose">
          <h2>Reserve Your Suite</h2>
          <div className="rule" />
          <p>
            With only five suites, we recommend reserving in advance.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/suites" className="tlink">View the Suites</Link>
            <a
              href="https://pillarshotel.com/birch-house/"
              target="_blank"
              rel="noopener noreferrer"
              className="tlink"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
