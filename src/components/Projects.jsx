import { useState } from "react"
import { projects } from "../data/projects"

const Projects = () => {
  const [expandedImage, setExpandedImage] = useState(null)
  return (
    <>
      {/* PROJECTS SECTION  */}
      <main className="min-h-screen bg-neutral-400 p-4 sm:p-6 md:p-10 snap-start">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-black my-4 sm:my-6 tracking-wide">
          Projects
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-fr">
          {projects.map((project, i) => (
            <div
              key={i}
              className="border-2 border-black p-4 sm:p-6 shadow-md bg-white flex flex-col"
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
              <div className="flex-1 flex flex-col">
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

                <p className="mb-4 text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed flex-1">
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
    </>
  )
}

export default Projects
