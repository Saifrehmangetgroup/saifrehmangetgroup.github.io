import { motion } from "framer-motion";
import { FaRocket, FaServer, FaCode, FaShieldAlt, FaBolt, FaTerminal, FaDownload } from "react-icons/fa";

function About() {
  const highlights = [
    { label: "Years Experience", value: "6+", icon: <FaCode className="text-blue-500" /> },
    { label: "Projects Delivered", value: "20+", icon: <FaRocket className="text-indigo-500" /> },
    { label: "Cloud Platforms", value: "AWS • DO • GCP", icon: <FaServer className="text-green-500" /> },
    { label: "High Performance", value: "Secure & Scalable", icon: <FaShieldAlt className="text-red-500" /> },
  ];

  const coreSkills = [
    { skill: "Laravel & PHP Architecture", level: 95 },
    { skill: "REST APIs & Distributed Engines", level: 92 },
    { skill: "Database Optimization & Design", level: 90 },
    { skill: "Node.js & Microservices", level: 75 },
    { skill: "Docker & Cloud Infrastructure", level: 82 },
  ];

  const valueProps = [
    { icon: <FaBolt />, title: "Logic First", text: "Systems designed for zero downtime and sub-second latency." },
    { icon: <FaShieldAlt />, title: "Secure Scale", text: "Enterprise-grade safety for your users and data assets." },
    { icon: <FaTerminal />, title: "Clean Engineering", text: "Maintainable, documented, and professional grade code." }
  ];

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p
            className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-[11px] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Digital Architect
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Engineering <span className="text-gradient">Business Growth</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full opacity-50" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Editorial Content */}
          <motion.div
            className="lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {highlights.map((stat, i) => (
              <div key={i} className="glass-card p-8 text-center flex flex-col items-center group">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400 group-hover:text-blue-500 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Core Content Grid */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              className="glass-card p-10 relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />

              <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-gray-800 dark:text-white">
                <span className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-blue-600/20">
                  01
                </span>
                The Mission
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 opacity-90">
                I help <span className="text-gray-900 dark:text-white font-bold">startups and scaling brands</span> build highly resilient backend systems. With 6+ years of expertise, I bridge the gap between business goals and technical reality.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                {valueProps.map((val, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 group hover:border-blue-500/30 transition-all">
                    <div className="text-xl text-blue-600 mb-3 group-hover:scale-110 transition-transform">{val.icon}</div>
                    <p className="text-xs font-black uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-1">{val.title}</p>
                    <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{val.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all font-bold tracking-wide uppercase text-xs"
              >
                Launch Resume <FaDownload className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side: Skill Progress */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-600 to-indigo-600 opacity-30" />
              <h3 className="text-xl font-bold mb-10 text-gray-800 dark:text-white flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_#1E6FFF] animate-pulse" />
                Core Capability
              </h3>

              <div className="space-y-10">
                {coreSkills.map((skill, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                          Logic Precision
                        </span>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
                          {skill.skill}
                        </p>
                      </div>
                      <span className="text-[11px] font-black text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800/80 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_20px_rgba(30,111,255,0.3)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-blue-600/5 border border-blue-600/10 text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600/60 leading-relaxed italic">
                  "Building architectural excellence into every deployment."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;