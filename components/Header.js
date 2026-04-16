'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Home',           href: '/'             },
  { label: 'The Suites',     href: '/suites'       },
  { label: 'The Experience', href: '/experience'   },
  { label: 'The Location',   href: '/location'     },
  { label: 'Photos',         href: '/photos'       },
  { label: 'Reservations',   href: '/reservations' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="logo" onClick={close}>Birch House</Link>

        {/* Desktop nav */}
        <nav className="nav">
          {links.slice(0, 4).map(({ label, href }) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
          <Link href="/reservations" className="nav-cta">Reservations</Link>
        </nav>

        {/* Hamburger — mobile/tablet only */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </header>

      {/* Full-screen overlay menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        {/* Close button */}
        <button className="mobile-menu-close" onClick={close} aria-label="Close menu">
          <span className="close-bar" />
          <span className="close-bar" />
        </button>

        <div className="mobile-menu-inner">

          {/* Logo */}
          <Link href="/" className="mobile-menu-logo" onClick={close}>
            Birch House
          </Link>

          {/* Rule */}
          <div className="mobile-menu-rule" />

          {/* Nav links */}
          <nav className="mobile-nav">
            {links.map(({ label, href }, i) => (
              <Link
                key={href}
                href={href}
                className="mobile-nav-link"
                onClick={close}
                style={{ transitionDelay: menuOpen ? `${i * 60 + 120}ms` : '0ms' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Footer line */}
          <p className="mobile-menu-footer">
            Fort Lauderdale Beach &ensp;&middot;&ensp; From the creators of The Pillars Hotel
          </p>
        </div>
      </div>
    </>
  )
}
