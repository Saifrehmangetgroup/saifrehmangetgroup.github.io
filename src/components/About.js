import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaServer, FaCode, FaShieldAlt } from "react-icons/fa";

function About() {
  const highlights = [
    { label: "Years Experience", value: "6+", icon: <FaCode /> },
    { label: "Systems Scaled", value: "1M+", icon: <FaRocket /> },
    { label: "Cloud Platforms", value: "AWS • DO • GCP", icon: <FaServer /> },
    { label: "Projects Done", value: "20+", icon: <FaShieldAlt /> },
  ];

  const coreSkills = [
    { skill: "Laravel & PHP Architecture", level: 95 },
    { skill: "REST APIs & Auth Systems", level: 92 },
    { skill: "Database Design & Optimization", level: 90 },
    { skill: "Redis, Queues & Caching", level: 88 },
    { skill: "Scalable System Architecture", level: 85 },
    { skill: "DevOps, CI/CD & Linux", level: 82 },
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
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About <span className="text-gradient">Professional Journey</span>
          </motion.h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Bio (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-2xl" />

              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">01</span>
                Engineer's Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                I am a <span className="text-gray-900 dark:text-white font-semibold">Senior Backend Engineer</span> dedicated to crafting high-performance, resilient infrastructures. With a focus on <span className="text-blue-600 dark:text-blue-400 font-medium italic">distributed systems</span> and <span className="text-blue-600 dark:text-blue-400 font-medium italic">secure API design</span>, I help businesses scale their digital footprint.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                Over the past 6+ years, I’ve helped companies launch and scale digital products serving more than <span className="font-semibold text-blue-600 dark:text-blue-400">1 million+ users</span> — ensuring reliability, security, and long-term maintainability.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                How I Add Value
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I approach backend development from a business-first perspective. My focus is not just writing code, but designing systems that reduce operational costs, prevent downtime, and scale smoothly as your product grows.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="glass-card p-4 rounded-2xl hover:border-blue-500/30 transition-colors group cursor-default"
                >
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                    {service}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-700 hover:shadow-blue-500/20 transition-all font-bold"
              >
                📄 Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Side: Stats & Skills (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl text-center group hover:border-blue-500/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4 text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className={`font-bold text-gray-900 dark:text-white leading-tight ${item.value.length > 10 ? 'text-sm mb-2' : 'text-2xl mb-1'}`}>
                    {item.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Technical Proficiency Redesign */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 opacity-50" />
              <h3 className="text-xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Technical Power
              </h3>
              <div className="space-y-8">
                {coreSkills.map((skill, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase tracking-tighter text-gray-400 dark:text-gray-500">Expertise Level</span>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{skill.skill}</p>
                      </div>
                      <span className="text-sm font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-1 rounded-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
