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
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="mesh-bg" />
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Intro */}
        <div className="text-center md:text-left">
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
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-7xl font-extrabold mb-4 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <br />
            <span className="text-gradient">Saif Ur Rehman</span>
          </motion.h2>

          <motion.div
            className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 flex flex-wrap gap-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>Senior Backend Architect</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 dark:text-blue-400">Laravel Expert</span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I specialize in building <span className="text-gray-900 dark:text-white font-medium italic underline decoration-blue-500/30 underline-offset-4">scalable, high-performance systems</span> that power millions of users. My focus is on robust API architecture, security, and cloud-native solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-blue-500/20 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
            >
              <FaDownload className="text-sm" /> Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative rings */}
          <div className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-4 border-[1px] border-indigo-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl rotate-6 overflow-hidden shadow-2xl group hover:rotate-0 transition-all duration-500 border-4 border-white dark:border-gray-800">
            <div className="absolute inset-0 bg-blue-500/10 group-hover:opacity-0 transition-opacity z-10" />
            <img
              src={profileImg}
              alt="Saif Ur Rehman"
              className="w-full h-full object-cover -rotate-6 group-hover:rotate-0 transition-all duration-500 scale-110"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-2xl shadow-xl">
            <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">6+</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

