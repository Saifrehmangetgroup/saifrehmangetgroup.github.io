import React, { useState, useContext, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled
        ? "py-4 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 shadow-2xl"
        : "py-8 bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-gray-900 dark:text-white">

        {/* Logo */}
        <a href="#hero" className="relative group">
          <h1 className="text-xl font-black tracking-tighter uppercase flex items-center gap-1">
            Saif <span className="text-blue-600 font-black">Architecture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block shadow-[0_0_8px_#1E6FFF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          {["Home", "About", "Skills", "Projects", "Career", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
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
          <ul className="flex flex-col items-center space-y-6 py-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            {["Home", "About", "Skills", "Projects", "Career", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                  {item}
                </a>
              </li>
            ))}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-50 dark:border-white/5 w-full justify-center">
              <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
                {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
              </button>
              <a href="https://github.com/Saifrehmangetgroup" target="_blank" rel="noreferrer"><FaGithub size={18} /></a>
              <a href="https://www.linkedin.com/in/muhammad-saif-urrehman" target="_blank" rel="noreferrer"><FaLinkedin size={18} /></a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
    <span className="text-lg">{icon}</span>
  </a>
);

export default Navbar;
