import { MapPin } from "lucide-react";
import avatar from './assets/fizz0_avatar.png'

export default function About() {
  return (
    <div className="min-h-screen bg-[#151517]">
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <main className="max-w-4xl mx-auto py-16">
          <section className="mb-20">
            <h1 className="text-4xl font-bold mb-12">About Me</h1>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6">
                  I <span className="text-red-500">❤️</span> to build things
                </h2>

                <p className="text-white/70 leading-relaxed mb-6">
                  I am a full-stack web developer with a strong foundation in
                  modern web technologies and a growing focus on Web3. With
                  experience in building responsive, user-friendly applications,
                  I specialize in crafting web solutions that prioritize
                  performance and user experience. I'm passionate about
                  blockchain technologies and continuously advancing my skills
                  to deliver innovative applications.
                </p>

                <a
                  href="https://drive.google.com/file/d/11KnKC0eGMCE8vM2FqICcFTiGnPZ1f-8X/view?usp=sharing"
                  className="inline-block text-white underline hover:text-blue-400 transition-colors"
                >
                  View Resume
                </a>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-48 h-48 rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 overflow-hidden">
                  <img src={avatar} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Details Sidebar */}
            <div className="md:col-span-1">
              <div className="border border-white/10 rounded-lg p-6 space-y-6">
                <h3 className="text-xl font-bold mb-4">Details</h3>

                <div>
                  <p className="text-white/50 text-sm mb-1">Experience</p>
                  <p className="text-white font-semibold">3+ years</p>
                </div>

                <div>
                  <p className="text-white/50 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Port Harcourt, Nigeria
                  </p>
                </div>

                <div>
                  <p className="text-white/50 text-sm mb-1">Email</p>
                  <a
                    href="mailto:okorfavour2000@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors break-all"
                  >
                    okorfavour2000@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-white/50 text-sm mb-1">GitHub</p>
                  <a
                    href="https://github.com/FizOkor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    github.com/FizOkor
                  </a>
                </div>

                <div>
                  <p className="text-white/50 text-sm mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/favour-okor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    favour-okor
                  </a>
                </div>
              </div>

              {/* Stack Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React.js",
                    "Redux",
                    "Bootstrap",
                    "jQuery",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Socket.IO",
                    "Git/GitHub",
                    "Python",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-8">Experience</h3>

              <div className="space-y-10">
                {[
                  {
                    role: "Web Developer (Freelance/Contract)",
                    org: "Freelance",
                    date: "Jan 2022 - Present",
                    color: "from-blue-600 to-purple-600",
                    short: "F",
                    points: [
                      "Built and optimized websites for performance, scalability, and cross-browser compatibility",
                      "Improved page load speed by up to 40% on client sites",
                      "Delivered responsive, user-friendly designs aligned with client needs",
                    ],
                  },
                  {
                    role: "Instructor – Python & Data Science",
                    org: "C.I.T.E",
                    date: "Aug 2022 - Dec 2022",
                    color: "from-green-600 to-teal-600",
                    short: "CI",
                    points: [
                      "Taught Python and data science concepts (Pandas, NumPy, Matplotlib, Scikit-learn)",
                      "Guided students through hands-on projects, fostering problem-solving and collaboration",
                    ],
                  },
                  {
                    role: "Data Science Intern",
                    org: "C.I.T.E",
                    date: "Jun 2021 - Dec 2021",
                    color: "from-orange-600 to-red-600",
                    short: "CI",
                    points: [
                      "Applied Python for scripting, automation, and data handling",
                      "Analyzed datasets using Pandas/NumPy; created insights and visualizations in Excel",
                    ],
                  },
                ].map(({ role, org, date, points }) => (
                  <div key={role}>
                    <div className="flex gap-4 mb-4">
                      
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg">
                          {role}
                        </h4>
                        <p className="text-white/60">{org}</p>
                      </div>
                    </div>
                    <p className="text-white/40 text-sm mb-3">{date}</p>
                    <ul className="text-white/60 text-sm leading-relaxed space-y-2 ml-16">
                      {points.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
