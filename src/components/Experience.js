import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Experience() {
  const work = [
    {
      role: "Senior PHP Web Developer",
      company: "Socioon",
      location: "Lahore, Pakistan",
      type: "Full Time",
      date: "Aug 2023 – Present",
      bullets: [
        "Built scalable backend systems using Laravel, Redis & MySQL",
        "Implemented CI/CD pipelines & automated deployments",
        "Designed REST APIs & microservices for production workloads",
        "Optimized DB performance & caching for high-traffic systems",
        "Deployed across AWS, Wasabi, DigitalOcean & GCP",
        "Led code reviews & mentoring for backend developers"
      ]
    },
    {
      role: "Web Developer (Laravel Developer)",
      company: "Virtuenetz",
      location: "Rahim Yar Khan, Pakistan",
      type: "Full Time",
      date: "Jan 2022 – Aug 2023",
      bullets: [
        "Developed backend APIs and admin panels using Laravel & MySQL",
        "Improved query performance and database reliability",
        "Implemented jQuery & AJAX for dynamic UI interactions",
        "Ensured cross-browser compatibility & QA testing",
        "Worked closely with frontend teams on integrations"
      ]
    },
    {
      role: "Web Developer (PHP / Laravel)",
      company: "Dexdevs",
      location: "Rahim Yar Khan, Pakistan",
      type: "Full Time",
      date: "Aug 2018 – Dec 2021",
      bullets: [
        "Built backend features using PHP, Laravel & CodeIgniter",
        "Developed APIs, cron jobs, and database structures",
        "Maintained & debugged backend logic across multiple projects",
        "Improved server-side performance & reliability",
        "Supported junior devs and collaboratively shipped features"
      ]
    },
  ];

  const education = [
    {
      role: "Bachelor of Science in Computer Science (BSCS)",
      company: "The Islamia University Bahawalpur",
      location: "Bahawalpur, Pakistan",
      type: "Full Time",
      date: "Feb 2016 – Feb 2020",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-3">

        {/* Work Experience */}
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </motion.h2>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {work.map((job, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 hover:shadow-lg transition border border-gray-100 dark:border-gray-700"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                    <FaBriefcase className="text-blue-600 dark:text-blue-400" />
                    {job.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                  <div className="flex gap-4 text-gray-600 dark:text-gray-400 text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {job.type}
                    </span>
                  </div>
                </div>

                {/* Date */}
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm px-3 py-1 rounded-full whitespace-nowrap">
                  {job.date}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="text-sm text-gray-700 dark:text-gray-300 mt-4 space-y-1 list-disc list-inside">
                {job.bullets.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.h2
          className="text-3xl font-bold text-center mt-16 mb-10 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 flex justify-between items-center hover:shadow-lg transition border border-gray-100 dark:border-gray-700"
          >
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
                {edu.role}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.company}</p>
              <div className="flex gap-4 text-gray-600 dark:text-gray-400 text-sm mt-1">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt /> {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {edu.type}
                </span>
              </div>
            </div>

            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm px-3 py-1 rounded-full whitespace-nowrap">
              {edu.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
