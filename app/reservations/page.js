import Image from 'next/image'
import Header from '@/components/Header'

const faqs = [
  {
    q: 'How far in advance should I reserve?',
    a: 'With only six suites, Birch House fills quickly during peak season (November through April). We recommend reserving at least four to six weeks in advance for preferred dates.',
  },
  {
    q: 'What is the check-in and check-out time?',
    a: 'Check-in is from 3:00 PM. Check-out is by 11:00 AM. Early check-in or late check-out may be arranged based on availability — please contact us in advance.',
  },
  {
    q: 'Is Birch House suitable for extended stays?',
    a: 'Yes. The residential scale and layout of the suites make Birch House particularly well-suited to guests staying a week or more. We are happy to discuss extended stay arrangements.',
  },
  {
    q: 'Can the house be reserved exclusively?',
    a: 'Exclusive use of all six suites can be arranged for private groups or events. Please contact us directly to discuss.',
  },
]

export default function ReservationsPage() {
  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="/images/birch-18.jpg"
          alt="Birch House Reservations"
          fill
          priority
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div className="hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">Availability</span>
          <h1>Reservations</h1>
          <span className="hero-sub">A limited number of suites, thoughtfully held.</span>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <p>
            With only six suites, availability is naturally limited. We recommend reserving
            in advance to secure your preferred dates. Our team is available to assist with
            any special requests or arrangements to ensure a seamless stay.
          </p>
        </div>
      </section>

      {/* ── BOOKING CTA ─────────────────────────────────────── */}
      <section className="booking-section">
        <div className="booking-inner">
          <div className="prose">
            <h2>Check Availability</h2>
            <div className="rule" />
            <p>
              Proceed to our availability calendar to view dates and suite types,
              or contact us directly for assistance with your reservation.
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
              <a
                href="https://pillarshotel.com/birch-house/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Photo Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-block">
            <h3>Reservations</h3>
            <div className="rule rule--left" />
            <p>For reservations and general enquiries:</p>
            <p>
              <a href="mailto:reservations@birchhouse.com" className="contact-link">
                reservations@birchhouse.com
              </a>
            </p>
            <p>+1 (xxx) xxx xxxx</p>
          </div>
          <div className="contact-block">
            <h3>Special Requests</h3>
            <div className="rule rule--left" />
            <p>
              For special requests, extended stays, or exclusive use enquiries,
              our team is available to assist. We aim to respond to all enquiries
              within 24 hours.
            </p>
          </div>
          <div className="contact-block">
            <h3>The Address</h3>
            <div className="rule rule--left" />
            <p>
              66 Birch Road<br />
              Fort Lauderdale Beach<br />
              Florida, FL 33304
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="faq-section">
        <div className="prose" style={{ marginBottom: '64px' }}>
          <h2>Questions</h2>
          <div className="rule" />
        </div>
        <div className="faq-list">
          {faqs.map(f => (
            <div key={f.q} className="faq-item">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
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
