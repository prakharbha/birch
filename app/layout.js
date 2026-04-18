import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import LhSdkLoader from '@/components/LhSdkLoader'

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
        {children}

        <LhSdkLoader />

      </body>
    </html>
  )
}
