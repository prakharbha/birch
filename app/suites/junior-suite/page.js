import { getSuite } from '../suitesData'
import SuiteDetail from '@/components/SuiteDetail'

const suite = getSuite('junior-suite')

export const metadata = {
  title: 'Junior Suite — Approximately 525 sq ft',
  description:
    'The Junior Suite at Birch House: approximately 525 sq ft, with a generous sitting area and an oversized bathroom, steps from Fort Lauderdale Beach and Las Olas Marina.',
  alternates: { canonical: 'https://birchhouseclub.com/suites/junior-suite' },
}

export default function JuniorSuitePage() {
  return <SuiteDetail suite={suite} />
}
