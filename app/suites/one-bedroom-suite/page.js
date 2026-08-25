import { getSuite } from '../suitesData'
import SuiteDetail from '@/components/SuiteDetail'

const suite = getSuite('one-bedroom-suite')

export const metadata = {
  title: 'One-Bedroom Suite — Approximately 1,150 sq ft',
  description:
    'The One-Bedroom Suite at Birch House: approximately 1,150 sq ft, with a separate bedroom and expansive salon, steps from Fort Lauderdale Beach and Las Olas Marina.',
  alternates: { canonical: 'https://birchhouseclub.com/suites/one-bedroom-suite' },
}

export default function OneBedroomSuitePage() {
  return <SuiteDetail suite={suite} />
}
