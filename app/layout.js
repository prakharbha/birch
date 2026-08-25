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
    default: 'Private Five-Suite Retreat | Birch House Fort Lauderdale',
    template: '%s | Birch House Fort Lauderdale',
  },
  description:
    'A private coastal residence with just five unusually spacious suites, steps from Fort Lauderdale Beach and Las Olas Marina. Understated luxury and highly personal service.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'The Club at Birch House — A Private Coastal Residence in Fort Lauderdale',
    description:
      'Five exceptionally spacious suites. A quiet pool and garden. Highly personal service, steps from the beach and Las Olas Marina.',
    url: 'https://birchhouseclub.com',
    siteName: 'The Club at Birch House',
    images: [
      {
        url: '/images/birch_house_hero_16x9.png',
        width: 1600,
        height: 900,
        alt: 'Birch House — a private coastal residence on Fort Lauderdale Beach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Club at Birch House — A Private Coastal Residence in Fort Lauderdale',
    description:
      'Five exceptionally spacious suites. A quiet pool and garden. Highly personal service, steps from the beach and Las Olas Marina.',
    images: ['/images/birch_house_hero_16x9.png'],
  },
}

const hotelLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  '@id': 'https://birchhouseclub.com/#hotel',
  name: 'The Club at Birch House',
  alternateName: 'Birch House',
  url: 'https://birchhouseclub.com',
  logo: 'https://birchhouseclub.com/images/official-birch-house-logo.webp',
  image: 'https://birchhouseclub.com/images/birch_house_hero_16x9.png',
  description:
    'A private coastal residence with just five unusually spacious suites on Fort Lauderdale Beach, offering understated luxury and highly personal service.',
  numberOfRooms: 5,
  petsAllowed: false,
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
    { '@type': 'LocationFeatureSpecification', name: 'Garden', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Beach Access', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'ADA Accessible Room', value: true },
  ],
  containsPlace: [
    {
      '@type': 'HotelRoom',
      name: 'Junior Suite',
      url: 'https://birchhouseclub.com/suites/junior-suite',
      description:
        'Approximately 525 sq ft, arranged as a calm, light-filled retreat with a generous sitting area and an oversized bathroom.',
      image: 'https://birchhouseclub.com/images/jr-hero.jpg',
      occupancy: { '@type': 'QuantitativeValue', maxValue: 2 },
      floorSize: { '@type': 'QuantitativeValue', value: 525, unitCode: 'FTK' },
    },
    {
      '@type': 'HotelRoom',
      name: 'One-Bedroom Suite',
      url: 'https://birchhouseclub.com/suites/one-bedroom-suite',
      description:
        'Approximately 1,150 sq ft, with a separate bedroom and expansive salon — a true private residence by the coast.',
      image: 'https://birchhouseclub.com/images/gs-hero.jpg',
      occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
      floorSize: { '@type': 'QuantitativeValue', value: 1150, unitCode: 'FTK' },
    },
  ],
  checkinTime: '15:00',
  checkoutTime: '11:00',
  priceRange: '$$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card',
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://birchhouseclub.com/reservations',
      inLanguage: 'en-US',
    },
    result: { '@type': 'LodgingReservation', name: 'Reserve a suite at Birch House' },
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://birchhouseclub.com/#organization',
  name: 'The Club at Birch House',
  url: 'https://birchhouseclub.com',
  logo: 'https://birchhouseclub.com/images/official-birch-house-logo.webp',
  telephone: '+19544679639',
  email: 'guestservices@birchhouseclub.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '66 S Birch Road',
    addressLocality: 'Fort Lauderdale',
    addressRegion: 'FL',
    postalCode: '33316',
    addressCountry: 'US',
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
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
