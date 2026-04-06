import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'

// Full image set — carousel images + local Birch House images
const allPhotos = [
  // Local Birch House photography
  { src: '/images/birch_house_hero_16x9.png',     alt: 'Birch House exterior',           category: 'Exterior' },
  { src: '/images/flowers gate.jpg',               alt: 'Entrance gate and garden',       category: 'Exterior' },
  { src: '/images/Birch-House-Grand-Suite.jpg',    alt: 'Grand Suite living room',        category: 'Suites'   },
  { src: '/images/Birch-House-Grand-Suite-1.jpg',  alt: 'Grand Suite bedroom',            category: 'Suites'   },
  { src: '/images/bedroom birch house.jpg',        alt: 'Suite bedroom',                  category: 'Suites'   },
  { src: '/images/girl on bed birch house.jpg',    alt: 'Suite — morning light',          category: 'Suites'   },
  { src: '/images/Birch-House batroom.jpg',        alt: 'Suite bathroom',                 category: 'Suites'   },
  { src: '/images/corner table.jpg',               alt: 'Corner table',                   category: 'Interior' },

  // Pillars / Birch House gallery images
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/61.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2020/10/ss2.jpg',             alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/91.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2020/10/ss4.jpg',             alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2019/12/s2.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2019/12/s4.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2019/12/s6.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2019/12/s10.jpg',             alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/10/for-photo-gallery-1.jpg', alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/10-11.jpg',           alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/81.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/1-21.jpg',            alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/41.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/51.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/71.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/10/photo-gallery-2.jpg', alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/04/31.jpg',              alt: 'Birch House', category: 'Gallery' },
  { src: 'https://pillarshotel.com/wp-content/uploads/2023/05/for-gallery-21.jpg',  alt: 'Birch House', category: 'Gallery' },
]

const categories = ['All', 'Exterior', 'Suites', 'Interior', 'Gallery']

export default function PhotosPage() {
  return (
    <>
      <Header />

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="/images/birch_house_hero_16x9.png"
          alt="Birch House Photography"
          fill
          priority
          className="hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
        />
        <div className="hero-veil" />
        <div className="hero-text">
          <span className="page-hero-label">Photography</span>
          <h1>The Gallery</h1>
          <span className="hero-sub">Birch House, Fort Lauderdale Beach.</span>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="page-intro">
        <div className="prose">
          <p>
            A visual record of the house — its rooms, its light, its garden, and its
            setting by the coast. Six suites, one gate, and the Atlantic just beyond.
          </p>
        </div>
      </section>

      {/* ── MASONRY GRID ─────────────────────────────────────── */}
      <section className="photos-grid-section">
        <div className="photos-grid">
          {allPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`photo-item ${i % 7 === 0 || i % 7 === 4 ? 'photo-item--tall' : ''}`}
            >
              <div className="photo-item-inner">
                {photo.src.startsWith('http') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="photo-img"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="photo-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                <div className="photo-overlay">
                  <span className="photo-cat">{photo.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="page-cta">
        <div className="prose">
          <h2>Reserve Your Suite</h2>
          <div className="rule" />
          <p>
            With only six suites, we recommend reserving in advance.
          </p>
          <div className="btn-row">
            <Link href="/suites" className="btn btn-outline">View the Suites</Link>
            <a
              href="https://pillarshotel.com/birch-house/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled"
            >
              Check Availability
            </a>
          </div>
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
