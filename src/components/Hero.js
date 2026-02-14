import React from "react";
import { motion } from "framer-motion";
import profileImg from "../components/profile2.png";
import { FaDownload, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
<<<<<<< HEAD
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
=======
      className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">

          {/* Availability Badge */}
          <motion.span
            className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-sm font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            ✅ Available for Freelance & Remote Work
          </motion.span>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Muhammad Saif <br className="hidden sm:block" /> Ur Rehman
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Senior Laravel Backend Engineer
          </motion.h2>

          {/* Value Proposition */}
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl leading-relaxed"
>>>>>>> 23e7c95b45df73c10c6294bd4d6ba032c55c6187
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
<<<<<<< HEAD
            I specialize in building <span className="text-gray-900 dark:text-white font-medium italic underline decoration-blue-500/30 underline-offset-4">scalable, high-performance systems</span> that power millions of users. My focus is on robust API architecture, security, and cloud-native solutions.
=======
            I help startups and businesses build fast, secure, and scalable backend
            systems with modern APIs, payment integrations, and cloud-ready
            infrastructure — so your product runs reliably at scale.
>>>>>>> 23e7c95b45df73c10c6294bd4d6ba032c55c6187
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">Laravel</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">REST APIs</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">Stripe</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">Redis</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">AWS</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">MySQL</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
<<<<<<< HEAD
              href="#projects"
              className="group relative inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-blue-500/20 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition font-semibold"
            >
              🚀 Hire Me
            </a>

            <a
              href="#projects"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition font-semibold"
            >
              View Projects
>>>>>>> 23e7c95b45df73c10c6294bd4d6ba032c55c6187
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
<<<<<<< HEAD
              className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
            >
              <FaDownload className="text-sm" /> Resume
=======
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition font-medium"
            >
              📄 Resume
>>>>>>> 23e7c95b45df73c10c6294bd4d6ba032c55c6187
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
<<<<<<< HEAD
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
=======
          className="flex-1 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-400 blur-2xl opacity-20"></div>

            {/* Image */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-blue-500 shadow-2xl overflow-hidden bg-white">
              <img
                src={profileImg}
                alt="Muhammad Saif Ur Rehman"
                className="w-full h-full object-cover"
              />
            </div>

>>>>>>> 23e7c95b45df73c10c6294bd4d6ba032c55c6187
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

