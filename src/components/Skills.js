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
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = [
    {
      title: "Backend Core",
      desc: "Architecting robust and efficient server-side logic",
      skills: [
        { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "Microservices", icon: <AiOutlineDeploymentUnit className="text-indigo-400" /> },
      ],
    },
    {
      title: "Data & Caching",
      desc: "Managing data persistence and high-speed retrieval",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
        { name: "Redis", icon: <SiRedis className="text-red-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ],
    },
    {
      title: "Cloud & Reliability",
      desc: "Deploying and maintaining production-grade infrastructure",
      skills: [
        { name: "AWS", icon: <SiAmazonwebservices className="text-yellow-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
        { name: "CI/CD", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Linux", icon: <SiLinux className="text-gray-300" /> },
      ],
    },
    {
      title: "Full-Stack Bridge",
      desc: "Collaborating with frontend teams effectively",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white bg-black rounded-full" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-gray-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical <span className="text-gradient">Powerhouse</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive suite of technologies I've mastered to ship scalable, production-ready applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Decorative background circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-500/10 transition-colors" />

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-10 pb-6 border-b border-gray-100 dark:border-gray-800">
                {category.desc}
              </p>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-blue-500/5 group/skill"
                  >
                    <span className="text-4xl transition-transform group-hover/skill:scale-110 duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tighter">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
