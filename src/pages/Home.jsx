import Navbar     from "../components/Navbar"
import HeroAbout  from "../components/HeroAbout"
import HowIWork   from "../components/HowIWork"
import CaseStudies from "../components/CaseStudies"
import Footer     from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <HowIWork />
      <CaseStudies />
      <Footer />
    </>
  )
}
