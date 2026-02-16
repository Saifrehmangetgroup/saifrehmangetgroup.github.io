import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-blue-500" />,
      label: "Email Me",
      val: "muhammadsaifrehman.6987@gmail.com",
      link: "mailto:muhammadsaifrehman.6987@gmail.com",
      color: "blue",
    },
    {
      icon: <FaWhatsapp className="text-green-500" />,
      label: "WhatsApp Chat",
      val: "+92 308 3152045",
      link: "https://wa.me/923083152045",
      color: "green",
    },
    {
      icon: <FaPhone className="text-purple-500" />,
      label: "Call Me",
      val: "+92 308 3152045",
      link: "tel:+923083152045",
      color: "purple",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      label: "Location",
      val: "Lahore, Pakistan",
      link: null,
      color: "red",
    },
  ];

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Saifrehmangetgroup" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammad-saif-urrehman" },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-gradient">Collaborate</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.link?.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className={`glass-card p-8 rounded-[2rem] flex items-center gap-6 group hover:border-blue-500/30 transition-all duration-500 ${!item.link ? "pointer-events-none" : "hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.val}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links & Final Note */}
          <motion.div
            className="glass-card p-10 rounded-[2.5rem] text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
              Connect Across Platforms
            </h3>
            <div className="flex justify-center gap-6 mb-8">
              {socials.map((soc, i) => (
                <a
                  key={i}
                  href={soc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-2xl hover:premium-gradient hover:text-white transition-all duration-300 shadow-lg hover:scale-110 hover:-rotate-6"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Prefer a different way? I'm most active on WhatsApp and LinkedIn.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
