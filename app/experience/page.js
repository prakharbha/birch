import Image from 'next/image'
import Header from '@/components/Header'

const moments = [
  {
    time: 'Morning',
    headline: 'A Slower Start',
    body: 'Mornings begin slowly, with light from the coast. The option to step out toward the beach is just moments away. There is no schedule — only the rhythm you choose. Coffee brought to the room, or taken on the terrace as the day begins to unfold.',
    img: '/images/girl on bed birch house.jpg',
    imgPos: 'center 20%',
  },
  {
    time: 'Afternoon',
    headline: 'Between the House and the Water',
    body: 'Afternoons move easily between the house and the nearby marina. The energy of the water is present but never intrusive. The beach is a short walk. The restaurants and shops of Fort Lauderdale are within easy reach when you want them.',
    img: '/images/Birch-House-Grand-Suite.jpg',
    imgPos: 'center 40%',
  },
  {
    time: 'Evening',
    headline: 'Unhurried Evenings',
    body: 'Evenings are calm and understated. The setting invites conversation, a glass of wine, or simply time to unwind in a space that feels private and removed from the world. There is no performance here — only comfort.',
    img: '/images/corner table.jpg',
    imgPos: 'center 45%',
  },
]

export default function ExperiencePage() {
  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="/images/girl on bed birch house.jpg"
          alt="The Experience at Birch House"
          fill
          priority
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        <div className="hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">Your Stay</span>
          <h1>The Experience</h1>
          <span className="hero-sub">A more deliberate way to be somewhere.</span>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <p>
            Birch House was conceived as an alternative to the conventional hotel stay.
            The scale is intentionally small. The atmosphere is intentionally calm. What
            results is a kind of stay that is increasingly difficult to find — one defined
            by space, quiet, and genuine personal attention.
          </p>
          <p>
            This is a more intimate expression of the spirit that has defined The Pillars
            Hotel for over two decades.
          </p>
        </div>
      </section>

      {/* ── MOMENTS OF THE DAY ──────────────────────────────── */}
      {moments.map((m, i) => (
        <article key={m.time} className={`suite-row ${i % 2 === 1 ? 'suite-row--reverse' : ''}`}>
          <div className="suite-img-wrap">
            <Image
              src={m.img}
              alt={m.headline}
              fill
              className="suites-img"
              style={{ objectFit: 'cover', objectPosition: m.imgPos }}
            />
          </div>
          <div className="suite-text">
            <span className="suite-detail">{m.time}</span>
            <h2>{m.headline}</h2>
            <div className="rule rule--left" />
            <p>{m.body}</p>
          </div>
        </article>
      ))}

      {/* ── PHILOSOPHY ──────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <h2>The Philosophy</h2>
          <div className="rule" />
          <p>
            The Club at Birch House is not a hotel in the traditional sense. It is a small
            coastal residence with just six suites, designed for those who prefer intimacy
            over scale, and discretion over display.
          </p>
          <p>
            The atmosphere is calm, with an emphasis on space, light, and comfort rather
            than formality. The scale allows for a different kind of stay. Mornings unfold
            at your own pace. Evenings are unhurried.
          </p>
          <a href="/suites" className="tlink">View the Suites</a>
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
