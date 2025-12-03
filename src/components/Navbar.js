import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-gray-800">Muhammad Saif</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Resume Button + Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Resume
          </a>
          <a href="https://github.com/Saifrehmangetgroup" target="_blank" rel="noreferrer">
            <FaGithub className="w-5 h-5 text-gray-600 hover:text-black" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-saif-urrehman" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
          </a>
         
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
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
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub className="w-5 h-5 text-gray-600 hover:text-black" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter className="w-5 h-5 text-gray-600 hover:text-blue-500" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
