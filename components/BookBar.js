'use client'

import { BOOK_BAR_KEY } from '../lib/bookBar'

/**
 * A slim bar above the header announcing The Art of Welcome, with a link to the
 * book site at /book and a close button. Once closed it stays closed for that
 * visitor: the choice is kept in localStorage, and an inline script in the
 * layout hides the bar before first paint on later visits (no flash).
 *
 * /book is a separate site (rewritten in next.config.mjs), so the link is a
 * plain <a>, not next/link.
 */
export default function BookBar() {
  function dismiss() {
    try {
      localStorage.setItem(BOOK_BAR_KEY, '1')
    } catch {}
    document.documentElement.dataset.bookBar = 'off'
  }

  return (
    <div className="book-bar" role="region" aria-label="The Art of Welcome">
      <p className="book-bar__text">
        <em>The Art of Welcome</em>
        <span className="book-bar__long"> — The Story of The Pillars Hotel &amp; Club.</span>
        {' '}A signed, limited edition.{' '}
        <a className="book-bar__link" href="/book">
          Reserve your copy
        </a>
      </p>
      <button type="button" className="book-bar__close" onClick={dismiss} aria-label="Close">
        ×
      </button>
    </div>
  )
}
