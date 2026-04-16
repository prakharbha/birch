import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PhotoGallery from '@/components/PhotoGallery'

const previews = [
  {
    href: '/suites',
    img: '/images/Birch-House-Grand-Suite.jpg',
    imgPos: 'center 30%',
    label: 'Accommodation',
    title: 'The Suites',
    body: 'Five generously scaled suites, each designed to feel residential rather than transient. Spacious living areas, oversized bathrooms, and an atmosphere of calm throughout.',
    cta: 'View the Suites',
  },
  {
    href: '/experience',
    img: '/images/morning.webp',
    imgPos: 'center 30%',
    label: 'Your Stay',
    title: 'The Experience',
    body: 'Mornings by the coast. Unhurried evenings. No schedule, only the rhythm you choose. A slower, more deliberate way to be somewhere.',
    cta: 'Explore the Experience',
  },
  {
    href: '/location',
    img: '/images/beach-sand-road.webp',
    imgPos: 'center 50%',
    label: 'Fort Lauderdale Beach',
    title: 'The Location',
    body: 'Steps from the beach and moments from the marina. Tucked away from the busier parts of the city, yet connected to everything Fort Lauderdale offers.',
    cta: 'Explore the Location',
  },
  {
    href: '/reservations',
    img: '/images/Tranquil-poolside-relaxation-area.webp',
    imgPos: 'center 50%',
    label: 'Availability',
    title: 'Reservations',
    body: 'With only five suites, availability is naturally limited. We recommend reserving in advance to secure your preferred dates.',
    cta: 'Check Availability',
  },
]

export default function Home() {
  return (
    <>
      <Header />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero" id="home">
        <Image
          src="/images/birch_house_hero_16x9.png"
          alt="Birch House — Fort Lauderdale Beach"
          fill
          priority
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
        />
        <div className="hero-veil" />
        <div className="hero-text">
          <h1>Birch House</h1>
          <span className="hero-sub">A Private Coastal Club &amp; Retreat</span>
        </div>
        <div className="scroll-hint">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="intro-section">
        <div className="prose">
          <h2>A Different Kind of Stay</h2>
          <div className="rule" />
          <p>
            The Club at Birch House is not a hotel in the traditional sense. It is a
            small coastal residence with just five suites, designed to feel relaxed,
            elegant, and quietly personal.
          </p>
          <p>
            For more than two decades, The Pillars Hotel was known for its understated
            luxury and personal service. Birch House continues that philosophy in a
            more private and residential form, for those who prefer intimacy over
            scale, and discretion over display.
          </p>
        </div>
      </section>

      {/* ── PHOTO GALLERY ────────────────────────────────────── */}
      <PhotoGallery />

      {/* ── PREVIEW CARDS ────────────────────────────────────── */}
      <section className="previews">
        {previews.map((p, i) => (
          <article key={p.href} className={`preview-card ${i % 2 === 1 ? 'preview-card--reverse' : ''}`}>
            <div className="preview-img-wrap">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="preview-img"
                style={{ objectFit: 'cover', objectPosition: p.imgPos }}
              />
            </div>
            <div className="preview-body">
              <span className="preview-label">{p.label}</span>
              <h2 className="preview-title">{p.title}</h2>
              <div className="rule rule--left" />
              <p className="preview-text">{p.body}</p>
              <a href={p.href} className="tlink">{p.cta}</a>
            </div>
          </article>
        ))}
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <Footer />
    </>
  )
}
