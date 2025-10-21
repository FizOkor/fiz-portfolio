import { MapPin } from "lucide-react";
import avatar from "./assets/fizz0_avatar.png";
import { CertificationCard } from "./components/CertificationCard";

export default function About() {
  const certifications = [
    {
      initials: "SC",
      title: "Smart Contract Development",
      issuer: "FTLD",
      date: "Jun 2025",
      description:
        "Advanced certification in smart contract development and DeFi protocols, covering blockchain architecture and decentralized finance applications.",
      img_src: "/images/certificates/ftld_smart-contract_cert.jpg",
      certificateUrl: "https://www.linkedin.com/in/favour-okor/details/certifications/1755855032106/single-media-viewer/",
    },
    {
      initials: "BE",
      title: "Back End Development and APIs",
      issuer: "FreeCodeCamp",
      date: "Apr 2025",
      description:
        "Comprehensive backend development certification covering server-side programming, RESTful APIs, database design, and API security best practices.",
      img_src: "/images/certificates/fCC_backend_cert.png",
      certificateUrl: "https://www.freecodecamp.org/certification/fizelectro/back-end-development-and-apis",
    },
    {
      initials: "JS",
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "Feb 2025",
      description:
        "In-depth certification covering JavaScript fundamentals, algorithms, data structures, and problem-solving techniques for efficient code development.",
      img_src: "/images/certificates/fCC_javascript_cert.png",
      certificateUrl: "https://www.freecodecamp.org/certification/fizelectro/javascript-algorithms-and-data-structures-v8",
    },
    {
      initials: "RW",
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "Sep 2024",
      description:
        "Certification in responsive web design principles, mobile-first development, CSS Grid, Flexbox, and creating accessible web experiences across all devices.",
      img_src: "/images/certificates/fCC_web-design_cert.png",
      certificateUrl:
        "https://www.freecodecamp.org/certification/fizelectro/responsive-web-design",
    },
    {
      initials: "PD",
      title: "Python & Data Science",
      issuer:
        "Center for Information and Telecommunications Engineering (C.I.T.E)",
      date: "Sep 2022",
      description:
        "Professional certification in Python programming and data science, covering Pandas, NumPy, Matplotlib, Scikit-learn, and data analysis techniques.",
      img_src: "/images/certificates/cite_data-science_cert.png",
      certificateUrl: "https://www.linkedin.com/in/favour-okor/details/certifications/1717073708105/single-media-viewer/",
    },
  ];

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

            {/* Certifications Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-5">Certifications</h3>

              <div className="grid md:grid-cols-2 md:gap-2">
                {certifications.map((cert) => (
                  <CertificationCard key={cert.title} {...cert} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
