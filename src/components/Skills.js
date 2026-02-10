import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPhp, FaLaravel, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostman,
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiAmazonwebservices,
  SiRedis,
  SiNginx,
  SiLinux,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

function Skills() {

  const categories = [
    {
      title: "Backend Engineering",
      desc: "Designing reliable, secure, and high-performance server-side systems",
      skills: [
        { name: "Laravel (Advanced)", icon: <FaLaravel className="text-red-600" /> },
        { name: "PHP (OOP & SOLID)", icon: <FaPhp className="text-indigo-600" /> },
        { name: "MySQL & PostgreSQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Redis & Queue Workers", icon: <SiRedis className="text-red-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ],
    },

    {
      title: "System Architecture",
      desc: "Building scalable, fault-tolerant, and distributed platforms",
      skills: [
        { name: "Microservices Design", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "REST APIs & OAuth2", icon: <SiJavascript className="text-blue-600" /> },
        { name: "Database Optimization", icon: <SiMysql className="text-blue-500" /> },
        { name: "Load Balancing (Nginx)", icon: <SiNginx className="text-green-600" /> },
        { name: "Caching & Rate Limiting", icon: <SiRedis className="text-red-500" /> },
      ],
    },

    {
      title: "Cloud & DevOps",
      desc: "Deploying, scaling, and monitoring production infrastructure",
      skills: [
        { name: "AWS Cloud Services", icon: <SiAmazonwebservices className="text-yellow-600" /> },
        { name: "Linux Server Administration", icon: <SiLinux className="text-gray-800" /> },
        { name: "Nginx & SSL Configuration", icon: <SiNginx className="text-green-600" /> },
        { name: "CI/CD Automation", icon: <AiOutlineDeploymentUnit className="text-blue-600" /> },
      ],
    },

    {
      title: "Frontend Collaboration",
      desc: "Supporting frontend teams with backend-driven integrations",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      ],
    },

    {
      title: "Professional Tooling",
      desc: "Tools that support high-quality engineering workflows",
      skills: [
        { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Postman (API Testing)", icon: <SiPostman className="text-red-500" /> },
        { name: "Figma (UI Collaboration)", icon: <SiFigma className="text-pink-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-5 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical <span className="text-blue-600 dark:text-blue-400">Expertise</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A production-focused engineering skill set built through years of
          designing, deploying, and scaling real-world systems.
        </motion.p>

        {/* Categories */}
        {categories.map((category, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-10 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {category.title}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-7">
              {category.desc}
            </p>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

              {category.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  className="group flex items-center space-x-3 border rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-600 hover:border-blue-300 dark:hover:border-gray-500 transition"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: j * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl group-hover:scale-110 transition">
                    {skill.icon}
                  </span>

                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;
