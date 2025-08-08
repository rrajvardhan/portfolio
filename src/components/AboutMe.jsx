const AboutMe = ({ scrollToSection }) => {
  return (
    <>
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
              primarily a C++ guy, but i've picked up enough frontend (HTML,
              CSS, JS, React) to throw together UIs that actually behave — just
              stuff that works.
            </p>

            <p className="mb-4 sm:mb-6">
              curiosity drives me — whether it's untangling weird bugs,
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
    </>
  )
}

export default AboutMe
