import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

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
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              My <span className="text-gradient">Projects</span>
            </motion.h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Here are some real-world systems I’ve built to help businesses scale, improve performance, and grow online.
            </p>
          </div>

          <a
            href="https://github.com/Saifrehmangetgroup"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-bold"
          >
            View More →
          </a>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={proj.image} alt={proj.title} className="w-full h-52 object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-sm text-blue-500 mb-2">{proj.subtitle}</p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {proj.description}
                </p>

                <p className="text-sm font-semibold text-green-600 mb-4">
                  {proj.impact}
                </p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;