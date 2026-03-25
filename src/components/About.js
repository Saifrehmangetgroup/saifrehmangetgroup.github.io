import { motion } from "framer-motion";
import { FaRocket, FaServer, FaCode, FaShieldAlt } from "react-icons/fa";

function About() {
  const highlights = [
    { label: "Years Experience", value: "6+", icon: <FaCode /> },
    { label: "Projects Delivered", value: "20+", icon: <FaRocket /> },
    { label: "Cloud Platforms", value: "AWS • DO • GCP", icon: <FaServer /> },
    { label: "Reliable Solutions", value: "Secure & Scalable", icon: <FaShieldAlt /> },
  ];

  const coreSkills = [
    { skill: "Laravel & PHP Development", level: 95 },
    { skill: "REST APIs & Authentication", level: 92 },
    { skill: "Database Design & Optimization", level: 90 },
    { skill: "Caching, Queues & Performance", level: 88 },
    { skill: "Scalable Backend Systems", level: 85 },
    { skill: "Deployment & Server Management", level: 82 },
    { skill: "Node.js & Microservices", level: 75 },
  ];

  const services = [
    "Custom Web Application Development",
    "Backend Development & APIs",
    "SaaS Platform Development",
    "Secure Payment Integrations",
    "Cloud Deployment & Optimization",
    "Database Performance Improvements",
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
            About <span className="text-gradient">My Work</span>
          </motion.h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side */}
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
                <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">
                  01
                </span>
                What I Do
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                I help <span className="text-gray-900 dark:text-white font-semibold">businesses, startups, and growing brands</span> build fast, secure, and scalable web applications. My focus is on creating systems that not only work well technically, but also support real business growth.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                With over <span className="font-semibold text-blue-600 dark:text-blue-400">6 years of experience</span>, I’ve worked on backend systems, APIs, cloud deployment, and performance optimization to help digital products run smoothly, stay secure, and handle growth with confidence.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                How I Add Value
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I don’t just write code. I build solutions that improve user experience, reduce technical problems, support long-term scalability, and help businesses launch reliable digital products faster. My goal is to turn technical work into business value.
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

          {/* Right Side */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 opacity-50" />
              <h3 className="text-xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Core Expertise
              </h3>

              <div className="space-y-8">
                {coreSkills.map((skill, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase tracking-tighter text-gray-400 dark:text-gray-500">
                          Skill Level
                        </span>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                          {skill.skill}
                        </p>
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

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-6 rounded-2xl text-center hover:border-blue-500/50 transition-all group">
            <div className="text-4xl mb-3">💼</div>
            <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">6+</p>
            <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center hover:border-blue-500/50 transition-all group">
            <div className="text-4xl mb-3">🚀</div>
            <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">20+</p>
            <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400">
              Projects Delivered
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center hover:border-blue-500/50 transition-all group">
            <div className="text-4xl mb-3">☁️</div>
            <p className="text-sm font-extrabold text-blue-600 dark:text-blue-400 mb-1">AWS • DO • GCP</p>
            <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400">
              Cloud Platforms
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center hover:border-blue-500/50 transition-all group">
            <div className="text-4xl mb-3">🛡️</div>
            <p className="text-sm font-extrabold text-blue-600 dark:text-blue-400 mb-1">Secure & Scalable</p>
            <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400">
              Solutions Delivered
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;