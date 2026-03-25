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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = [
    {
      title: "Backend Development",
      desc: "Building secure, fast, and scalable systems for real-world applications",
      skills: [
        { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "Microservices", icon: <AiOutlineDeploymentUnit className="text-indigo-400" /> },
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
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I use modern technologies to build fast, scalable, and reliable web solutions that help businesses grow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-10 rounded-[2.5rem] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">
                {category.title}
              </h3>

              <p className="text-gray-500 text-sm mb-8">
                {category.desc}
              </p>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:-translate-y-1 transition-all"
                  >
                    <span className="text-4xl">{skill.icon}</span>
                    <span className="text-[10px] font-bold uppercase text-center">
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