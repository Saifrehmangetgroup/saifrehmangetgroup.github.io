import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

function Experience() {
  const work = [
    {
      role: "Senior Backend Developer",
      company: "Socioon",
      location: "Lahore, Pakistan",
      date: "Aug 2023 – Present",
      bullets: [
        "Architecting high-traffic backend systems catering to 1M+ active monthly users.",
        "Optimized database performance and server costs, reducing infrastructure spend by 30% via AWS scaling.",
        "Leading a team of 5 developers, enforcing clean code standards and scalable architecture patterns.",
        "Reduced API latency by 40% through custom caching and query optimization strategies."
      ]
    },
    {
      role: "Backend Developer",
      company: "Virtuenetz",
      location: "Rahim Yar Khan, Pakistan",
      date: "Jan 2022 – Aug 2023",
      bullets: [
        "Developed custom ERP solutions and secure payment integrations for international retail clients.",
        "Engineered real-time notification systems and automated background processing for SaaS products.",
        "Improved system reliability through comprehensive unit testing and defensive coding practices."
      ]
    },
    {
      role: "Backend Developer",
      company: "Dexdevs",
      location: "Rahim Yar Khan, Pakistan",
      date: "Aug 2018 – Dec 2021",
      bullets: [
        "Developed end-to-end web applications using Laravel, managing full SDLC from design to deployment.",
        "Designed relational database schemas for complex business logic, ensuring 100% data integrity.",
        "Maintained legacy systems, delivering incremental performance boosts through iterative refactors."
      ]
    },
  ];

  const education = [
    {
      degree: "BS Computer Science",
      university: "The Islamia University Bahawalpur",
      location: "Bahawalpur, Pakistan",
      date: "2016 – 2020",
    },
  ];

  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p
            className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-[11px] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Professional Trajectory
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Career & <span className="text-gradient">Impact</span>
          </motion.h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg opacity-90 font-medium">
            A record of delivering scalable solutions and leading technical teams toward high-impact business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* WORK EXPERIENCE */}
          <div className="lg:col-span-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-transparent to-transparent hidden lg:block" />

            <div className="space-y-8 lg:pl-16">
              {work.map((job, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-8 lg:p-10 rounded-[2.5rem] relative group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[52px] top-10 w-4 h-4 bg-[#030712] border-2 border-blue-600 rounded-full hidden lg:block group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]" />

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-blue-600 font-extrabold uppercase tracking-widest text-xs mt-1">
                        {job.company}
                      </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 gap-1.5">
                      <p className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 px-3 py-1 rounded-full">
                        <FaCalendarAlt className="text-blue-500" /> {job.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm md:text-base flex gap-4 leading-relaxed opacity-90">
                        <span className="text-blue-600 mt-1.5 shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SIDEBAR: Education & Summary */}
          <div className="lg:col-span-4 space-y-8">

            {/* EDUCATION */}
            <motion.div
              className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all" />

              <h3 className="text-xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
                <FaGraduationCap className="text-blue-600" /> Academic Foundation
              </h3>

              {education.map((edu, i) => (
                <div key={i} className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <h4 className="font-extrabold text-gray-800 dark:text-white leading-tight mb-1">{edu.degree}</h4>
                    <p className="text-blue-600 text-[11px] font-black uppercase tracking-widest">{edu.university}</p>
                    <div className="flex justify-between items-center mt-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <span>{edu.location}</span>
                      <span className="text-gray-300 dark:text-gray-600">{edu.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* EXPERIENCE HIGHLIGHT */}
            <motion.div
              className="premium-gradient text-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-600/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaBriefcase className="absolute -bottom-6 -right-6 text-[10rem] opacity-10 rotate-12" />
              <p className="text-5xl font-black mb-3">6+ <span className="text-2xl font-bold opacity-60">Years</span></p>
              <p className="text-sm font-bold opacity-90 uppercase tracking-widest leading-relaxed mb-8">
                Building complex <br /> systems & architectures
              </p>

              <div className="relative z-10 py-3 px-6 rounded-xl bg-white/20 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] inline-block">
                Open for Strategic Roles
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;