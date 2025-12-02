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
  SiAwsamplify,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      desc: "Building responsive and interactive web applications",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
      ],
    },
    {
      title: "Backend Development",
      desc: "Designing scalable APIs and managing databases",
      skills: [
        { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "Development Tools",
      desc: "Essential tools for efficient workflow",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Postman", icon: <SiPostman className="text-red-500" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "AWS", icon: <SiAwsamplify className="text-yellow-600" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-3">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-blue-600">Skills</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A curated set of technologies I use to build modern, scalable, and high-performance applications.
        </motion.p>

        {/* Categories */}
        {categories.map((category, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow p-6 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {category.title}
            </h3>
            <p className="text-sm text-gray-500 mb-6">{category.desc}</p>

            {/* Skills List */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  className="flex items-center space-x-3 border rounded-lg px-4 py-3 bg-gray-50 hover:bg-blue-50 transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: j * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-gray-700">{skill.name}</span>
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
