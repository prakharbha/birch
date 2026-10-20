import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SuiteGallery from '@/components/SuiteGallery'
import BookingButton from '@/components/BookingButton'
import { suites } from './suitesData'

export const metadata = {
  title: 'The Suites — Junior & One-Bedroom',
  description: 'Five unusually spacious suites of approximately 525 to 1,150 sq ft, steps from Fort Lauderdale Beach and Las Olas Marina. View the Junior and One-Bedroom Suites at Birch House.',
  alternates: { canonical: 'https://birchhouseclub.com/suites' },
}

export default function SuitesPage() {
  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="/images/gs-hero.jpg"
          alt="The Suites at Birch House"
          fill
          priority
          sizes="100vw"
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div className="page-hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">Accommodation</span>
          <h1>The Suites</h1>
          <span className="hero-sub">Five suites. Each one designed with a sense of space that is increasingly rare.</span>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <p>
            At Birch House, the suites are intentionally generous in scale. The proportions
            allow for a natural rhythm to the space, areas to sit, to rest, and to unwind
            are distinct yet connected, with light and air moving easily throughout.
          </p>
          <p>
            The bathrooms are equally considered. Spacious and light-filled, finished in
            clean white tones with freestanding bathtubs and glass-enclosed showers that
            create a sense of openness and calm.
          </p>
          <p>
            With only five suites, the experience remains personal and discreet. This is
            not a place of crowds or corridors.
          </p>
        </div>
      </section>

      {/* ── SUITE TYPES ─────────────────────────────────────── */}
      {suites.map((suite, i) => (
        <SuiteGallery key={suite.name} suite={suite} reverse={i % 2 === 1} btnClass={`b${i + 1}`} />
      ))}

      {/* ── WHAT YOUR STAY INCLUDES ──────────────────────────── */}
      <section className="stay-includes">
        <div className="prose" style={{ marginBottom: '48px' }}>
          <h2>What Your Stay Includes</h2>
          <div className="rule" />
        </div>
        <div className="stay-includes-grid">
          {suites.map(suite => (
            <div key={suite.slug} className="stay-includes-col">
              <h3>{suite.name}</h3>
              <span className="suite-detail">{suite.size}</span>
              <dl className="stay-list">
                {suite.stay.map(([term, value]) => (
                  <div key={term} className="stay-list-row">
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <a href={`/suites/${suite.slug}`} className="tlink">View the {suite.name}</a>
            </div>
          ))}
        </div>
        <p className="stay-includes-note">
          Cancellation terms are shown with your rate before you confirm. For extended
          stays, exclusive use of all five suites, or any special arrangement, please
          contact us directly.
        </p>
      </section>

      {/* ── BATHROOM FEATURE ─────────────────────────────────── */}
      <section className="feature-full">
        <div className="feature-full-img-wrap">
          <Image
            src="/images/Birch-House batroom.jpg"
            alt="Birch House bathroom"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="suites-img"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
        <div className="feature-full-text">
          <div className="prose">
            <h2>The Bathrooms</h2>
            <div className="rule" />
            <p>
              Spacious, light-filled, and finished in clean white tones. Freestanding
              bathtubs and glass-enclosed showers create a sense of openness and comfort
              that mirrors the residential quality of the suites themselves.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="page-cta">
        <div className="prose">
          <h2>Reserve Your Suite</h2>
          <div className="rule" />
          <p>
            With only five suites, we recommend reserving in advance to secure your
            preferred dates and suite type.
          </p>
          <BookingButton className="tlink">Check Availability</BookingButton>
        </div>
      </section>

      <Footer />
    </>
  )
}
