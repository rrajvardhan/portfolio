import { useEffect, useState, useRef } from "react"
import Navbar from "./components/Navbar"
import IntroSection from "./components/IntroSection"
import AboutMe from "./components/AboutMe"
import QuicKLinks from "./components/QuicKLinks"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const introRef = useRef(null)

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
      {showNavbar && (
        <div className="fixed top-0 w-full z-50">
          <Navbar />
        </div>
      )}

      <div ref={introRef}>
        <IntroSection />
      </div>

      <AboutMe />
      <QuicKLinks />
      <Projects />
      <Contact />
    </div>
  )
}
