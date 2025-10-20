import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import avatar from "./assets/fizz0_avatar.png";
import d_arena_img from "./assets/d-arena-site.png";
import echogear_img from "./assets/echogear-site.png";

const experiences = [
  {
    period: "Jan 2022 - Present",
    title: "Web Developer (Freelance/Contract)",
    company: "Freelance",
    color: "text-blue-400",
    points: [
      "Built and optimized websites for performance, scalability, and cross-browser compatibility.",
      "Improved page load speed by up to 40% on client sites.",
      "Delivered responsive, user-friendly designs aligned with client needs.",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    period: "Aug 2022 - Dec 2022",
    title: "Instructor – Python & Data Science",
    company: "C.I.T.E",
    color: "text-green-400",
    points: [
      "Taught Python and data science concepts (Pandas, NumPy, Matplotlib, Scikit-learn).",
      "Guided students through hands-on projects, fostering problem-solving and collaboration.",
    ],
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    period: "Jun 2021 - Dec 2021",
    title: "Data Science Intern",
    company: "C.I.T.E",
    color: "text-yellow-400",
    points: [
      "Applied Python for scripting, automation, and data handling.",
      "Analyzed datasets using Pandas/NumPy; created insights and visualizations in Excel.",
    ],
    skills: ["Python", "Pandas", "NumPy", "Excel"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#151517] text-white">
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <main className="max-w-4xl mx-auto px-6">
          {/* === Hero Section === */}
          <section id="home" className="py-24">
            <div className="flex justify-center mb-12">
              <div className="w-70 h-70 rounded-xl flex items-center justify-center border-2 border-white/10 shadow-2xl overflow-hidden">
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-4">Hey, I'm Favour Okor</h1>

            <p className="text-white/70 text-xl leading-relaxed max-w-3xl mb-8">
              I’m a software engineer focused on building thoughtful, user-first
              web experiences. Lately, I’ve been working on{" "}
              <a href="https://d-arena.onrender.com/" className="underline">
                D_Arena
              </a>{" "}
              — a Web3 gaming platform where players stake to compete in
              nostalgic games. When I’m not staring at VS Code, you’ll probably
              find me making beats in FL Studio or exploring ideas that mix
              creativity and code.
            </p>

            <Link
              to="/about"
              className="inline-block px-6 py-2.5 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              About me
            </Link>
          </section>

          {/* === Projects Section === */}
          <section id="projects" className="py-16">
            <h2 className="text-2xl font-bold mb-12">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* D_Arena Project */}
              <a
                href="https://d-arena.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block group border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors"
              >
                <div className="aspect-video flex items-center justify-center">
                  <img
                    src={d_arena_img}
                    alt="D_Arena"
                    className="h-full w-full object-cover grayscale hover:grayscale-0 duration-300 ease-in"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-blue-400 transition-colors">
                    D_Arena
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Web3 gaming platform where players stake assets to compete
                    in real-time games. Built with React, Node.js, Express, and
                    Socket.IO; integrated blockchain features for asset
                    interaction.
                  </p>
                </div>
              </a>

              {/* EchoGear Project */}
              <a
                href="https://fizokor.github.io/Echo-Gear/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors"
              >
                <div className="aspect-video flex items-center justify-center">
                  <img
                    src={echogear_img}
                    alt="echoGear"
                    className="h-full w-full object-cover grayscale hover:grayscale-0 duration-300 ease-in"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-blue-400 transition-colors">
                    Echo Gear
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    An e-commerce website focused on selling high-quality
                    headphones, offering a wide range of options for all kinds
                    of listeners.
                  </p>
                </div>
              </a>
            </div>

            <Link
              to="/projects"
              className="inline-block px-6 py-2.5 border border-white/10 text-white font-medium rounded-md hover:border-white/20 transition-colors"
            >
              View all
            </Link>
          </section>

          {/* === Experience Section === */}
          <section id="experience" className="py-16">
            <h2 className="text-2xl font-bold mb-16 text-center">Experience</h2>

            <div className="relative">
              <div className="space-y-16">
                {experiences.map((exp) => (
                  <div
                    key={exp.title}
                    className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:-translate-y-2 duration-300 ease-in"
                  >
                    {/* Period column */}
                    <div className="md:w-[140px] md:text-right text-left pt-1 flex-shrink-0">
                      <span className="text-white/50 text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Experience card */}
                    <div className="flex-1 border border-white/10 rounded-lg p-4 md:p-6">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {exp.title}
                      </h3>
                      <p className={`${exp.color} text-sm mb-4`}>
                        {exp.company}
                      </p>

                      <div className="space-y-3 mb-6">
                        {exp.points.map((text) => (
                          <div key={text} className="flex gap-2">
                            <ChevronRight className="h-5 w-5 text-white/40 flex-shrink-0 mt-0.5" />
                            <p className="text-white/70 text-sm leading-relaxed">
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* === Contact Section === */}
          <section className="py-16 mb-20">
            <h2 className="text-2xl font-bold mb-8">Connect</h2>

            <div className="space-y-4">
              <p className="text-white/70">
                Email me at{" "}
                <a
                  href="mailto:okorfavour2000@gmail.com"
                  className="text-white underline hover:text-blue-400 transition-colors"
                >
                  okorfavour2000@gmail.com
                </a>
              </p>

              <a
                href="https://drive.google.com/file/d/11KnKC0eGMCE8vM2FqICcFTiGnPZ1f-8X/view?usp=sharing"
                className="inline-block text-white underline hover:text-blue-400 transition-colors"
              >
                View Resume
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
