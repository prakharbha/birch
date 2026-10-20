import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PhotosGrid from '@/components/PhotosGrid'

export const metadata = {
  title: 'Photo Gallery',
  description: 'Photography of Birch House — suites, gardens, pool, and the Fort Lauderdale Beach setting. Five luxury suites on the Florida coast.',
  alternates: { canonical: 'https://birchhouseclub.com/photos' },
}

// All Birch House photos — local files downloaded from pillarshotel.com/birch-house/
// plus existing on-property photography
const allPhotos = [
  { src: '/images/birch-01.avif',                  alt: 'Birch House entrance and gardens, Fort Lauderdale Beach' },
  { src: '/images/birch-02.avif',                  alt: 'Birch House exterior facade' },
  { src: '/images/birch-03.avif',                  alt: 'Birch House poolside terrace' },
  { src: '/images/birch-04.avif',                  alt: 'Suite interior at Birch House Fort Lauderdale' },
  { src: '/images/birch-05.avif',                  alt: 'Birch House suite living area' },
  { src: '/images/birch-06.avif',                  alt: 'Birch House suite bedroom' },
  { src: '/images/birch-07.avif',                  alt: 'Suite bathroom at Birch House' },
  { src: '/images/birch-08.avif',                  alt: 'Birch House outdoor pool area' },
  { src: '/images/birch-09.avif',                  alt: 'Birch House garden and grounds' },
  { src: '/images/birch-10.avif',                  alt: 'Birch House common areas and lounge' },
  { src: '/images/birch-11.avif',                  alt: 'Birch House suite detail, Fort Lauderdale' },
  { src: '/images/birch-12.avif',                  alt: 'Birch House coastal setting, Fort Lauderdale Beach' },
  { src: '/images/birch-13.avif',                  alt: 'Birch House suite with natural light' },
  { src: '/images/birch-14.avif',                  alt: 'Birch House property exterior at dusk' },
  { src: '/images/birch-15.avif',                  alt: 'One-Bedroom Suite at Birch House Fort Lauderdale' },
  { src: '/images/birch-16.avif',                  alt: 'Birch House suite bathroom with soaking tub' },
  { src: '/images/birch-17.avif',                  alt: 'Birch House pool and garden view' },
  { src: '/images/birch-18.avif',                  alt: 'Junior Suite at Birch House Fort Lauderdale Beach' },
  { src: '/images/birch-19.avif',                  alt: 'Birch House tropical courtyard' },
  { src: '/images/Canal-walkway-in-Fort-Lauderdale.avif',      alt: 'Canal walkway, Fort Lauderdale' },
  { src: '/images/a1a-night.avif',                             alt: 'A1A at night' },
  { src: '/images/beach-sand-road.avif',                       alt: 'Fort Lauderdale Beach' },
  { src: '/images/Tranquil-poolside-relaxation-area.avif',    alt: 'Birch House pool' },
  { src: '/images/birch_house_hero_16x9.avif',                alt: 'Birch House exterior' },
  { src: '/images/flowers gate.avif',              alt: 'Entrance gate and garden' },
  { src: '/images/Birch-House-Grand-Suite.avif',   alt: 'Grand Suite' },
  { src: '/images/bedroom birch house.avif',       alt: 'Suite bedroom' },
  { src: '/images/Birch-House batroom.avif',       alt: 'Suite bathroom' },
]

export default function PhotosPage() {
  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="/images/birch_house_hero_16x9.avif"
          alt="Birch House Photography"
          fill
          priority
          sizes="100vw"
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
      <PhotosGrid photos={allPhotos} />

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
            <Link href="/reservations" className="tlink">Check Availability</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
