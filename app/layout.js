import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  title: 'Birch House — Fort Lauderdale',
  description:
    'A private house by the coast. Five suites on Fort Lauderdale Beach, from the creators of The Pillars Hotel.',
}

const lhTheme = JSON.stringify({
  v2: {
    palette: {
      primary: 'rgb(113, 148, 47)',
      primaryHover: 'rgb(95, 124, 39)',
      primaryDimmed: 'rgba(113, 148, 47, 0.5)',
      primaryDisabled: 'rgb(175, 188, 152)',
      destructive: 'rgba(208, 122, 122, 1)',
      destructiveHover: 'rgba(151, 86, 86, 1)',
      destructiveDimmed: 'rgba(208, 122, 122, 0.6)',
      destructiveDisabled: 'rgba(208, 122, 122, 0.32)',
      success: 'rgba(122, 151, 115, 1)',
      successHover: 'rgba(86, 107, 81, 1)',
      successDimmed: 'rgba(122, 151, 115, 0.6)',
      successDisabled: 'rgba(122, 151, 115, 0.32)',
      positive: 'rgba(0,0,0, 1)',
      positiveDimmed: 'rgba(0,0,0, 0.6)',
      positiveDisabled: 'rgba(0,0,0, 0.3)',
      negative: 'rgba(255,255,255, 1)',
      negativeDimmed: 'rgba(255, 255, 255, 0.6)',
      negativeDisabled: 'rgba(255,255,255, 0.3)',
      cell: 'rgba(255, 255, 255, 1)',
      cellHover: 'rgba(217, 217, 217, 1)',
      cellSelected: 'rgba(113, 148, 47, 0.5)',
      backgroundAlternative: 'rgb(227, 227, 227)',
      background: 'rgba(255,255,255, 1)',
      separator: 'rgba(255, 255, 255, 1)',
      textAlternative: 'rgb(0,0,0)',
    },
    typography: {
      fonts: { primary: 'open sans' },
      largeTitle: { 'font-family': 'open sans', 'font-weight': '500', 'font-size': '30px', 'line-height': '41px', 'text-transform': 'uppercase' },
      titleOne:   { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '28px', 'line-height': '34px' },
      titleTwo:   { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '24px', 'line-height': '32px' },
      titleThree: { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '28px', 'line-height': '34px' },
      headline:   { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '17px', 'line-height': '22px' },
      body:       { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '17px', 'line-height': '22px' },
      callout:    { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '16px', 'line-height': '21px' },
      subhead:    { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '15px', 'line-height': '20px' },
      footnote:   { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '13px', 'line-height': '18px' },
      captionOne: { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '11px', 'line-height': '14px' },
      captionTwo: { 'font-family': 'open sans', 'font-weight': '300', 'font-size': '11px', 'line-height': '13px' },
    },
  },
})

const listenerScript = `
  function addListenerToSelector(selector) {
    var button = document.querySelector(selector);
    if (!button) return;
    button.addEventListener("click", function(e) {
      e.preventDefault();
      if (window.openBookingFlow) window.openBookingFlow();
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    ["b1","b2","b3","b4","b5","b6"].forEach(function(cls) {
      addListenerToSelector("a." + cls);
    });
  });
`

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        {children}

        {/* Life House booking engine SDK */}
        <script
          id="lh-sdk"
          type="module"
          src="https://cdn.prd.aws.life-house.com/rmms/booking-engine/latest/sdk.min.js"
          data-hotel-id="a1fd068c-f652-45b5-aeb1-b1bc0080d015"
          data-theme={lhTheme}
          defer
        />

        {/* Wire up booking buttons */}
        <script dangerouslySetInnerHTML={{ __html: listenerScript }} />
      </body>
    </html>
  )
}
