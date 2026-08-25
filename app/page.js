import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PhotoGallery from '@/components/PhotoGallery'
import BookingButton from '@/components/BookingButton'

export const metadata = {
  title: 'Private Five-Suite Retreat | Birch House Fort Lauderdale',
  description: 'A private coastal residence with just five unusually spacious suites, steps from Fort Lauderdale Beach and Las Olas Marina. Understated luxury and highly personal service.',
  alternates: { canonical: 'https://birchhouseclub.com' },
}

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
    btnClass: 'b6',
  },
]

const proofPoints = [
  {
    title: 'Only five suites',
    body: 'Privacy and personal attention by design.',
  },
  {
    title: 'Unusually generous space',
    body: 'Approximately 525 to 1,150 sq ft.',
  },
  {
    title: 'A private-house atmosphere',
    body: 'A quiet garden, a pool, and places to linger.',
  },
  {
    title: 'Beach and marina location',
    body: 'Two minutes from both Fort Lauderdale Beach and Las Olas Marina.',
  },
  {
    title: 'A recognized hospitality lineage',
    body: 'From the same ownership that created The Pillars Hotel.',
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
          sizes="100vw"
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
        />
        <div className="hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">The Club at Birch House</span>
          <h1>A Private Coastal Residence in Fort Lauderdale</h1>
          <span className="hero-sub">
            Five exceptionally spacious suites. A quiet pool and garden. Highly
            personal service, steps from the beach and Las Olas Marina.
          </span>
          <div className="btn-row hero-btn-row">
            <BookingButton className="btn btn-filled">Check Availability</BookingButton>
            <a href="/suites" className="btn btn-outline">Explore the Suites</a>
          </div>
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
            Birch House is not a hotel in the traditional sense. It is a private coastal
            residence with just five suites, created for guests who value space, calm
            and personal attention. Each stay has the ease of a private home, with Fort
            Lauderdale Beach and Las Olas Marina only moments away.
          </p>
          <p>
            From the same ownership that created The Pillars Hotel, known for more than
            two decades for understated luxury and deeply personal service, Birch House
            carries that philosophy forward in a smaller, more residential form.
          </p>
        </div>
      </section>

      {/* ── PROOF POINTS ─────────────────────────────────────── */}
      <section className="proof-section">
        <ul className="proof-grid">
          {proofPoints.map(pt => (
            <li key={pt.title} className="proof-item">
              <h3>{pt.title}</h3>
              <p>{pt.body}</p>
            </li>
          ))}
        </ul>
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
                sizes="(max-width: 768px) 100vw, 50vw"
                className="preview-img"
                style={{ objectFit: 'cover', objectPosition: p.imgPos }}
              />
            </div>
            <div className="preview-body">
              <span className="preview-label">{p.label}</span>
              <h2 className="preview-title">{p.title}</h2>
              <div className="rule rule--left" />
              <p className="preview-text">{p.body}</p>
              {p.btnClass
                ? <BookingButton className="tlink">{p.cta}</BookingButton>
                : <a href={p.href} className="tlink">{p.cta}</a>
              }
            </div>
          </article>
        ))}
      </section>

      {/* ── CLUB STATUS (pre-opening) ────────────────────────── */}
      <section className="club-note">
        <div className="prose">
          <span className="preview-label">The Club, Arriving This Fall</span>
          <div className="rule" />
          <p>
            Later this year, the residence will be joined by The Club at Birch House:
            an intimate private club with dining, a lounge and bar, poolside hospitality
            and a carefully limited membership. Hotel guests will be welcomed into the
            club experience once it opens.
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <Footer />
    </>
  )
}
