import React from "react";
import { motion } from "framer-motion";
import {  FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function Experience() {
  const work = [
    {
      role: "Senior Backend Developer",
      company: "Socioon",
      location: "Lahore, Pakistan",
      date: "Aug 2023 – Present",
      bullets: [
        "Built and improved backend systems to handle high user traffic efficiently and reliably.",
        "Reduced API response time by 40%, improving overall user experience.",
        "Deployed and managed cloud-based applications using AWS and GCP.",
        "Led and mentored developers, ensuring clean code and scalable solutions."
      ]
    },
    {
      role: "Backend Developer",
      company: "Virtuenetz",
      location: "Rahim Yar Khan, Pakistan",
      date: "Jan 2022 – Aug 2023",
      bullets: [
        "Developed secure and scalable APIs for different business applications.",
        "Integrated payment gateways and third-party services for real-world business use.",
        "Improved system performance and communication between frontend and backend."
      ]
    },
    {
      role: "Backend Developer",
      company: "Dexdevs",
      location: "Rahim Yar Khan, Pakistan",
      date: "Aug 2018 – Dec 2021",
      bullets: [
        "Built complete web applications from scratch using Laravel and PHP.",
        "Designed and managed databases for reliable and efficient performance.",
        "Maintained and improved system stability through debugging and optimization."
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
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My <span className="text-gradient">Experience</span>
          </motion.h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Over the years, I’ve helped businesses build reliable, scalable, and high-performing web systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* WORK */}
          <div className="lg:col-span-8 relative">
            <div className="space-y-12">
              {work.map((job, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-8 rounded-3xl hover:border-blue-500/30 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-blue-600 font-bold">
                        {job.company}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500">
                      <p className="flex items-center gap-2">
                        <FaCalendarAlt /> {job.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                        • {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-4 space-y-8">

            {/* EDUCATION */}
            <motion.div
              className="glass-card p-8 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FaGraduationCap /> Education
              </h3>

              {education.map((edu, i) => (
                <div key={i}>
                  <h4 className="font-bold">{edu.degree}</h4>
                  <p className="text-blue-600">{edu.university}</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                  <p className="text-xs text-gray-400">{edu.date}</p>
                </div>
              ))}
            </motion.div>

            {/* EXPERIENCE SUMMARY */}
            <motion.div
              className="bg-blue-600 text-white p-8 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold mb-2">6+ Years</p>
              <p className="text-sm">Building web applications & backend systems</p>

              <div className="mt-4 text-sm bg-white/20 px-4 py-2 rounded-full inline-block">
                Available for freelance projects
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;