import React from "react"

const TechStack = () => {
  const techStack = {
    Languages: ["C++", "JavaScript", "Java", "Python", "Lua"],
    Frontend: ["React", "HTML/CSS", "Tailwind"],
    Backend: ["Node.js", "Express", "MongoDB", "MySQL"],
    Tools: ["SDL2", "Git", "Linux", "Neovim"],
    Learning: ["Go", "Rust", "Cybersecurity"],
  }

  return (
    <section className="bg-white relative flex flex-col items-center justify-center min-h-screen snap-start px-4 sm:px-8 py-20">
      <div className="max-w-4xl w-full bg-white border-2 border-none p-6 sm:p-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight text-black select-none">
          Tech Stack
          <span className="block w-16 h-1 bg-black mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="border-l-4 border-black pl-4">
              <h3 className="text-lg font-bold text-black mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-base text-gray-600">
            <span className="font-bold text-black">Systems programming</span>{" "}
            enthusiast, always learning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechStack
