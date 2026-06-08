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
  metadataBase: new URL('https://birchhouseclub.com'),
  title: {
    default: 'Birch House — Boutique Hotel on Fort Lauderdale Beach',
    template: '%s | Birch House Fort Lauderdale',
  },
  description:
    'A boutique coastal residence with five luxury suites on Fort Lauderdale Beach. From the creators of The Pillars Hotel & Club.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Birch House — Boutique Hotel on Fort Lauderdale Beach',
    description:
      'Five luxury suites steps from Fort Lauderdale Beach. From the creators of The Pillars Hotel & Club.',
    url: 'https://birchhouseclub.com',
    siteName: 'Birch House',
    images: [
      {
        url: '/images/birch_house_hero_16x9.png',
        width: 1600,
        height: 900,
        alt: 'Birch House — Fort Lauderdale Beach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birch House — Boutique Hotel on Fort Lauderdale Beach',
    description:
      'Five luxury suites steps from Fort Lauderdale Beach. From the creators of The Pillars Hotel & Club.',
    images: ['/images/birch_house_hero_16x9.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Birch House',
  alternateName: 'The Club at Birch House',
  url: 'https://birchhouseclub.com',
  logo: 'https://birchhouseclub.com/images/official-birch-house-logo.webp',
  image: 'https://birchhouseclub.com/images/birch_house_hero_16x9.png',
  description:
    'A boutique coastal residence with five luxury suites on Fort Lauderdale Beach, from the creators of The Pillars Hotel & Club.',
  numberOfRooms: 5,
  starRating: { '@type': 'Rating', ratingValue: '5' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '66 S Birch Road',
    addressLocality: 'Fort Lauderdale',
    addressRegion: 'FL',
    postalCode: '33316',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.1196,
    longitude: -80.1005,
  },
  telephone: '+19544679639',
  email: 'guestservices@birchhouseclub.com',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Beach Access', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'ADA Accessible Room', value: true },
  ],
  checkinTime: '15:00',
  checkoutTime: '11:00',
  priceRange: '$$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <PillarsBanner />
        {children}

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
