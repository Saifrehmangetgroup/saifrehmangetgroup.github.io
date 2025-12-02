import React from "react";
import { motion } from "framer-motion";
import profileImg from "../components/profile2.png";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4"
    >
      {/* Left Side: Intro */}
      <div className="flex-1 text-center md:text-left">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Muhammad Saif Ur Rehman
        </motion.h2>

        <motion.div
          className="text-gray-600 font-medium mb-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Backend Engineer • API Architect • Database Optimizer
        </motion.div>

        <motion.h3
          className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Senior Laravel & PHP Backend Engineer
        </motion.h3>

        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          I design and build high-performance backend infrastructures, scalable APIs,
          secure authentication systems, and optimized database architectures using
          Laravel, MySQL/PostgreSQL, Redis, microservices, queues, caching layers,
          and DevOps deployments across AWS, GCP & DigitalOcean.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#projects"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition font-medium"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Let’s Talk
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center border border-gray-400 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition font-medium"
          >
            📄 Download CV
          </a>
        </motion.div>
      </div>

      {/* Right Side: Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        <div className="w-80 h-80 rounded-full border-4 border-blue-500 shadow-xl overflow-hidden">
          <img
            src={profileImg}
            alt="Muhammad Saif Ur Rehman"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
