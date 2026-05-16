import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Footer navigation" style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <Link href="/suites" style={{ color: 'inherit', textDecoration: 'none', fontSize: '15px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>Suites</Link>
        <Link href="/experience" style={{ color: 'inherit', textDecoration: 'none', fontSize: '15px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>Experience</Link>
        <Link href="/location" style={{ color: 'inherit', textDecoration: 'none', fontSize: '15px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>Location</Link>
        <Link href="/photos" style={{ color: 'inherit', textDecoration: 'none', fontSize: '15px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>Gallery</Link>
        <Link href="/reservations" style={{ color: 'inherit', textDecoration: 'none', fontSize: '15px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>Reservations</Link>
      </nav>
      <p>
        Birch House &ensp;&middot;&ensp;{' '}
        <a href="https://maps.google.com/?q=66+S+Birch+Road+Fort+Lauderdale+FL+33316" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          66 S Birch Road, Fort Lauderdale, FL 33316
        </a>
        &ensp;&middot;&ensp;{' '}
        <a href="tel:+19544679639" style={{ color: 'inherit', textDecoration: 'none' }}>+1 (954) 467-9639</a>
      </p>
      <p style={{ marginTop: '6px', opacity: 0.7 }}>
        From the creators of The Pillars Hotel
      </p>
    </footer>
  )
}
