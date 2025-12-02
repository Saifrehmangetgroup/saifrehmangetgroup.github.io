import React from "react";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Experience() {
  const work = [
    {
      role: "Senior PHP Web Developer",
      company: "Get Group",
      location: "Lahore, Pakistan",
      type: "Full Time",
      date: "Aug 2023 – Present",
    },
    {
      role: "Web Developer",
      company: "Virtuenetz",
      location: "Rahim Yar Khan, Pakistan",
      type: "Full Time",
      date: "Jan 2022 – Aug 2023",
    },
    {
      role: "Web Developer",
      company: "Dexdevs",
      location: "Rahim Yar Khan, Pakistan",
      type: "Full Time",
      date: "Aug 2018 – Dec 2021",
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-3">
        {/* Work Experience */}
        <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
        <div className="space-y-6">
          {work.map((job, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-5 flex justify-between items-center hover:shadow-lg transition"
            >
              {/* Left Side */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FaBriefcase className="text-blue-600" />
                  {job.role}
                </h3>
                <p className="text-blue-600 font-medium">{job.company}</p>
                <div className="flex gap-4 text-gray-500 text-sm mt-1">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {job.type}
                  </span>
                </div>
              </div>

              {/* Right Side - Date */}
              <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full whitespace-nowrap">
                {job.date}
              </span>
            </div>
          ))}
        </div>

        {/* Education */}
        <h2 className="text-3xl font-bold text-center my-10">Education</h2>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-5 flex justify-between items-center hover:shadow-lg transition"
            >
              {/* Left Side */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FaGraduationCap className="text-blue-600" />
                  {edu.role}
                </h3>
                <p className="text-blue-600 font-medium">{edu.company}</p>
                <div className="flex gap-4 text-gray-500 text-sm mt-1">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {edu.type}
                  </span>
                </div>
              </div>

              {/* Right Side - Date */}
              <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full whitespace-nowrap">
                {edu.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
