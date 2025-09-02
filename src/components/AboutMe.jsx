const AboutMe = ({ scrollToSection }) => {
  return (
    <>
      {/* ABOUT ME */}
      <section className="bg-white relative flex flex-col items-center justify-center min-h-screen snap-start px-4 sm:px-8 py-20">
        <div className="max-w-3xl w-full bg-white border-2 border-black shadow-2xl p-4 sm:p-6 md:p-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 tracking-tight text-black select-none">
            About Me
            <span className="block w-16 h-1 bg-black mt-2 rounded"></span>
          </h2>

          <div className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            <p className="mb-4 sm:mb-6">
              Primarily a C++ guy, but I've picked up enough frontend (HTML,
              CSS, JavaScript, React) to throw together UIs that actually
              behave.
              {/* <span className="italic"> [just stuff that works]</span> */}
              <br /> When it comes to databases, I have worked with MySQL,
              MongoDB, and Firestore.
              {/* <span className="italic"> [whatever gets the job done]</span> */}
            </p>

            <p className="mb-4 sm:mb-6">
              Comfortable with Java and Python when needed, but systems
              programming is where I want to be. I’m working to get really good
              with Go and Rust alongside C++. Hand me something
              performance-critical to solve.
              <span className="italic"> [that's my idea of fun]</span>
            </p>
            <p className="mb-4 sm:mb-6">
              Specialized in cybersecurity during my B.Tech — so I know the
              theory of breaking systems, even if I enjoy building them more.
            </p>
            <p className="mb-4 sm:mb-6">
              I write code that mostly works.
              <span className="italic"> [sometimes even elegantly]</span>
              <br className="hidden sm:block" /> Naming projects chaotically is
              a specialty, and staying hydrated remains my most consistent
              hobby.
            </p>
            <p className="mb-4 sm:mb-6">
              Curiosity drives me — whether it's untangling weird bugs,
              experimenting with ideas that might fail spectacularly, or
              learning something new because it looks fun.
            </p>
            <p>
              I like things that make me think, break, and rebuild in roughly
              that order, and sometimes all in one night.
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
