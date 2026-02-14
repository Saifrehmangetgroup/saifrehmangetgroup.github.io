import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function Experience() {
  const work = [
    {
      role: "Senior PHP Web Developer",
      company: "Socioon",
      location: "Lahore, Pakistan",
      type: "Full Time",
      date: "Aug 2023 – Present",
      bullets: [
        "Architected scalable backend infrastructures serving millions of concurrent web socket connections.",
        "Optimized complex SQL queries and database indexes, reducing API latency by 40%.",
        "Orchestrated cloud deployments across AWS and GCP using containerization and CI/CD pipelines.",
        "Mentored a team of 5+ developers, establishing best practices for code reviews and documentation."
      ]
    },
    {
      role: "Web Developer (Laravel Developer)",
      company: "Virtuenetz",
      location: "Rahim Yar Khan, Pakistan",
      type: "Full Time",
      date: "Jan 2022 – Aug 2023",
      bullets: [
        "Developed custom RESTful APIs for diverse client industries, ensuring high security and performance.",
        "Integrated third-party payment gateways and external social media APIs.",
        "Optimized frontend-backend communication using AJAX and efficient JSON structures."
      ]
    },
    {
      role: "Web Developer (PHP / Laravel)",
      company: "Dexdevs",
      location: "Rahim Yar Khan, Pakistan",
      type: "Full Time",
      date: "Aug 2018 – Dec 2021",
      bullets: [
        "Engineered web applications from scratch using Laravel and CodeIgniter frameworks.",
        "Managed database schema migrations and complex relational data modeling.",
        "Improved server-side uptime and reliability through proactive debugging and monitoring."
      ]
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      university: "The Islamia University Bahawalpur",
      location: "Bahawalpur, Pakistan",
      date: "Feb 2016 – Feb 2020",
    },
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Career <span className="text-gradient">Timeline</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A journey through my professional evolution and academic foundations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Work Experience (Left/Center) */}
          <div className="lg:col-span-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-500 to-transparent opacity-20 hidden sm:block" />

            <div className="space-y-12">
              {work.map((job, i) => (
                <motion.div
                  key={i}
                  className="relative pl-0 sm:pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 lg:left-[26px] top-6 w-3 h-3 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-xl z-10 hidden sm:block" />

                  <div className="glass-card p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {job.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-bold tracking-tight">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end text-sm text-gray-500 dark:text-gray-400 font-medium">
                        <span className="flex items-center gap-2"><FaCalendarAlt className="text-blue-500" /> {job.date}</span>
                        <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500" /> {job.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Other (Right) */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              className="glass-card p-8 rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 blur-2xl" />

              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-gray-800 dark:text-white">
                <FaGraduationCap className="text-blue-600" /> Education
              </h3>

              {education.map((edu, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-blue-600/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-gray-900" />
                  <h4 className="font-bold text-gray-800 dark:text-white leading-tight mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-bold mb-1">{edu.university}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{edu.location}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest">{edu.date}</p>
                </div>
              ))}
            </motion.div>

            {/* Quick Experience Badge */}
            <motion.div
              className="premium-gradient p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaBriefcase className="text-6xl absolute -bottom-4 -right-4 opacity-10 group-hover:scale-125 transition-transform duration-500" />
              <p className="text-4xl font-extrabold mb-1">6+ Years</p>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Across 3 Companies</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Ready for new ventures
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
