import React from "react";
import { motion } from "framer-motion";

function About() {

  const highlights = [
    { label: "Years of Experience", value: "6+" },
    { label: "Users Supported", value: "1M+" },
    { label: "Cloud Platforms", value: "AWS • DO • GCP" },
    { label: "Projects Delivered", value: "20+" },
  ];

  const coreSkills = [
    { skill: "Laravel & PHP Architecture", level: 95 },
    { skill: "REST APIs & Authentication Systems", level: 92 },
    { skill: "Database Design & Optimization", level: 90 },
    { skill: "Redis, Queues & Caching", level: 88 },
    { skill: "Scalable System Architecture", level: 85 },
    { skill: "DevOps, CI/CD & Linux Servers", level: 82 },
    { skill: "Node.js & Microservices", level: 75 },
  ];

  const services = [
    "High-Performance API Development",
    "SaaS & Multi-Tenant Systems",
    "Secure Payment Integrations",
    "Cloud Infrastructure & Deployment",
    "Database Optimization",
    "System Scaling & Monitoring",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-2 gap-14 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >

          {/* Left */}
          <div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Professional Summary
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I’m a Senior Backend Engineer specializing in building secure, scalable,
              and high-availability systems for startups and growing businesses.
              My expertise lies in Laravel-based architectures, cloud infrastructure,
              and performance-driven backend design.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Over the past 6+ years, I’ve helped companies launch and scale digital
              products serving more than
              <span className="font-semibold text-blue-600 dark:text-blue-400"> 1 million+ users </span>
              — ensuring reliability, security, and long-term maintainability.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              How I Add Value
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I approach backend development from a business-first perspective.
              My focus is not just writing code, but designing systems that reduce
              operational costs, prevent downtime, and scale smoothly as your
              product grows.
            </p>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center text-center border rounded-lg py-3 px-2 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition font-semibold"
            >
              📄 Download Resume
            </a>

          </div>

          {/* Right */}
          <div className="space-y-10">

            {/* Highlights */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-5">
                Experience Highlights
              </h3>

              <div className="grid grid-cols-2 gap-6 text-center">
                {highlights.map((item, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {item.value}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-5">
                Core Technical Expertise
              </h3>

              {coreSkills.map((skill, i) => (
                <div key={i} className="mb-5">

                  <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium">
                    {skill.skill}
                  </p>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-blue-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                </div>
              ))}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
