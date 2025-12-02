import React from "react";
import { motion } from "framer-motion";

function About() {
  const highlights = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "10+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  const coreSkills = [
    { skill: "Laravel / PHP", level: 90 },
    { skill: "React Development", level: 85 },
    { skill: "Database & MySQL", level: 80 },
    { skill: "Front-end Development ", level: 50 },
    
  ];

  const services = [
    "Web Development",
    "API Development",
    "Server Management",
    "Problem Solving",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate software engineer dedicated to crafting exceptional
              digital experiences for both mobile and web platforms. I specialize in
              building scalable, user-friendly applications with Laravel, PHP, and
              modern frontend tools.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">What I Do</h3>
            <p className="text-gray-600 mb-6">
              I create high-performance, secure web applications using modern
              technologies. From backend architecture to frontend optimization, I
              bring ideas to life with clean code and scalable solutions.
            </p>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center border rounded-lg py-3 shadow-sm bg-white hover:shadow-md transition"
                >
                  <span className="text-blue-600 font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-3 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
            >
              📄 Download My Resume
            </a>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Experience Highlights
              </h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                {highlights.map((item, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Core Skills
              </h3>
              {coreSkills.map((skill, i) => (
                <div key={i} className="mb-4">
                  <p className="text-gray-700 mb-1">{skill.skill}</p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-blue-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                  <p className="text-sm text-gray-500">{skill.level}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
