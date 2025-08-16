import { useState } from "react"

const Navbar = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 font-mono font-bold text-base sm:text-lg">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-2 md:gap-4 mx-auto">
            <button
              onClick={() => scrollToSection(0)}
              className="hover:underline cursor-pointer underline-offset-4 px-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(1)}
              className="hover:underline cursor-pointer underline-offset-4 px-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(2)}
              className="hover:underline cursor-pointer underline-offset-4 px-2"
            >
              Projects
            </button>
            <a
              href="#contact"
              className="hover:underline cursor-pointer underline-offset-4 px-2"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-black sm:hidden">
              <div className="flex flex-col py-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(0)
                  }}
                  className="hover:bg-gray-100 px-4 py-3 text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(1)
                  }}
                  className="hover:bg-gray-100 px-4 py-3 text-left"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(2)
                  }}
                  className="hover:bg-gray-100 px-4 py-3 text-left"
                >
                  Projects
                </button>
                <a
                  href="#contact"
                  className="hover:bg-gray-100 px-4 py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
