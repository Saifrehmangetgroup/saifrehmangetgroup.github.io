import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

function Experience() {

  const work = [
    {
      role: "Senior Backend Engineer (Laravel / PHP)",
      company: "Socioon",
      location: "Lahore, Pakistan",
      type: "Full-Time",
      date: "Aug 2023 – Present",
      highlights: [
        "Architected and maintained scalable backend systems supporting high-traffic production platforms",
        "Designed secure RESTful APIs and microservices used across multiple applications",
        "Implemented automated CI/CD pipelines to reduce deployment errors and downtime",
        "Optimized database queries and caching layers, improving system performance by 30%+",
        "Deployed and managed infrastructure on AWS, DigitalOcean, Wasabi, and GCP",
        "Led backend code reviews and mentored junior engineers",
      ],
    },

    {
      role: "Backend Engineer (Laravel)",
      company: "Virtuenetz",
      location: "Rahim Yar Khan, Pakistan",
      type: "Full-Time",
      date: "Jan 2022 – Aug 2023",
      highlights: [
        "Developed robust backend APIs and administrative systems for client platforms",
        "Improved database reliability and query efficiency for data-intensive applications",
        "Integrated dynamic frontend components through AJAX-based APIs",
        "Collaborated with frontend and QA teams to ensure stable releases",
        "Contributed to system documentation and deployment processes",
      ],
    },

    {
      role: "Junior to Mid-Level Backend Developer (PHP / Laravel)",
      company: "Dexdevs",
      location: "Rahim Yar Khan, Pakistan",
      type: "Full-Time",
      date: "Aug 2018 – Dec 2021",
      highlights: [
        "Built core backend features using PHP, Laravel, and CodeIgniter frameworks",
        "Designed APIs, cron jobs, and database schemas for multiple client projects",
        "Maintained and debugged legacy systems to improve reliability",
        "Enhanced server-side performance through profiling and optimization",
        "Supported junior developers and participated in collaborative delivery cycles",
      ],
    },
  ];


  const education = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institute: "The Islamia University Bahawalpur",
      location: "Bahawalpur, Pakistan",
      type: "Full-Time",
      date: "Feb 2016 – Feb 2020",
    },
  ];


  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Work Experience */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </motion.h2>


        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {work.map((job, i) => (

            <div
              key={i}
              className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition"
            >

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

                <div>

                  <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white mb-1">
                    <FaBriefcase className="text-blue-600 dark:text-blue-400" />
                    {job.role}
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {job.company}
                  </p>

                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm mt-2">

                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {job.location}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaClock /> {job.type}
                    </span>

                  </div>

                </div>

                {/* Date */}
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm px-4 py-1 rounded-full whitespace-nowrap">
                  {job.date}
                </span>

              </div>


              {/* Highlights */}
              <ul className="text-sm text-gray-700 dark:text-gray-300 mt-5 space-y-2 list-disc list-inside">

                {job.highlights.map((point, index) => (
                  <li key={index} className="leading-relaxed">
                    {point}
                  </li>
                ))}

              </ul>

            </div>
          ))}
        </motion.div>


        {/* Education */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mt-24 mb-14 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>


        {education.map((edu, i) => (

          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:shadow-xl transition border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <div>

              <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-white mb-1">
                <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
                {edu.degree}
              </h3>

              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {edu.institute}
              </p>

              <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm mt-2">

                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt /> {edu.location}
                </span>

                <span className="flex items-center gap-1">
                  <FaClock /> {edu.type}
                </span>

              </div>

            </div>


            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm px-4 py-1 rounded-full whitespace-nowrap">
              {edu.date}
            </span>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Experience;
