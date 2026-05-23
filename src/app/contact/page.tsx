"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import { CONTACT_INFO } from "../../constants";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#020617]">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-20">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
          >
            Let's Start a <br />{" "}
            <span className="text-blue-500">Conversation</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Have a bold idea? We have the team to build it. Reach out and let's
            create something extraordinary together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass p-10 rounded-[40px] border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />

              <h2 className="text-3xl font-bold mb-10">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 glass rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                      Email Us
                    </p>
                    <p className="text-xl font-semibold">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-4 glass rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                      Call Us
                    </p>
                    <p className="text-xl font-semibold">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-4 glass rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                      Office Location
                    </p>
                    <p className="text-xl font-semibold leading-relaxed">
                      {CONTACT_INFO.address ||
                        "Main Boulevard, Lahore, Pakistan"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-10 border-t border-white/5">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
                  Follow Our Trends
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: FaFacebookF, color: "hover:bg-blue-600" },
                    { icon: FaInstagram, color: "hover:bg-pink-600" },
                    { icon: FaLinkedinIn, color: "hover:bg-blue-700" },
                    { icon: FaWhatsapp, color: "hover:bg-green-500" },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href="#"
                      className={`p-4 glass rounded-2xl transition-all duration-300 text-gray-400 hover:text-white ${social.color}`}
                    >
                      <social.icon size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="glass p-8 md:p-12 rounded-[40px] border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                Send us a Message{" "}
                <MessageSquare className="text-blue-500" size={24} />
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">
                    Subject
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all appearance-none text-gray-400">
                    <option className="bg-[#020617]">Select Service</option>
                    <option className="bg-[#020617]">Web Development</option>
                    <option className="bg-[#020617]">Digital Marketing</option>
                    <option className="bg-[#020617]">UI/UX Design</option>
                    <option className="bg-[#020617]">SEO Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">
                    How can we help?
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20"
                >
                  Send Message <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
