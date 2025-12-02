import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-0 md:px-3">

        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s <span className="text-blue-600">Connect</span>
        </motion.h2>
        <p className="text-center text-gray-600 mb-12">
          Open to freelance, remote, and full-time opportunities — feel free to reach out.
        </p>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            <form className="space-y-5">

              <div>
                <label className="block text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  placeholder="Collaboration or project"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="mr-2" /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Get in touch</h3>

            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <a
                  href="mailto:muhammadsaifrehman.6987@gmail.com"
                  className="text-gray-700 hover:underline"
                >
                  muhammadsaifrehman.6987@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-purple-600 text-xl" />
                <a href="tel:+923083152045" className="text-gray-700 font-semibold">
                  +92 3083152045
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-500 text-xl" />
                <a
                  href="https://wa.me/923083152045"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  WhatsApp Chat
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <span className="text-gray-700">Lahore, Pakistan</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <p className="font-medium mb-3">Social</p>
              <div className="flex space-x-4">
                <a href="https://github.com/yourGitHubUser" target="_blank" rel="noreferrer">
                  <FaGithub className="text-gray-700 text-2xl hover:text-black transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-saif-urrehman"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800 transition" />
                </a>
                <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noreferrer">
                  <FaTwitter className="text-sky-500 text-2xl hover:text-sky-700 transition" />
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <FaDownload className="mr-2" /> Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
