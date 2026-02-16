import React, { useState, useContext } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="nav-blur fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-extrabold tracking-tighter text-gray-900 dark:text-white group cursor-default">
          M. Saif <span className="text-blue-600 dark:text-blue-400 group-hover:text-indigo-500 transition-colors">Ur Rehman</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          <li><a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Career</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-all shadow-sm"
          >
            {theme === "light" ? <FaMoon className="w-4 h-4" /> : <FaSun className="w-4 h-4" />}
          </button>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />

          <div className="flex items-center space-x-4">
            <a href="https://github.com/Saifrehmangetgroup" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-saif-urrehman" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white text-xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#030712] border-b border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col items-center space-y-6 py-10 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Career</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-100 dark:border-gray-800 w-full justify-center">
              <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
                {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
              </button>
              <a href="https://github.com/Saifrehmangetgroup" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/muhammad-saif-urrehman" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
