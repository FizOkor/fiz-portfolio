import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#151517]/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 py-6">
        <div className="border border-white/10 rounded-full bg-[#151517]">
          <div className="px-4 py-2.5 flex items-center justify-between">
            <Link
              to="/"
              className="text-sm font-bold hover:opacity-70 transition-opacity"
            >
              FO
            </Link>

            <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6">
              <Link
                to="/"
                className={`text-base hover:opacity-70 transition-opacity ${
                  pathname === "/" ? "text-white" : "text-white/60"
                }`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`text-base hover:opacity-70 transition-opacity ${
                  pathname === "/projects" ? "text-white" : "text-white/60"
                }`}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className={`text-base hover:opacity-70 transition-opacity ${
                  pathname === "/about" ? "text-white" : "text-white/60"
                }`}
              >
                About
              </Link>
            </nav>

            <button
              onClick={toggleTheme}
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5 text-black" />
              ) : (
                <Moon className="h-3.5 w-3.5 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
