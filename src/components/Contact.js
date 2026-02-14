import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("loading");

    try {
      // NOTE: Replace 'muhammadsaifrehman.6987@gmail.com' with your actual Formspree ID
      // You can get one at https://formspree.io/ by creating a free account.
      const response = await fetch("https://formspree.io/f/xpwzjyyo", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-gradient">Collaborate</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or just want to chat? Reach out via any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: <FaEnvelope className="text-blue-500" />, label: "Email Me", val: "muhammadsaifrehman.6987@gmail.com", link: "mailto:muhammadsaifrehman.6987@gmail.com" },
              { icon: <FaWhatsapp className="text-green-500" />, label: "WhatsApp Chat", val: "+92 308 3152045", link: "https://wa.me/923083152045" },
              { icon: <FaPhone className="text-purple-500" />, label: "Call Me", val: "+92 308 3152045", link: "tel:+923083152045" },
              { icon: <FaMapMarkerAlt className="text-red-500" />, label: "Location", val: "Lahore, Pakistan", link: null },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.link?.startsWith('http') ? "_blank" : "_self"}
                rel="noreferrer"
                className={`glass-card p-6 rounded-3xl flex items-center gap-6 group hover:border-blue-500/30 transition-all ${!item.link ? 'pointer-events-none' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-100">{item.val}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Bar */}
            <div className="glass-card p-8 rounded-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Connect across platforms</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, link: "https://github.com/Saifrehmangetgroup" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammad-saif-urrehman" },
                ].map((soc, i) => (
                  <a
                    key={i}
                    href={soc.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-xl hover:premium-gradient hover:text-white transition-all shadow-xl"
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <motion.div
            className="lg:col-span-7 glass-card p-10 rounded-[2.5rem] relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />

            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Write a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 outline-none focus:border-blue-500 transition-colors text-gray-800 dark:text-white text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 outline-none focus:border-blue-500 transition-colors text-gray-800 dark:text-white text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 outline-none focus:border-blue-500 transition-colors text-gray-800 dark:text-white text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 outline-none focus:border-blue-500 transition-colors text-gray-800 dark:text-white text-sm resize-none"
                ></textarea>
              </div>

              <button
                disabled={status === "loading"}
                type="submit"
                className={`w-full premium-gradient text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "loading" ? (
                  "Sending Message..."
                ) : status === "success" ? (
                  <>Message Sent Successfully! <FaCheckCircle /></>
                ) : status === "error" ? (
                  <>Failed to Send <FaExclamationCircle /></>
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </button>

              {status === "success" && (
                <p className="text-center text-green-500 text-xs font-bold animate-bounce mt-4">
                  Thank you! I'll get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-500 text-xs font-bold mt-4">
                  Something went wrong. Please try again or use WhatsApp.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
