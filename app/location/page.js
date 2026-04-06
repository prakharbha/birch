import Image from 'next/image'
import Header from '@/components/Header'

const highlights = [
  {
    heading: 'The Beach',
    body: 'Fort Lauderdale Beach is steps from the front gate. The Atlantic is immediate — a constant presence without being overwhelming. Mornings on the sand, or simply the knowledge that it is there.',
  },
  {
    heading: 'The Marina',
    body: 'The Intracoastal Waterway and the Fort Lauderdale marina are moments away. The energy of the water — the movement of boats, the light on the canal — is part of the character of the place.',
  },
  {
    heading: 'The City',
    body: 'Restaurants, shops, and the wider life of Fort Lauderdale are all within easy reach. Las Olas Boulevard, with its independent restaurants and galleries, is a short drive. The airport is twenty minutes.',
  },
  {
    heading: 'The House',
    body: 'Despite its proximity to everything, Birch House itself remains calm and discrete. The property sits set back, behind its gates and gardens, offering a genuine sense of remove.',
  },
]

export default function LocationPage() {
  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="/images/flowers gate.jpg"
          alt="Birch House — Fort Lauderdale Beach"
          fill
          priority
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div className="hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">Fort Lauderdale Beach</span>
          <h1>The Location</h1>
          <span className="hero-sub">Quietly positioned on Fort Lauderdale Beach.</span>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <p>
            Birch House is set just steps from the beach, offering immediate access to
            the ocean while remaining tucked away from the busier areas nearby. Located
            moments from the marina, the setting reflects the quiet movement of the water
            without ever feeling exposed or crowded.
          </p>
          <p>
            A setting that offers both connection and a sense of remove.
          </p>
        </div>
      </section>

      {/* ── MAP / VISUAL ─────────────────────────────────────── */}
      <section className="location-feature">
        <div className="location-feature-img">
          <Image
            src="/images/birch_house_hero_16x9.png"
            alt="Birch House exterior"
            fill
            className="suites-img"
            style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
          />
        </div>
        <div className="location-feature-address">
          <div className="prose">
            <h2>Find Us</h2>
            <div className="rule" />
            <p>
              66 Birch Road<br />
              Fort Lauderdale Beach<br />
              Florida, FL 33304
            </p>
            <p>
              Three minutes from The Pillars Hotel &amp; Club.<br />
              Twenty minutes from Fort Lauderdale International Airport.
            </p>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS GRID ─────────────────────────────────── */}
      <section className="highlights-section">
        <div className="prose" style={{ marginBottom: '64px' }}>
          <h2>What Surrounds You</h2>
          <div className="rule" />
        </div>
        <div className="highlights-grid">
          {highlights.map(h => (
            <div key={h.heading} className="highlight-item">
              <h3>{h.heading}</h3>
              <div className="rule rule--left" style={{ marginBottom: '20px' }} />
              <p>{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="page-cta">
        <div className="prose">
          <h2>Plan Your Stay</h2>
          <div className="rule" />
          <p>
            Discover the suites, or proceed directly to check availability for
            your preferred dates.
          </p>
          <div className="btn-row">
            <a href="/suites" className="btn btn-outline">View the Suites</a>
            <a
              href="https://pillarshotel.com/birch-house/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Birch House &ensp;&middot;&ensp; Fort Lauderdale Beach &ensp;&middot;&ensp;
          From the creators of The Pillars Hotel
        </p>
      </footer>
    </>
  )
}
