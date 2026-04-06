import Image from 'next/image'
import Header from '@/components/Header'

const suites = [
  {
    name: 'Junior Suite',
    detail: 'Four available · From 500 sq ft',
    desc: 'Open, light-filled rooms designed for comfort and ease. Each junior suite offers a generous living area, oversized windows, and a refined bathroom with a glass-enclosed shower.',
    img: '/images/Birch-House-Grand-Suite.jpg',
    imgPos: 'center 30%',
  },
  {
    name: 'One-Bedroom Suite',
    detail: 'Two available · From 1,100 sq ft',
    desc: 'The largest accommodation at Birch House. A full separate bedroom, expansive living room, and a spa-like bathroom with freestanding bathtub and walk-in shower — a true residential experience.',
    img: '/images/bedroom birch house.jpg',
    imgPos: 'center 40%',
  },
]

export default function SuitesPage() {
  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="/images/Birch-House-Grand-Suite-1.jpg"
          alt="The Suites at Birch House"
          fill
          priority
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div className="hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">Accommodation</span>
          <h1>The Suites</h1>
          <span className="hero-sub">Six suites. Each one designed with a sense of space that is increasingly rare.</span>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <p>
            At Birch House, the suites are intentionally generous in scale. The proportions
            allow for a natural rhythm to the space — areas to sit, to rest, and to unwind
            are distinct yet connected, with light and air moving easily throughout.
          </p>
          <p>
            The bathrooms are equally considered. Spacious and light-filled, finished in
            clean white tones with freestanding bathtubs and glass-enclosed showers that
            create a sense of openness and calm.
          </p>
          <p>
            With only six suites, the experience remains personal and discrete. This is
            not a place of crowds or corridors.
          </p>
        </div>
      </section>

      {/* ── SUITE TYPES ─────────────────────────────────────── */}
      {suites.map((suite, i) => (
        <article key={suite.name} className={`suite-row ${i % 2 === 1 ? 'suite-row--reverse' : ''}`}>
          <div className="suite-img-wrap">
            <Image
              src={suite.img}
              alt={suite.name}
              fill
              className="suites-img"
              style={{ objectFit: 'cover', objectPosition: suite.imgPos }}
            />
          </div>
          <div className="suite-text">
            <span className="suite-detail">{suite.detail}</span>
            <h2>{suite.name}</h2>
            <div className="rule rule--left" />
            <p>{suite.desc}</p>
          </div>
        </article>
      ))}

      {/* ── BATHROOM FEATURE ─────────────────────────────────── */}
      <section className="feature-full">
        <div className="feature-full-img-wrap">
          <Image
            src="/images/Birch-House batroom.jpg"
            alt="Birch House bathroom"
            fill
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
            With only six suites, we recommend reserving in advance to secure your
            preferred dates and suite type.
          </p>
          <div className="btn-row">
            <a
              href="https://pillarshotel.com/birch-house/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled"
            >
              Check Availability
            </a>
            <a href="/reservations" className="btn btn-outline">
              Reservations
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
