import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SuiteGallery from '@/components/SuiteGallery'
import BookingButton from '@/components/BookingButton'

// Shared layout for the individual suite pages. Each suite type has its own
// permanent URL so it can be linked from OTAs, search and the booking engine.
export default function SuiteDetail({ suite }) {
  const roomLd = {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: suite.name,
    url: `https://birchhouseclub.com/suites/${suite.slug}`,
    description: suite.lead,
    image: `https://birchhouseclub.com${suite.images[0].src}`,
    containedInPlace: {
      '@type': 'Hotel',
      '@id': 'https://birchhouseclub.com/#hotel',
      name: 'The Club at Birch House',
    },
  }

  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src={suite.images[0].src}
          alt={suite.name}
          fill
          priority
          sizes="100vw"
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div className="page-hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">Accommodation</span>
          <h1>{suite.name}</h1>
          <span className="hero-sub">{suite.size}</span>
        </div>
      </section>

      {/* ── LEAD COPY ───────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <p>{suite.lead}</p>
          <p>{suite.desc}</p>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <SuiteGallery suite={{ ...suite, slug: null }} />

      {/* ── WHAT YOUR STAY INCLUDES ─────────────────────────── */}
      <section className="stay-includes">
        <div className="prose" style={{ marginBottom: '48px' }}>
          <h2>What Your Stay Includes</h2>
          <div className="rule" />
        </div>
        <div className="stay-includes-grid stay-includes-grid--single">
          <div className="stay-includes-col">
            <dl className="stay-list">
              {suite.stay.map(([term, value]) => (
                <div key={term} className="stay-list-row">
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="stay-includes-note">
          Cancellation terms are shown with your rate before you confirm. For extended
          stays, exclusive use of all five suites, or any special arrangement, please
          contact us directly.
        </p>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="page-cta">
        <div className="prose">
          <h2>Reserve the {suite.name}</h2>
          <div className="rule" />
          <p>
            With only five suites, we recommend reserving in advance to secure your
            preferred dates.
          </p>
          <div className="btn-row">
            <BookingButton className="btn btn-filled">Check Availability</BookingButton>
            <a href="/suites" className="btn btn-outline">All Suites</a>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomLd) }}
      />
    </>
  )
}
