"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@etrendssolutions.com?subject=${encodeURIComponent(
      formData.subject || "Contact Form Submission"
    )}&body=${encodeURIComponent(
      `Full Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 min-h-screen bg-[#020617] overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-14 md:mb-20">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-5 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
          >
            Let's Start a <br />
            <span className="text-blue-500">Conversation</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-2"
          >
            Have a bold idea? We have the team to build it. Reach out and let's
            create something extraordinary together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] md:rounded-[40px] p-6 sm:p-8 md:p-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full" />

              <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">
                Contact Information
              </h2>

              <div className="space-y-7 md:space-y-8">
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-1">
                      Email Us
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-semibold break-all">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-1">
                      Call Us
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-semibold">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-1">
                      Office Location
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                      {CONTACT_INFO.address ||
                        "Main Boulevard, Lahore, Pakistan"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-5">
                  Follow Our Trends
                </p>

                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: FaFacebookF,
                      color: "hover:bg-blue-600",
                      link: CONTACT_INFO.socials.facebook,
                    },
                    {
                      icon: FaInstagram,
                      color: "hover:bg-pink-600",
                      link: CONTACT_INFO.socials.instagram,
                    },
                    {
                      icon: FaLinkedinIn,
                      color: "hover:bg-blue-700",
                      link: CONTACT_INFO.socials.linkedin,
                    },
                    {
                      icon: FaWhatsapp,
                      color: "hover:bg-green-500",
                      link: `https://wa.me/${CONTACT_INFO.whatsapp}`,
                    },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                    >
                      <social.icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] md:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3">
                Send us a Message
                <MessageSquare className="text-blue-500" size={22} />
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 ml-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 ml-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 ml-2">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all appearance-none text-gray-400"
                  >
                    <option value="" className="bg-[#020617]">
                      Select Service
                    </option>

                    <option
                      value="SEO Optimization"
                      className="bg-[#020617]"
                    >
                      SEO Optimization
                    </option>

                    <option
                      value="Website Design"
                      className="bg-[#020617]"
                    >
                      Website Design
                    </option>

                    <option
                      value="Digital Marketing"
                      className="bg-[#020617]"
                    >
                      Digital Marketing
                    </option>

                    <option
                      value="Lead Generation"
                      className="bg-[#020617]"
                    >
                      Lead Generation
                    </option>

                    <option
                      value="Social Media Management"
                      className="bg-[#020617]"
                    >
                      Social Media Management
                    </option>

                    <option
                      value="Google Ads Management"
                      className="bg-[#020617]"
                    >
                      Google Ads Management
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 ml-2">
                    How can we help?
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}