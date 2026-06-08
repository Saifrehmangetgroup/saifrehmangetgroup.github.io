import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPhp, FaLaravel, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMysql,
  SiPostman,
  SiFigma,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiAmazonwebservices,
  SiRedis,
  SiNginx,
  SiLinux,
  SiPostgresql,
  SiDocker,
  SiBitbucket,
} from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

function Skills() {
  const categories = [
    {
      title: "Backend Core",
      desc: "Architecting high-performance logical engines.",
      iconBg: "bg-blue-50 dark:bg-blue-900/10",
      skills: [
        { name: "Laravel 11", icon: <FaLaravel className="text-red-500" /> },
        { name: "PHP 8.3", icon: <FaPhp className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
        { name: "Microservices", icon: <AiOutlineDeploymentUnit className="text-indigo-500" /> },
      ],
    },
    {
      title: "Data Layer",
      desc: "Optimizing storage for sub-second responses.",
      iconBg: "bg-indigo-50 dark:bg-indigo-900/10",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "Redis", icon: <SiRedis className="text-red-600" /> },
        { name: "Postgres", icon: <SiPostgresql className="text-blue-300" /> },
        { name: "Queues", icon: <SiRedis className="text-orange-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ],
    },
    {
      title: "Architecture",
      desc: "Scaling systems to handle millions of users.",
      iconBg: "bg-green-50 dark:bg-green-900/10",
      skills: [
        { name: "AWS", icon: <SiAmazonwebservices className="text-yellow-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
        { name: "CI/CD", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Bitbucket", icon: <SiBitbucket className="text-blue-600" /> },
      ],
    },
    {
      title: "Full Stack",
      desc: "Bridging logic with intuitive user experiences.",
      iconBg: "bg-purple-50 dark:bg-purple-900/10",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "REST APIs", icon: <SiPostman className="text-blue-400" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p
            className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-[11px] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Technical Arsenal
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Stack & <span className="text-gradient">Proficiency</span>
          </motion.h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg opacity-90 font-medium">
            Expertise in building scalable, reliable, and high-performance backend systems with modern tools and cloud infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-14 h-14 rounded-2xl ${category.iconBg} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <span className="opacity-80">0{idx + 1}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{category.title}</h3>
              <p className="text-[10px] uppercase font-black tracking-widest text-blue-600/60 mb-8">{category.desc}</p>

              <div className="flex flex-wrap justify-center gap-3 mt-auto">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 group/skill hover:border-blue-500/30 transition-all min-w-[70px]"
                  >
                    <span className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-[9px] font-black uppercase text-gray-500 dark:text-gray-400 text-center leading-none">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;