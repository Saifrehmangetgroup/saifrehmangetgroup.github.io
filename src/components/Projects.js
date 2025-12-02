import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Raabta (Official PTI App)",
      description:
        "Developed backend, APIs, and admin panel with scalable server management for PTI’s official app.",
      tech: ["Laravel", "MySQL", "AWS"],
      link: "https://ptirabta.pk",
      image: "/ptiraabta.png",
    },
    {
      title: "Linkon.social",
      description:
        "A social platform built with CI4. Developed backend APIs, admin panel, and server setup.",
      tech: ["CodeIgniter 4", "MySQL", "REST APIs"],
      link: "https://linkon.social",
      image: "linkon.png",
    },
    {
      title: "Ingage.gg",
      description:
        "Gaming tournament management platform with integrated backend for web and mobile apps.",
      tech: ["Laravel", "MySQL", "APIs"],
      link: "https://ingage.gg",
      image: "ingage.png",
    },
    {
      title: "Hiphop (Short Video Platform)",
      description:
        "TikTok-like short video platform with live streaming support. Built backend APIs and admin panel.",
      tech: ["Laravel", "MySQL", "Streaming APIs"],
      link: "https://hiphop.socioon.com",
      image: "hiphop.png",
    },
    {
      title: "Club92",
      description:
        "Audio-based live space app (similar to Clubhouse). Developed APIs, servers, and integrations.",
      tech: ["Laravel", "MySQL", "WebRTC"],
      link: "https://club92.socioon.com",
      image: "club92.png",
    },
    {
      title: "ShaadiAbroad.com",
      description:
        "Wedding event platform with advanced event management features and scalability optimization.",
      tech: ["Laravel", "MySQL", "AWS"],
      link: "https://shaadiabroad.com",
      image: "shaadiabroad.png",
    },
    {
      title: "Point of Sale System",
      description:
        "Barcode-based POS system for sales, inventory, and transactions.",
      tech: ["Laravel", "MySQL", "jQuery"],
      link: null,
      image: "pos.png",
    },
    {
      title: "Property ON",
      description:
        "System for admins, sellers, and buyers with efficient property listing and management features.",
      tech: ["Laravel", "MySQL", "jQuery", "JavaScript"],
      link: null,
      image: "propertyon.png",
    },
    {
      title: "Jobson’s Portfolio Website",
      description:
        "Professional company portfolio website with modern design and responsive UI.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: null,
      image: "jobson.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-3">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-600">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Image */}
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

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 flex-1">{proj.description}</p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Tech:</strong> {proj.tech.join(", ")}
                </p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                  >
                    View Project
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
