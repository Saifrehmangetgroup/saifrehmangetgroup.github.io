import React from "react";
import { motion } from "framer-motion";
import profileImg from "../components/profile2.png"; // ✅ add your profile image in src/assets

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto "
    >
      {/* Left Side: Intro */}
      <div className="flex-1 text-center md:text-left">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi 👋<br />
          My Name is <span className="text-blue-600">Muhammad Saif Ur Rehman</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-6 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Transforming ideas into elegant <span className="font-semibold">Web & Mobile</span> experiences.
          I specialize in scalable backend solutions with Laravel, PHP & MySQL.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#projects"
            className="bg-blue-600 text-white px-3 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-3 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center border border-gray-400 text-gray-700 px-3 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>

      {/* Right Side: Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="w-80 h-80 rounded-full border-4 border-blue-400 shadow-lg overflow-hidden">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
