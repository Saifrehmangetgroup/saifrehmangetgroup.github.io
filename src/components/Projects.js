import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Raabta — National Scale Mobile Platform",
      subtitle: "Official PTI Application (1M+ Users)",
      description: "Engineered the backend infrastructure serving over 1M+ users, including secure APIs, authentication, and AWS scaling optimizations for nationwide uptime.",
      impact: "Maintained 99.9% uptime during high-traffic political campaigns.",
      tech: ["Laravel", "MySQL", "AWS", "Redis", "Queues"],
      link: "https://ptiraabta.pk",
      image: "/ptiraabta.png",
      tag: "Government",
      featured: true
    },
    {
      title: "Linkon.social — Private Social Platform",
      subtitle: "Media & Messaging System",
      description: "Built the backend services and admin architecture for a social platform, including private messaging, media storage, and role-based moderation with optimized routing.",
      impact: "Improved API response time by 35%.",
      tech: ["CodeIgniter 4", "MySQL", "REST APIs"],
      link: "https://linkon.social",
      image: "/linkon.png",
      tag: "Social Media"
    },
    {
      title: "Ingage.gg — Esports Tournament Platform",
      subtitle: "Real-Time Competition Management",
      description: "Built tournament management APIs supporting live match tracking, user authentication, and scalable game workflows for competitive gaming events.",
      impact: "Enabled simultaneous tournaments with thousands of participants.",
      tech: ["Laravel", "MySQL", "Web APIs"],
      link: "https://ingage.gg",
      image: "/ingage.png",
      tag: "Gaming"
    },
    {
      title: "Hiphop — Short Video Platform",
      subtitle: "High-Volume Media Streaming",
      description: "Designed and optimized a TikTok-style media pipeline including video processing, feed ranking algorithms, and low-latency streaming infrastructure.",
      impact: "Reduced media load times by 40%.",
      tech: ["Laravel", "MySQL", "Media Streaming"],
      link: "https://hiphop.socioon.com",
      image: "/hiphop.png",
      tag: "Entertainment"
    },
    {
      title: "Club92 — Live Audio Platform",
      subtitle: "Real-Time Voice Communication",
      description: "Architected a live audio streaming backend with WebRTC integration, channel management, and role-based participation for interactive sessions.",
      impact: "Supported thousands of concurrent listeners.",
      tech: ["Laravel", "MySQL", "WebRTC", "Redis"],
      link: "https://club92.socioon.com",
      image: "/club92.png",
      tag: "Streaming"
    },
    {
      title: "Jobson — Career Portal",
      description: "Engineered a comprehensive job portal with advanced search, applicant tracking, and recruiter dashboards using Laravel and MySQL.",
      tech: ["Laravel", "MySQL", "ATS"],
      link: "https://jobson.pk",
      image: "/jobson.png",
      tag: "Recruitment"
    },
    {
      title: "Gtcree — E-Commerce Platform",
      subtitle: "High-Performance Online Store",
      description: "Developed a full-featured e-commerce backend with inventory management, secure checkout, role-based access, and optimized product search.",
      impact: "Increased conversion rate through faster checkout.",
      tech: ["Laravel", "MySQL", "E-commerce", "Caching"],
      link: "https://gtcree.com",
      image: "/gtcree.png",
      tag: "E-commerce"
    },
    {
      title: "Bracktix — Tournament Management",
      subtitle: "Competitive Bracketing Engine",
      description: "Implemented scalable tournament APIs with advanced bracket logic, authentication layers, and real-time match updates.",
      impact: "Reduced system errors by 50% during peak events.",
      tech: ["Laravel", "Redis", "MySQL", "Sanctum"],
      link: "https://bracktix.sadacode.com",
      image: "/bracktix.png",
      tag: "Gaming"
    }
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
              A selection of production systems I’ve designed, scaled, and maintained for high-traffic platforms and growing businesses.
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
              className={`group relative flex flex-col glass-card rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 ${proj.featured ? 'ring-2 ring-blue-500/20' : ''}`}
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
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 shadow-xl">
                    {proj.tag}
                  </span>
                  {proj.featured && (
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  {proj.subtitle && (
                    <p className="text-xs font-bold text-blue-500/80 dark:text-blue-400/80 uppercase tracking-widest">{proj.subtitle}</p>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {proj.description}
                </p>

                {proj.impact && (
                  <p className="text-[11px] text-green-600 dark:text-green-400 font-bold mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> {proj.impact}
                  </p>
                )}

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
