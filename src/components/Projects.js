import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Raabta (Official PTI App)",
      description:
        "Engineered the backend infrastructure serving over 1M+ users, including secure APIs, authentication, and AWS scaling optimizations for nationwide uptime.",
      tech: ["Laravel", "MySQL", "AWS", "Redis"],
      link: "https://ptiraabta.pk",
      image: "/ptiraabta.png",
      tag: "Government"
    },
    {
      title: "Linkon.social",
      description:
        "Built the backend services and admin architecture for a social platform, including private messaging and media storage, with optimized routing.",
      tech: ["CI4", "MySQL", "REST APIs"],
      link: "https://linkon.social",
      image: "/linkon.png",
      tag: "Social Media"
    },
    {
      title: "Ingage.gg",
      description:
        "Developed tournament management APIs for real-time gaming events, including user authentication, match tracking, and scalable game logic.",
      tech: ["Laravel", "MySQL", "Web APIs"],
      link: "https://ingage.gg",
      image: "/ingage.png",
      tag: "Gaming"
    },
    {
      title: "Jobson",
      description:
        "Engineered a comprehensive job portal with advanced search, applicant tracking, and recruiter dashboards using Laravel and MySQL.",
      tech: ["Laravel", "MySQL", "ATS"],
      link: "https://jobson.pk",
      image: "/jobson.png",
      tag: "Recruitment"
    },
    {
      title: "PropertyOn",
      description:
        "Developed a real estate management system featuring property listings, lead management, and automated client notifications.",
      tech: ["Laravel", "MySQL", "Real Estate"],
      link: "https://propertyon.com",
      image: "/propertyon.png",
      tag: "Real Estate"
    },
    {
      title: "Club92",
      description:
        "Built a scalable live-audio streaming backend with WebRTC integrations, channel management, role-based participation, and real-time communication.",
      tech: ["Laravel", "WebRTC", "Redis"],
      link: "https://club92.socioon.com",
      image: "/club92.png",
      tag: "Streaming"
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A collection of systems I've architected, focusing on performance, security, and user experience at scale.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/Saifrehmangetgroup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Check more on GitHub <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col glass-card rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 shadow-xl">
                    {proj.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 uppercase tracking-tighter"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-xl text-sm font-bold hover:premium-gradient hover:text-white transition-all shadow-lg"
                  >
                    View Case Study <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a
                    href="https://github.com/Saifrehmangetgroup"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 transition-colors text-gray-600 dark:text-gray-400"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
