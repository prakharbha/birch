import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import PillarsBanner from '../components/PillarsBanner'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <PillarsBanner />
        {children}

        {/* Mews Booking Engine (Distributor) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(m,e,w,s){
  if(document.getElementById('mews-distributor'))return;
  var c=m.createElement(e);
  c.id='mews-distributor';
  c.onload=function(){ Mews.D.apply(null,s); };
  c.async=1;
  c.src=w;
  var t=m.getElementsByTagName(e)[0];
  t.parentNode.insertBefore(c,t);
})(document,'script','https://app.mews.com/distributor/distributor.min.js',[['db6703b3-a9ad-417a-9c41-b1bc0080de44']]);
`,
          }}
        />

      </body>
    </html>
  )
}
