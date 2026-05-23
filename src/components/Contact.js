import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [open, setOpen] = useState(false);

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

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Let’s Build Something <span className="text-gradient">Great Together</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Have a project in mind? Let’s create something amazing.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {contactMethods.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target={item.link?.startsWith("http") ? "_blank" : "_self"}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:scale-[1.02] hover:shadow-md transition-all"
            >
              <div className="text-2xl">{item.icon}</div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">{item.label}</p>
                <p className="font-semibold text-gray-800 dark:text-white">{item.val}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social + CTA */}
        <div className="text-center">
          <div className="flex justify-center gap-5 mb-6">
            {socials.map((soc, i) => (
              <a
                key={i}
                href={soc.link}
                target="_blank"
                className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:scale-110 transition"
              >
                {soc.icon}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-lg shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Send a Message</h2>
                <button onClick={() => setOpen(false)}>✕</button>
              </div>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = form.name.value;
                  const email = form.email.value;
                  const message = form.message.value;

                  const subject = encodeURIComponent(`Message from ${name}`);
                  const body = encodeURIComponent(`${message}\n\nEmail: ${email}`);

                  window.location.href = `mailto:muhammadsaifrehman.6987@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="space-y-5"
              >
                {/* Name */}
                <div className="relative">
                  <FaUser className="absolute top-4 left-4 text-gray-400" />
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 p-3 rounded-xl border bg-white/50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 p-3 rounded-xl border bg-white/50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  required
                  rows={4}
                  className="w-full p-3 rounded-xl border bg-white/50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;