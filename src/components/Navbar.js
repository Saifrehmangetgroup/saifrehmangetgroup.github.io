import React, { useState, useContext, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const NAV_ITEMS = [
  { label: "Home",     id: "hero"       },
  { label: "About",    id: "about"      },
  { label: "Skills",   id: "skills"     },
  { label: "Projects", id: "projects"   },
  { label: "Career",   id: "experience" },
  { label: "Contact",  id: "contact"    },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-10% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-white/90 dark:bg-[#030712]/90 backdrop-blur-xl border-b border-transparent shadow-[0_1px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
          : "py-8 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-gray-900 dark:text-white">

        {/* Logo */}
        <a href="#hero" className="relative group">
          <h1 className="text-xl font-black tracking-tighter uppercase flex items-center gap-1">
            Saif <span className="text-blue-600 font-black">Rehman</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block shadow-[0_0_8px_#1E6FFF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em]">
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative py-2 transition-colors duration-200 group ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-all border border-gray-100 dark:border-white/5"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon size={14} /> : <FaSun size={14} />}
          </button>

          <div className="h-6 w-px bg-gray-200 dark:bg-white/10" />

          <div className="flex items-center space-x-4">
            <SocialIcon href="https://github.com/Saifrehmangetgroup" icon={<FaGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/muhammad-saif-urrehman" icon={<FaLinkedin />} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-white transition-all active:scale-95"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#030712] border-b border-gray-100 dark:border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col items-center space-y-6 py-12 text-[10px] font-black uppercase tracking-[0.2em]">
            {NAV_ITEMS.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-50 dark:border-white/5 w-full justify-center">
              <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
                {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
              </button>
              <a href="https://github.com/Saifrehmangetgroup" target="_blank" rel="noreferrer">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-saif-urrehman" target="_blank" rel="noreferrer">
                <FaLinkedin size={18} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    <span className="text-lg">{icon}</span>
  </a>
);

export default Navbar;
