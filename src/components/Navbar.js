import React, { useState, useContext } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Muhammad Saif</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          <li><a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Resume Button + Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
          >
            {theme === "light" ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Resume
          </a>
          <a href="https://github.com/Saifrehmangetgroup" target="_blank" rel="noreferrer">
            <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-saif-urrehman" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
          </a>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 dark:text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 dark:text-gray-300 font-medium">
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Resume
              </a>
            </li>
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {theme === "light" ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
            </button>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
