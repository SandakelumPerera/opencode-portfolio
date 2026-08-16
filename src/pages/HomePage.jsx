import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import Metrics from '../components/Metrics'
import Whispers from '../components/Whispers'
import Services from '../components/Services'
import Process from '../components/Process'
import Pricing from '../components/Pricing'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Metrics />
      <Whispers />
      <Services />
      <Process />
      <Pricing />
    </>
  )
}
