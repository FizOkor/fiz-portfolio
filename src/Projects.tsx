import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "D_Arena",
      description:
        "Web3 gaming platform where players stake assets to compete in real-time games. Built with React, Node.js, Express, and Socket.IO; integrated blockchain features for asset interaction.",
      initials: "DA",
      gradient: "from-blue-600 to-purple-600",
      link: "https://d-arena.onrender.com",
      tech: ["React", "Node.js", "Express", "Socket.IO", "Web3", "MongoDB"],
    },
    {
      title: "Fiz Learning",
      description:
        "Online education platform with smooth course access and user-friendly interface. Developed with React.js for optimal learning experience.",
      initials: "FL",
      gradient: "from-green-600 to-teal-600",
      link: "https://fiz-learning.netlify.app",
      tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    },
    {
      title: "EchoGear Landing Page",
      description:
        "E-commerce landing page for high-quality headphones, optimized for performance and responsiveness. Features modern design and smooth user experience.",
      initials: "EG",
      gradient: "from-orange-600 to-red-600",
      link: "https://fizokor.github.io/Echo-Gear",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#151517]">
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <main className="max-w-4xl mx-auto py-16">
          <h1 className="text-4xl font-bold mb-16">Projects</h1>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors group"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-white/10 shadow-lg`}
                    >
                      <span className="text-white font-bold text-2xl tracking-tight">
                        {project.initials}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-white/5 text-white/70 rounded-md border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
