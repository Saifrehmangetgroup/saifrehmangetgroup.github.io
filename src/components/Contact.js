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
    },
    {
      icon: <FaWhatsapp className="text-green-500" />,
      label: "WhatsApp (Fast Response)",
      val: "+92 308 3152045",
      link: "https://wa.me/923083152045",
    },
    {
      icon: <FaPhone className="text-purple-500" />,
      label: "Call Me",
      val: "+92 308 3152045",
      link: "tel:+923083152045",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      label: "Location",
      val: "Lahore, Pakistan",
      link: null,
    },
  ];

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Saifrehmangetgroup" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammad-saif-urrehman" },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let’s Build Something <span className="text-gradient">Great Together</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Have a project in mind or need a high-performing website or backend system? 
            I’m here to help you build fast, scalable, and reliable solutions for your business.
          </motion.p>
        </div>

        {/* CONTACT GRID */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.link?.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className={`glass-card p-8 rounded-[2rem] flex items-center gap-6 group transition-all duration-500 ${
                  !item.link
                    ? "pointer-events-none"
                    : "hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                    {item.val}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* SOCIAL + FINAL CTA */}
          <motion.div
            className="glass-card p-10 rounded-[2.5rem] text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
              Or Connect With Me
            </h3>

            <div className="flex justify-center gap-6 mb-8">
              {socials.map((soc, i) => (
                <a
                  key={i}
                  href={soc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300"
                >
                  {soc.icon}
                </a>
              ))}
            </div>

            {/* FINAL MESSAGE */}
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium max-w-md mx-auto">
              🚀 Ready to start your project? Message me on WhatsApp or LinkedIn — I usually reply quickly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;