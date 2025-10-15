export default function Footer() {
  return (
    <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="flex items-center justify-between">
          <p className="text-white/50 text-sm"><span className="text-xl">&copy;</span> {new Date().getFullYear()} Favour Okor. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="mailto:okorfavour2000@gmail.com"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/favour-okor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/fizokor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
