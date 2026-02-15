import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#ffffff]/60 dark:bg-gray-800/40 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image & Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4">
                    {proj.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] font-black text-white px-3 py-1 bg-white/20 backdrop-blur-md rounded-full uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Status Tags */}
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 text-[9px] font-black uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 shadow-2xl backdrop-blur-md">
                    {proj.tag}
                  </span>
                  {proj.featured && (
                    <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.15em] shadow-2xl">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 pt-10 relative">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  {proj.subtitle && (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-[2px] bg-blue-500 rounded-full" />
                      <p className="text-[10px] font-black text-blue-500/80 uppercase tracking-widest">{proj.subtitle}</p>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {proj.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700/50 pt-8 mt-auto">
                  <div className="flex -space-x-3">
                    {proj.tech.map((t, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 border-2 border-white dark:border-gray-900 flex items-center justify-center text-[8px] font-bold text-gray-500 dark:text-gray-400 uppercase cursor-default hover:z-10 hover:-translate-y-1 transition-all" title={t}>
                        {t.charAt(0)}
                      </div>
                    ))}
                  </div>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-lg active:scale-90"
                  >
                    <FaExternalLinkAlt className="text-sm" />
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
