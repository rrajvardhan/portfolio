import { useEffect, useState, useRef } from "react"
import Navbar from "./components/Navbar"
import IntroSection from "./components/IntroSection"
import AboutMe from "./components/AboutMe"
import QuicKLinks from "./components/QuicKLinks"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { AnimatePresence, motion } from "framer-motion"

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const introRef = useRef(null)

  const scrollToSection = (sectionIndex) => {
    const sections = document.querySelectorAll(".snap-start")
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowNavbar(!entry.isIntersecting),
      { threshold: 0.5 },
    )
    if (introRef.current) observer.observe(introRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            className="fixed top-0 w-full z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <Navbar scrollToSection={scrollToSection} />
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={introRef}>
        <IntroSection scrollToSection={scrollToSection} />
      </div>

      <AboutMe scrollToSection={scrollToSection} />
      <QuicKLinks />
      <Projects />
      <Contact />
    </div>
  )
}
