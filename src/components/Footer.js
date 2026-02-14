import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Left Side: Copyright */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Muhammad Saif Ur Rehman
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        &copy; {currentYear} • Senior Backend Engineer. All rights reserved.
                    </p>
                </div>

                {/* Middle: Links */}
                <div className="flex space-x-6 mb-6 md:mb-0 text-gray-600 dark:text-gray-400 font-medium text-sm">
                    <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
                    <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
                    <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
                </div>

                {/* Right Side: Social Icons */}
                <div className="flex space-x-5">
                    <a
                        href="https://github.com/Saifrehmangetgroup"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-black dark:hover:text-white transition text-xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhammad-saif-urrehman"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition text-xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://wa.me/923083152045"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-green-500 transition text-xl"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="mailto:muhammadsaifrehman.6987@gmail.com"
                        className="text-gray-500 hover:text-blue-400 transition text-xl"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center border-t border-gray-100 dark:border-gray-800 pt-6">
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    Built with <span className="text-blue-500">React</span>, <span className="text-blue-400">Tailwind</span> & <span className="text-purple-500">Framer Motion</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
