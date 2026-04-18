import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SuiteGallery from '@/components/SuiteGallery'

const suites = [
  {
    name: 'Junior Suite',
    detail: 'Three available · At 525 sq ft',
    desc: 'Open, light-filled rooms designed for comfort and ease. Each junior suite offers a generous living area, oversized windows, and a refined bathroom with a glass-enclosed shower and soaking tub. An ADA-accessible option is available.',
    images: [
      { src: '/images/jr-hero.jpg', alt: 'Junior Suite',          pos: 'center' },
      { src: '/images/jr-1.jpg',    alt: 'Junior Suite bedroom',  pos: 'center' },
      { src: '/images/jr-2.jpg',    alt: 'Junior Suite bathroom', pos: 'center' },
      { src: '/images/jr-3.jpg',    alt: 'Junior Suite detail',   pos: 'center' },
    ],
  },
  {
    name: 'One-Bedroom Suite',
    detail: 'Two available · At 1,150 sq ft',
    desc: 'The largest accommodation at Birch House. A full separate bedroom, expansive living room, and a spa-like bathroom with freestanding bathtub and walk-in shower, a true residential experience.',
    images: [
      { src: '/images/gs-hero.jpg', alt: 'One-Bedroom Suite',          pos: 'center' },
      { src: '/images/gs-1.jpg',    alt: 'One-Bedroom Suite bedroom',  pos: 'center' },
      { src: '/images/gs-2.jpg',    alt: 'One-Bedroom Suite salon',    pos: 'center' },
      { src: '/images/gs-3.jpg',    alt: 'One-Bedroom Suite bathroom', pos: 'center' },
      { src: '/images/gs-4.jpg',    alt: 'One-Bedroom Suite detail',   pos: 'center' },
    ],
  },
]

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
            With only five suites, the experience remains personal and discrete. This is
            not a place of crowds or corridors.
          </p>
        </div>
      </section>

      {/* ── SUITE TYPES ─────────────────────────────────────── */}
      {suites.map((suite, i) => (
        <SuiteGallery key={suite.name} suite={suite} reverse={i % 2 === 1} btnClass={`b${i + 1}`} />
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
            With only five suites, we recommend reserving in advance to secure your
            preferred dates and suite type.
          </p>
          <a
            href="https://pillarshotel.com/birch-house/"
            target="_blank"
            rel="noopener noreferrer"
            className="tlink b3"
          >
            Check Availability
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
