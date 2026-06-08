import React from "react";
import { motion } from "framer-motion";
import profileImg from "../components/profile2.png";
import { FaDownload, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-visible section-padding"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="mesh-bg" />
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT SIDE: Content */}
        <div className="text-center md:text-left order-2 md:order-1">

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-800/50 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
              Available for new projects
            </span>
          </motion.div>

          {/* MAIN HEADLINE */}
          <motion.h1
            className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I build <span className="text-blue-600">fast</span>, modern systems that drive growth 🚀
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 flex items-center justify-center md:justify-start gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm <span className="text-gradient">Muhammad Saif Ur Rehman</span>
          </motion.h2>

          {/* ROLE & DESCRIPTION */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed opacity-90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Backend Architect & Full-Stack Developer specializing in high-performance Laravel & Node.js systems that scale with your business.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-2xl font-extrabold shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/30 text-gray-800 dark:text-white px-10 py-5 rounded-2xl font-extrabold border border-gray-200 dark:border-white/10 hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 backdrop-blur-md"
            >
              <FaDownload className="text-blue-500" /> Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Image */}
        <motion.div
          className="relative flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Circular Decoration */}
          <div className="absolute inset-0 border-[1.5px] border-blue-500/10 rounded-full animate-spin-slow scale-110" />
          <div className="absolute inset-4 border-[1.5px] border-indigo-500/5 rounded-full animate-spin-reverse scale-110" />

          <div className="relative group p-4 sm:p-6">
            {/* Soft Blue Glow behind image */}
            <div className="absolute inset-0 bg-blue-600/5 rounded-[4rem] blur-[80px] group-hover:bg-blue-600/10 transition-all duration-1000" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border-[6px] border-white dark:border-gray-900/80 group-hover:border-blue-500/20 transition-all duration-500">
              <img
                src={profileImg}
                alt="Muhammad Saif Ur Rehman"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Experience Floating Badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 active:scale-95 transition-transform"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-2xl sm:text-3xl font-black text-blue-600">6+</p>
              <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mt-1">Years Pro</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;