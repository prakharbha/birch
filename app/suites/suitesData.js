// Single source of truth for suite content.
// The suites index, the individual suite pages and the structured data in
// app/layout.js must all agree — names, sizes and inclusions are quoted on
// OTAs and in confirmations, so they are defined once here.

export const suites = [
  {
    slug: 'junior-suite',
    name: 'Junior Suite',
    size: 'Approximately 525 sq ft',
    detail: 'Three available · Approximately 525 sq ft',
    lead:
      'More spacious than many conventional hotel rooms, each Junior Suite is arranged as a calm, light-filled retreat with a generous sitting area and an oversized bathroom. The feeling is residential: room to unpack, settle in and stay awhile.',
    desc: 'Open, light-filled suites designed for comfort and ease. Each Junior Suite offers a generous living area, oversized windows, and a refined bathroom with a glass-enclosed shower and soaking tub. An ADA-accessible option is available.',
    stay: [
      ['Bedding', 'One king bed'],
      ['Maximum occupancy', 'Two guests'],
      ['Bathroom', 'Oversized bathroom with glass-enclosed shower and soaking tub'],
      ['Outlook', 'Garden or pool aspect'],
      ['Accessibility', 'One ADA-accessible Junior Suite is available on request'],
      ['Housekeeping', 'Daily service'],
      ['Wi-Fi', 'Complimentary throughout the residence'],
      ['Parking', 'On-site parking available'],
    ],
    images: [
      { src: '/images/jr-hero.jpg', alt: 'Junior Suite',          pos: 'center' },
      { src: '/images/jr-1.jpg',    alt: 'Junior Suite bedroom',  pos: 'center' },
      { src: '/images/jr-2.jpg',    alt: 'Junior Suite bathroom', pos: 'center' },
      { src: '/images/jr-3.jpg',    alt: 'Junior Suite detail',   pos: 'center' },
    ],
  },
  {
    slug: 'one-bedroom-suite',
    name: 'One-Bedroom Suite',
    size: 'Approximately 1,150 sq ft',
    detail: 'Two available · Approximately 1,150 sq ft',
    lead:
      'A true private residence by the coast. A separate bedroom and expansive salon create distinct spaces for sleeping, reading, entertaining or working, while the large bathroom adds the ease and comfort expected of a longer stay.',
    desc: 'The largest accommodation at Birch House. A full separate bedroom, expansive salon, and a spa-like bathroom with freestanding bathtub and walk-in shower — a true residential experience.',
    stay: [
      ['Bedding', 'One king bed in a separate bedroom'],
      ['Maximum occupancy', 'Four guests'],
      ['Bathroom', 'Large bathroom with freestanding bathtub and walk-in shower'],
      ['Living space', 'Separate salon with seating and space to work or entertain'],
      ['Outlook', 'Garden or pool aspect'],
      ['Housekeeping', 'Daily service'],
      ['Wi-Fi', 'Complimentary throughout the residence'],
      ['Parking', 'On-site parking available'],
    ],
    images: [
      { src: '/images/gs-hero.jpg', alt: 'One-Bedroom Suite',          pos: 'center' },
      { src: '/images/gs-1.jpg',    alt: 'One-Bedroom Suite bedroom',  pos: 'center' },
      { src: '/images/gs-2.jpg',    alt: 'One-Bedroom Suite salon',    pos: 'center' },
      { src: '/images/gs-3.jpg',    alt: 'One-Bedroom Suite bathroom', pos: 'center' },
      { src: '/images/gs-4.jpg',    alt: 'One-Bedroom Suite detail',   pos: 'center' },
    ],
  },
]

export function getSuite(slug) {
  return suites.find(s => s.slug === slug)
}
