// Mews Booking Engine (Distributor), loaded on demand rather than on every page view:
// its ~800 KB of script and third-party cookies only arrive when a guest goes to book.
const SCRIPT_SRC = 'https://app.mews.com/distributor/distributor.min.js'
const CONFIGURATION_ID = 'db6703b3-a9ad-417a-9c41-b1bc0080de44'
// Mews's hosted booking page, used if the script can't load.
const STANDALONE_URL = `https://app.mews.com/distributor/${CONFIGURATION_ID}`

let distributor = null

// Resolves to the Distributor API, or null if the script failed to load.
export function loadBooking() {
  distributor ??= new Promise(resolve => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => {
      window.Mews.Distributor({ configurationIds: [CONFIGURATION_ID] }, api => {
        document.querySelector('iframe.mews-distributor')?.setAttribute('title', 'Book your stay at Birch House')
        resolve(api)
      })
    }
    script.onerror = () => {
      script.remove()
      distributor = null
      resolve(null)
    }
    document.head.appendChild(script)
  })
  return distributor
}

export async function openBooking() {
  const api = await loadBooking()
  if (api) api.open()
  else window.location.href = STANDALONE_URL
}
