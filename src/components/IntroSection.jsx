const IntroSection = ({ scrollToSection }) => {
  return (
    <>
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
    </>
  )
}

export default IntroSection
