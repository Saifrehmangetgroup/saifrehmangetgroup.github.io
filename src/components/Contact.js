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
      label: "Direct Email",
      val: "muhammadsaifrehman.6987@gmail.com",
      link: "mailto:muhammadsaifrehman.6987@gmail.com",
    },
    {
      icon: <FaWhatsapp className="text-green-500" />,
      label: "WhatsApp Live",
      val: "+92 308 3152045",
      link: "https://wa.me/923083152045",
    },
    {
      icon: <FaPhone className="text-indigo-500" />,
      label: "Voice Call",
      val: "+92 308 3152045",
      link: "tel:+923083152045",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      label: "Current Base",
      val: "Lahore, Pakistan",
      link: null,
    },
  ];

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Saifrehmangetgroup", label: "Github" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammad-saif-urrehman", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="mesh-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p
            className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-[11px] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Get in touch
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Let’s Scale Your <br className="hidden md:block" /> <span className="text-gradient">Next Project</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg opacity-90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Available for architectural consulting, backend development, and high-performance system engineering.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {contactMethods.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target={item.link?.startsWith("http") ? "_blank" : "_self"}
              className="glass-card p-8 flex items-center gap-6 group hover:border-blue-500/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] text-blue-600/60 uppercase font-black tracking-widest mb-1">{item.label}</p>
                <p className="font-bold text-gray-800 dark:text-white truncate">{item.val}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-10">
            {socials.map((soc, i) => (
              <a
                key={i}
                href={soc.link}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-gray-900 dark:bg-white/5 text-white flex flex-col items-center justify-center hover:bg-blue-600 transition-all group gap-1"
                title={soc.label}
              >
                <span className="text-xl">{soc.icon}</span>
              </a>
            ))}
          </div>

          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-2xl bg-blue-600 text-white font-extrabold uppercase tracking-widest text-xs shadow-2xl shadow-blue-600/30 hover:bg-blue-700 transition-all border border-blue-400/20"
          >
            Open Message Portal
          </motion.button>
        </div>
      </div>

      {/* Modern Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 flex items-center justify-center z-[10000] p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-gray-900 border border-white/20 rounded-[2.5rem] p-10 w-full max-w-lg shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">New Message</h2>
                  <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1">Direct Engineering Channel</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-all"
                >✕</button>
              </div>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = form.name.value;
                  const email = form.email.value;
                  const message = form.message.value;
                  const subject = encodeURIComponent(`Inquiry from ${name}`);
                  const body = encodeURIComponent(`${message}\n\nSender Email: ${email}`);
                  window.location.href = `mailto:muhammadsaifrehman.6987@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <FaUser className="absolute top-4 left-5 text-gray-400" />
                    <input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full pl-14 p-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold text-sm"
                    />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute top-4 left-5 text-gray-400" />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full pl-14 p-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Project details or inquiry..."
                  required
                  rows={5}
                  className="w-full p-5 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold text-sm"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                >
                  <FaPaperPlane />
                  Send Transmission
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;