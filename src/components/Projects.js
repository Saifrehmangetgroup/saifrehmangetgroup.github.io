import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Raabta (Official PTI App)",
      description:
        "Engineered the backend infrastructure serving over 1M+ users, including secure APIs, authentication, and AWS scaling optimizations for nationwide uptime.",
      tech: ["Laravel", "MySQL", "AWS", "Redis", "Queues"],
      link: "https://ptiraabta.pk",
      image: "/ptiraabta.png",
    },
    {
      title: "Linkon.social",
      description:
        "Built the backend services and admin architecture for a social platform, including private messaging and media storage, with optimized routing and database indexing.",
      tech: ["CI4", "MySQL", "REST APIs"],
      link: "https://linkon.social",
      image: "linkon.png",
    },
    {
      title: "Ingage.gg",
      description:
        "Developed tournament management APIs for real-time gaming events, including user authentication, match tracking, and scalable game logic.",
      tech: ["Laravel", "MySQL", "Web APIs"],
      link: "https://ingage.gg",
      image: "ingage.png",
    },
    {
      title: "Hiphop (Short Video Platform)",
      description:
        "Designed a TikTok-style media pipeline enabling video upload, compression, feed ranking, and optimized streaming APIs for low-latency content delivery.",
      tech: ["Laravel", "MySQL", "Media Streaming"],
      link: "https://hiphop.socioon.com",
      image: "hiphop.png",
    },
    {
      title: "Club92",
      description:
        "Built a scalable live-audio streaming backend with WebRTC integrations, channel management, role-based participation, and real-time communication.",
      tech: ["Laravel", "MySQL", "WebRTC", "Redis"],
      link: "https://club92.socioon.com",
      image: "club92.png",
    },
    {
      title: "ShaadiAbroad.com",
      description:
        "Architected a global event management system with heavy database usage, data compliance, and backend-driven performance optimizations.",
      tech: ["Laravel", "PostgreSQL", "AWS"],
      link: "https://shaadiabroad.com",
      image: "shaadiabroad.png",
    },

    {
      title: "Gtcree (LED E-commerce Platform)",
      description:
        "Developed a modern, high-performance e-commerce backend with product catalog management, user roles, secure checkout, and optimized MySQL indexing for fast product search.",
      tech: ["Laravel", "MySQL", "E-commerce", "Caching"],
      link: "https://gtcree.com",
      image: "gtcree.png",
    },
    {
      title: "Bracktix",
      description:
        "Developed tournament management APIs for real-time gaming events, including user authentication, match tracking, and scalable game logic.",
      tech: ["Laravel", "Redis", "MySQL", "Sanctum"],
      link: "https://bracktix.sadacode.com",
      image: "bracktix.png",
    },


  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {proj.image && (
                <a
                  href={proj.link || "#"}
                  target={proj.link ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
              )}

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 leading-relaxed">
                  {proj.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block bg-blue-600 text-white px-3 py-2 rounded-md text-xs font-medium hover:bg-blue-700 transition"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
