import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPhp, FaLaravel, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
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
  SiLinux
} from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

function Skills() {
  const categories = [
    {
      title: "Backend Engineering",
      desc: "Designing secure, scalable, and high-performance backend systems",
      skills: [
        { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
        { name: "MySQL / PostgreSQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Redis & Queueing", icon: <SiRedis className="text-red-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ],
    },
    {
      title: "Architecture & Infrastructure",
      desc: "Building distributed systems & high-performance applications",
      skills: [
        { name: "Microservices Architecture", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "API Security & OAuth", icon: <SiJavascript className="text-blue-600" /> },
        { name: "Database Optimization", icon: <SiMysql className="text-blue-500" /> },
        { name: "Load Balancing", icon: <SiNginx className="text-green-600" /> },
        { name: "Scalability & Caching", icon: <SiRedis className="text-red-500" /> },
      ],
    },
    {
      title: "DevOps & Cloud",
      desc: "Deploying & maintaining production-grade systems",
      skills: [
        { name: "AWS", icon: <SiAmazonwebservices className="text-yellow-600" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Linux & Server Management", icon: <SiLinux className="text-gray-800" /> },
        { name: "Nginx", icon: <SiNginx className="text-green-600" /> },
        { name: "CI/CD Pipelines", icon: <AiOutlineDeploymentUnit className="text-blue-600" /> },
      ],
    },
    {
      title: "Frontend (Collaborative)",
      desc: "Light frontend knowledge for effective backend integration",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      ],
    },
    {
      title: "Professional Tools",
      desc: "Tools essential for backend development workflows",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Postman (API Testing)", icon: <SiPostman className="text-red-500" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-3">

        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-gray-800"
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
          A strong set of backend-driven engineering skills powering real-world high-performance applications.
        </motion.p>

        {categories.map((category, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow p-7 mb-8 border border-gray-100 hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {category.title}
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              {category.desc}
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  className="flex items-center space-x-3 border rounded-lg px-4 py-3 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: j * 0.05, duration: 0.4 }}
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
