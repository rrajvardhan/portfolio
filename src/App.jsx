import { useEffect, useState } from "react"

const projects = [
  {
    preview: "/engine-demo.gif",
    title: "SH!T",
    subtitle: "2D Game Engine",
    description:
      "Modular 2D game engine built in C++ with SDL2. Uses ECS architecture, ImGui for UI, Lua scripting via Sol2, and JSON for scene serialization. Includes input, audio, rendering , collision and physics systems.",
    github: "https://github.com/rrajvardhan/SH-T",
  },
  {
    preview: "/chess-demo.gif",
    title: "Chess",
    subtitle: "2D  Game",
    description:
      "Turn-based chess game using C++ and SDL2. Supports legal move logic, piece selection, and board rendering with basic UI feedback.",
    github: "https://github.com/rrajvardhan/sdl-chess",
  },
]

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth")
  }, [])

  const [expandedImage, setExpandedImage] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setExpandedImage(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const scrollToSection = (sectionIndex) => {
    const sections = document.querySelectorAll(".snap-start")
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <div className="min-h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 font-mono font-bold text-base sm:text-lg">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-2 md:gap-4 mx-auto">
            <button
              onClick={() => scrollToSection(0)}
              className="hover:underline underline-offset-4 px-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(1)}
              className="hover:underline underline-offset-4 px-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(2)}
              className="hover:underline underline-offset-4 px-2"
            >
              Projects
            </button>
            <a
              href="#contact"
              className="hover:underline underline-offset-4 px-2"
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
                  onClick={() => scrollToSection(0)}
                  className="hover:bg-gray-100 px-4 py-3 text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection(1)}
                  className="hover:bg-gray-100 px-4 py-3 text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection(2)}
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

      {/* INTRO */}
      <header className="h-screen relative bg-white flex items-center justify-center snap-start px-4 sm:px-8">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Hello.
            <br />
            I'm Rajvardhan.
          </h1>

          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-neutral-600 font-medium max-w-2xl">
            this is the part where i say something clever about myself — but
            let's be honest, i once got outsmarted by a sliding door.
          </p>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection(1)}
            className="p-2 text-gray-500 hover:text-black transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ABOUT ME */}
      <section className="bg-white relative flex flex-col items-center justify-center min-h-screen snap-start px-4 sm:px-8 py-20">
        <div className="max-w-3xl w-full bg-white border-2 border-black shadow-2xl p-4 sm:p-6 md:p-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 tracking-tight text-black select-none">
            About Me
          </h2>

          <div className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            <p className="mb-4 sm:mb-6">
              i write code that mostly works — sometimes even elegantly.
              <br className="hidden sm:block" /> naming projects chaotically is
              a specialty, and staying hydrated remains my most consistent
              hobby.
            </p>

            <p className="mb-4 sm:mb-6">
              primarily a C++ guy, but i’ve picked up enough frontend (HTML,
              CSS, JS, React) to throw together UIs that actually behave — just
              stuff that works.
            </p>

            <p className="mb-4 sm:mb-6">
              curiosity drives me — whether it’s untangling weird bugs,
              experimenting with ideas that might fail spectacularly, or
              learning something new because it looks fun.
            </p>

            <p>
              i like things that make me think, break, and rebuild — in roughly
              that order.
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection(2)}
            className="p-2 text-gray-500 hover:text-black transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="relative h-0 mt-6 sm:mt-10 snap-start">
        {/* Divider */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black" />

        <div className="absolute inset-0 flex justify-center items-center px-4">
          <div className="flex flex-col sm:flex-row bg-white border border-black shadow-sm z-10 w-full max-w-md sm:max-w-none sm:w-auto">
            {[
              {
                name: "GitHub",
                href: "https://github.com/rrajvardhan",
                external: true,
              },
              { name: "Resume", href: "/resume.pdf", external: true },
              { name: "Contact", href: "#contact", external: false },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3 border border-black bg-neutral-200 hover:bg-black hover:text-white transition font-semibold text-sm sm:text-base text-center"
              >
                {link.name}
                <span className="ml-2 text-xs sm:text-sm">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION  */}
      <main className="min-h-screen bg-neutral-400 p-4 sm:p-6 md:p-10 snap-start">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-black my-4 sm:my-6 tracking-wide">
          Projects
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="border-2 border-black p-4 sm:p-6 shadow-md bg-white flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs sm:text-sm font-bold text-neutral-800">
                  {project.subtitle}
                </p>
                <span className="text-xs text-gray-500 font-mono">
                  #{i + 1}
                </span>
              </div>
              {/* PROJECTS PREVIEW BANNER */}
              <div>
                <div className="aspect-video w-full bg-neutral-200 mb-4 overflow-hidden relative group border-2">
                  {/\.(gif|png|jpe?g)$/i.test(project.preview) ? (
                    <>
                      <img
                        src={project.preview}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover cursor-pointer transition-transform group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center"
                        onClick={() => setExpandedImage(project.preview)}
                      >
                        <div className="bg-white/90 px-2 sm:px-3 py-1 sm:py-2 border-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-bold">
                            Click to expand
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-neutral-500 text-xs tracking-wider font-semibold text-center p-4">
                        {project.preview}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  {project.title}
                </h3>

                <p className="mb-4 text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto border-t-2 pt-4 flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 bg-neutral-200 border-2 border-black hover:bg-black hover:text-white transition text-xs font-mono uppercase font-bold"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-neutral-200 border-2 border-black hover:bg-black hover:text-white transition text-xs font-mono uppercase font-bold"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {expandedImage && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out p-4"
            onClick={() => setExpandedImage(null)}
          >
            <img
              src={expandedImage}
              alt="Expanded preview"
              className="w-auto h-auto max-w-[95vw] max-h-[95vh] shadow-2xl"
              style={{
                transform: window.innerWidth > 640 ? "scale(1.5)" : "scale(1)",
              }}
            />
          </div>
        )}
      </main>

      {/* CONTACT SECTION */}
      <footer
        id="contact"
        className="bg-white flex text-black p-5 sm:p-6 items-center justify-center snap-start border-t-2 border-black"
      >
        <div className="flex flex-col gap-4 text-center">
          <a
            href="mailto:rajvardhantomar25@gmail.com"
            className="hover:underline underline-offset-8 text-sm sm:text-base font-mono font-bold break-all"
          >
            rajvardhantomar25@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}
