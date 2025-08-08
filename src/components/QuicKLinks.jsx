const QuicKLinks = () => {
  return (
    <>
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
    </>
  )
}

export default QuicKLinks
