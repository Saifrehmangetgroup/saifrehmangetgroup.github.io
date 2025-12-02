import React from "react";
import { motion } from "framer-motion";

function About() {
  const highlights = [
    { label: "Backend Experience", value: "6+ Years" },
    { label: "Systems Scaled", value: "1M+ Users" },
    { label: "Cloud Deployments", value: "AWS / DO / GCP" },
    { label: "Production Platforms", value: "20+" },
  ];

  const coreSkills = [
    { skill: "Laravel / PHP — Advanced", level: 95 },
    { skill: "API Architecture & Authentication", level: 90 },
    { skill: "MySQL / Query Optimization", level: 90 },
    { skill: "Redis / Queues / Caching", level: 85 },
    { skill: "Microservices Architecture", level: 85 },
    { skill: "DevOps / CI-CD / Linux", level: 80 },
    { skill: "Node.js / Express", level: 70 },
  ];

  const services = [
    "Scalable API Development",
    "Microservices Architecture",
    "Cloud Hosting & Deployment",
    "Database Optimization",
    "Backend Security & Auth",
    "System Performance & Load Handling",
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
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am a Senior Backend Engineer focused on building scalable, secure, and
              high-performance backend infrastructures. I specialize in Laravel, PHP,
              MySQL/PostgreSQL, Redis, and system architecture — with proven experience
              powering applications serving over
              <span className="font-semibold text-blue-600"> 1 million users</span>
              in real-world production environments.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">What I Do</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I design backend systems with a deep emphasis on performance, distributed
              architectures, API security, and database optimization. I handle full-cycle
              backend engineering — from system design, implementation, cloud deployment,
              and production monitoring to scaling.
            </p>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center border rounded-lg py-3 shadow-sm bg-white hover:shadow-md transition"
                >
                  <span className="text-blue-600 font-medium text-center text-sm">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
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
                    <p className="text-2xl font-bold text-blue-600">
                      {item.value}
                    </p>
                    <p className="text-gray-600 text-sm font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Core Backend Skills
              </h3>
              {coreSkills.map((skill, i) => (
                <div key={i} className="mb-5">
                  <p className="text-gray-700 mb-1 font-medium">{skill.skill}</p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-blue-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
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
