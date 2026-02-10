import React from "react";
import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Raabta — National Scale Mobile Platform",
      subtitle: "Official PTI Application (1M+ Users)",
      description:
        "Led the backend architecture for a nationwide mobile platform serving over one million users. Designed secure APIs, authentication systems, and scalable cloud infrastructure to ensure high availability and consistent performance under peak traffic.",
      impact: "Maintained 99.9% uptime during high-traffic political campaigns.",
      tech: ["Laravel", "MySQL", "AWS", "Redis", "Queues"],
      link: "https://ptiraabta.pk",
      image: "/ptiraabta.png",
      featured: true,
    },

    {
      title: "Linkon.social — Private Social Platform",
      subtitle: "Media & Messaging System",
      description:
        "Developed backend services and administrative systems for a private social network, including messaging, media storage, and role-based moderation with optimized database indexing.",
      impact: "Improved API response time by 35%.",
      tech: ["CodeIgniter 4", "MySQL", "REST APIs"],
      link: "https://linkon.social",
      image: "/linkon.png",
    },

    {
      title: "Ingage.gg — Esports Tournament Platform",
      subtitle: "Real-Time Competition Management",
      description:
        "Built tournament management APIs supporting live match tracking, user authentication, and scalable game workflows for competitive gaming events.",
      impact: "Enabled simultaneous tournaments with thousands of participants.",
      tech: ["Laravel", "MySQL", "Web APIs"],
      link: "https://ingage.gg",
      image: "/ingage.png",
    },

    {
      title: "Hiphop — Short Video Platform",
      subtitle: "High-Volume Media Streaming",
      description:
        "Designed and optimized a TikTok-style media pipeline including video processing, feed ranking algorithms, and low-latency streaming infrastructure.",
      impact: "Reduced media load times by 40%.",
      tech: ["Laravel", "MySQL", "Media Streaming"],
      link: "https://hiphop.socioon.com",
      image: "/hiphop.png",
    },

    {
      title: "Club92 — Live Audio Platform",
      subtitle: "Real-Time Voice Communication",
      description:
        "Architected a live audio streaming backend with WebRTC integration, channel management, and role-based participation for interactive sessions.",
      impact: "Supported thousands of concurrent listeners.",
      tech: ["Laravel", "MySQL", "WebRTC", "Redis"],
      link: "https://club92.socioon.com",
      image: "/club92.png",
    },

    {
      title: "ShaadiAbroad — Global Event System",
      subtitle: "Large-Scale Event Management",
      description:
        "Built a global event and booking management platform with complex database operations, compliance-focused architecture, and performance-driven design.",
      impact: "Handled multi-region event operations reliably.",
      tech: ["Laravel", "PostgreSQL", "AWS"],
      link: "https://shaadiabroad.com",
      image: "/shaadiabroad.png",
    },

    {
      title: "Gtcree — E-Commerce Platform",
      subtitle: "High-Performance Online Store",
      description:
        "Developed a full-featured e-commerce backend with inventory management, secure checkout, role-based access, and optimized product search.",
      impact: "Increased conversion rate through faster checkout.",
      tech: ["Laravel", "MySQL", "E-commerce", "Caching"],
      link: "https://gtcree.com",
      image: "/gtcree.png",
    },

    {
      title: "Bracktix — Tournament Management System",
      subtitle: "Competitive Bracketing Engine",
      description:
        "Implemented scalable tournament APIs with advanced bracket logic, authentication layers, and real-time match updates.",
      impact: "Reduced system errors by 50% during peak events.",
      tech: ["Laravel", "Redis", "MySQL", "Sanctum"],
      link: "https://bracktix.sadacode.com",
      image: "/bracktix.png",
    },
  ];


  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Selected <span className="text-blue-600 dark:text-blue-400">Case Studies</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A selection of production systems I’ve designed, scaled, and maintained
          for high-traffic platforms and growing businesses.
        </motion.p>


        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((proj, index) => (

            <motion.div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-xl border shadow-md overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-xl
                ${proj.featured
                  ? "border-blue-400 dark:border-blue-600 ring-1 ring-blue-200 dark:ring-blue-800"
                  : "border-gray-200 dark:border-gray-700"
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >

              {/* Featured Badge */}
              {proj.featured && (
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Featured
                </span>
              )}

              {/* Image */}
              {proj.image && (
                <a href={proj.link} target="_blank" rel="noreferrer">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {proj.title}
                </h3>

                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">
                  {proj.subtitle}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 mb-4">
                  {proj.description}
                </p>

                {/* Impact */}
                <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-4">
                  ✅ {proj.impact}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-5">

                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-md"
                    >
                      {t}
                    </span>
                  ))}

                </div>

                {/* CTA */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow"
                >
                  View Live Project →
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
