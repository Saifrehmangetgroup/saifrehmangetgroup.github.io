import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaRocket, FaCode, FaServer } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Raabta App",
      subtitle: "Used by 1M+ users nationwide",
      description: "Built and optimized a high-traffic backend system for a national mobile platform. Focused on performance, security, and reliability during peak usage.",
      impact: "Handled millions of users with 99.9% uptime during high-traffic events.",
      tech: ["Laravel", "MySQL", "AWS"],
      link: "https://ptiraabta.pk",
      image: "/ptiraabta.png",
      tag: "High Traffic",
      featured: true
    },
    {
      title: "HiveComms",
      subtitle: "Social Media Automation Platform",
      description: "Developed a system where users can manage and publish content across multiple social media accounts from one dashboard.",
      impact: "Simplified multi-platform content management for businesses.",
      tech: ["Node.js", "PostgreSQL", "APIs"],
      link: "https://hivecomms.app/",
      image: "/hivecomms.png",
      tag: "Automation"
    },
    {
      title: "eFleetApp",
      subtitle: "Fleet Management Platform",
      description: "Developed a comprehensive fleet management application, featuring robust backend architecture and an interactive frontend interface.",
      impact: "Streamlined fleet operations and improved overall system tracking efficiency.",
      tech: ["Laravel", "MySQL", "React JS"],
      link: "https://efleetapp.com/",
      image: "/efleetlogo.png",
      tag: "Fleet Management"
    },
    {
      title: "Linkon.social",
      subtitle: "Private Social Platform",
      description: "Built backend systems for messaging, media sharing, and user management with improved performance and scalability.",
      impact: "Improved system speed and reduced response time by 35%.",
      tech: ["CodeIgniter", "MySQL"],
      link: "https://linkon.social",
      image: "/linkon.png",
      tag: "Social"
    },
    {
      title: "Ingage.gg",
      subtitle: "Esports Platform",
      description: "Developed tournament management system with real-time updates and user tracking for competitive gaming events.",
      impact: "Supported large-scale tournaments with smooth performance.",
      tech: ["Laravel", "MySQL"],
      link: "https://ingage.gg",
      image: "/ingage.png",
      tag: "Gaming"
    },
    {
      title: "Bracktix",
      subtitle: "Tournament System",
      description: "Created tournament system with automated bracket logic and real-time updates.",
      impact: "Reduced system errors and improved reliability during peak usage.",
      tech: ["Laravel", "Redis"],
      link: "https://bracktix.sadacode.com",
      image: "/bracktix.png",
      tag: "Gaming"
    },
    
    {
      title: "Club92",
      subtitle: "Live Audio Platform",
      description: "Built real-time audio communication system with scalable backend and user role management.",
      impact: "Handled thousands of live listeners without performance issues.",
      tech: ["Laravel", "WebRTC"],
      link: "https://club92.socioon.com",
      image: "/club92.png",
      tag: "Streaming"
    },
    {
      title: "Gtcree Store",
      subtitle: "E-commerce Platform",
      description: "Developed a complete online store with product management, secure checkout, and optimized performance.",
      impact: "Improved checkout speed and increased conversions.",
      tech: ["Laravel", "E-commerce"],
      link: "https://gtcree.com",
      image: "/gtcree.png",
      tag: "E-commerce"
    },
    {
      title: "Hiphop Platform",
      subtitle: "Short Video System",
      description: "Created backend for video content delivery and optimized media performance for faster loading.",
      impact: "Reduced video load time by 40%, improving user experience.",
      tech: ["Laravel", "Streaming"],
      link: "https://hiphop.socioon.com",
      image: "/hiphop.png",
      tag: "Media"
    },
 
  ];

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.p
              className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-[11px] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Selected Case Studies
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Proven <span className="text-gradient">Solutions</span>
            </motion.h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed opacity-90">
              A deep dive into the high-performance systems I've built to help businesses scale and handle millions of real-world interactions.
            </p>
          </div>

          <motion.a
            href="https://github.com/Saifrehmangetgroup"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-600 font-extrabold uppercase tracking-widest text-xs hover:gap-4 transition-all"
            whileHover={{ x: 5 }}
          >
            Explore Repo <FaExternalLinkAlt />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard key={index} proj={proj} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ proj, index }) {
  return (
    <motion.div
      className="glass-card flex flex-col h-full group overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Image / Placeholder */}
      <div className="h-56 relative overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        {proj.image ? (
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}

        {/* Modern Placeholder */}
        <div className={`absolute inset-0 items-center justify-center bg-gradient-to-br from-blue-600/10 to-indigo-600/10 flex ${proj.image ? 'hidden' : 'flex'}`}>
          <div className="flex flex-col items-center gap-3">
            <FaCode className="text-4xl text-blue-500/40" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-500/40">Engine Prototype</span>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-blue-600 border border-blue-500/10">
            {proj.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{proj.category}</p>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {proj.title}
        </h3>
        <p className="text-sm font-bold text-blue-500/60 mb-6 uppercase tracking-wider">{proj.subtitle}</p>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 opacity-90 line-clamp-3">
          {proj.description}
        </p>

        <div className="mt-auto space-y-6">
          <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
            <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <FaRocket className="text-[8px]" /> Key Impact
            </p>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-100 leading-tight">
              {proj.impact}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {proj.tech.slice(0, 3).map((t, i) => (
                <span key={i} className="text-[8px] font-black px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-500 border border-gray-200 dark:border-white/5 uppercase">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-extrabold uppercase tracking-widest text-[10px] hover:text-blue-500 transition-colors"
            >
              Launch <FaExternalLinkAlt className="text-[9px]" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;