import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-[#030712] py-20 border-t border-gray-100 dark:border-white/5 transition-colors duration-500 overflow-hidden relative">

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

                {/* Left Side: Brand */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
                        M. Saif <span className="text-blue-600">Ur Rehman</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium max-w-xs leading-relaxed">
                        Senior Backend Architect building the technical foundations for next-generation digital products.
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        &copy; {currentYear} • All rights reserved
                    </p>
                </div>

                {/* Middle: Links */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[11px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
                    <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                    <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
                </div>

                {/* Right Side: Social Grid */}
                <div className="flex items-center gap-4">
                    <SocialLink href="https://github.com/Saifrehmangetgroup" icon={<FaGithub />} />
                    <SocialLink href="https://www.linkedin.com/in/muhammad-saif-urrehman" icon={<FaLinkedin />} />
                    <SocialLink href="https://wa.me/923083152045" icon={<FaWhatsapp />} />
                    <SocialLink href="mailto:muhammadsaifrehman.6987@gmail.com" icon={<FaEnvelope />} />
                </div>
            </div>

            <div className="mt-20 text-center border-t border-gray-50 dark:border-white/5 pt-8">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
                    Engineered with Precision in <span className="text-blue-600">React</span> + <span className="text-indigo-500">Tailwind</span>
                </p>
            </div>
        </footer>
    );
}

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-white/5"
    >
        <span className="text-xl">{icon}</span>
    </a>
)

export default Footer;
