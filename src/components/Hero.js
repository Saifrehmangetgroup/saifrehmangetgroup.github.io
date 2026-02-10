import React from "react";
import { motion } from "framer-motion";
import profileImg from "../components/profile2.png";

function Hero() {
  return (
    <section
      id="hero"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I help startups and businesses build fast, secure, and scalable backend
            systems with modern APIs, payment integrations, and cloud-ready
            infrastructure — so your product runs reliably at scale.
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
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
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition font-medium"
            >
              📄 Resume
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
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

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
