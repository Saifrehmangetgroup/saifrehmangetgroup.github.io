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
      title: "Backend Development",
      desc: "Building secure, fast, and scalable systems for real-world applications",
      skills: [
        { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
        { name: "Microservices", icon: <AiOutlineDeploymentUnit className="text-indigo-500" /> },
      ],
    },
    {
      title: "Databases & Performance",
      desc: "Optimizing data systems for speed, reliability, and smooth user experience",
      skills: [
        { name: "MySQL / PostgreSQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "Redis (Caching)", icon: <SiRedis className="text-red-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Queues & Jobs", icon: <SiRedis className="text-orange-500" /> },
        { name: "Database Design", icon: <SiPostgresql className="text-blue-300" /> },
      ],
    },
    {
      title: "Cloud & Deployment",
      desc: "Deploying and managing applications for scalability and high performance",
      skills: [
        { name: "AWS", icon: <SiAmazonwebservices className="text-yellow-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
        { name: "CI/CD", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Linux", icon: <SiLinux className="text-gray-300" /> },
      ],
    },
    {
      title: "Frontend & Tools",
      desc: "Creating modern interfaces and integrating complete web solutions",
      skills: [
        { name: "React / Next.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "REST APIs", icon: <SiPostman className="text-orange-500" /> },
        { name: "Version Control", icon: <SiBitbucket className="text-blue-600" /> },
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
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col items-start text-left group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                {category.desc}
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-4 w-full mt-auto">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:-translate-y-1 transition-all"
                  >
                    <span className="text-4xl flex items-center justify-center">
                      {skill.icon}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-gray-700 dark:text-gray-300 text-center leading-tight">
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