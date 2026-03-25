import React from "react";
import { motion } from "framer-motion";
import profileImg from "../components/profile2.png";
import { FaDownload, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="mesh-bg" />
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Available for new projects
            </span>
          </motion.div>

          {/* MAIN HEADLINE (CLIENT FOCUSED) */}
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I build fast, modern websites that help businesses grow 🚀
          </motion.h1>

          {/* NAME (secondary, not primary) */}
          <motion.h2
            className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm <span className="text-gradient">Muhammad Saif Ur Rehman</span>
          </motion.h2>

          {/* ROLE */}
          <motion.div
            className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Web Developer • Laravel & Node.js Specialist • API Specialist
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I help startups and small businesses build scalable, high-performance websites and backend systems that improve user experience, increase engagement, and drive real results.
          </motion.p>

          {/* TECH STACK (kept but simplified meaning) */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {["Laravel", "APIs", "AWS", "MySQL", "Performance Optimization"].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full font-bold uppercase text-[10px]"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              View My Work
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow" />
          <div className="absolute -inset-4 border border-indigo-500/10 rounded-full animate-spin-reverse" />

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <img
              src={profileImg}
              alt="Muhammad Saif Ur Rehman"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;