import { useEffect } from "react"
import Navbar from "./components/Navbar"
import IntroSection from "./components/IntroSection"
import AboutMe from "./components/AboutMe"
import QuickLinks from "./components/QuicKLinks"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth")
  }, [])

  const scrollToSection = (sectionIndex) => {
    const sections = document.querySelectorAll(".snap-start")
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar scrollToSection={scrollToSection} />
      <IntroSection scrollToSection={scrollToSection} />
      <AboutMe scrollToSection={scrollToSection} />
      <QuickLinks />
      <Projects />
      <Contact />
    </div>
  )
}
