"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "../../constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      formData.subject || "New Inquiry",
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="bg-white min-h-screen text-[#0a1d4a] overflow-x-hidden">
      <section className="relative h-[65vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lets-talk.jpeg"
            alt="Contact Us"
            fill
            className="object-cover opacity-40 transition-transform duration-[10s] hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a] via-[#0a1d4a]/70 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
                <path
                  d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                  stroke="#00aef0"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-[#00aef0] mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white">Get In Touch</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-white">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <div className="w-16 h-[3px] bg-[#00aef0] mb-8" />
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 text-[#0a1d4a]">
                  Interested in talking <br />{" "}
                  <span className="text-[#00aef0]">about your business?</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Have a bold idea? We have the team to build it. Reach out and
                  let's create something extraordinary together.
                </p>
              </div>

              <div className="space-y-10">
                <ContactInfoItem
                  label="Professional Email"
                  value={CONTACT_INFO.email}
                  icon={<Mail size={20} />}
                />
                <ContactInfoItem
                  label="Client Hotline"
                  value={CONTACT_INFO.phone}
                  icon={<Phone size={20} />}
                />
                <ContactInfoItem
                  label="Our Office Location"
                  value={CONTACT_INFO.address}
                  icon={<MapPin size={20} />}
                />
              </div>

              <div className="pt-10 border-t border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#00aef0] mb-6">
                  Connect With Us
                </p>
                <div className="flex gap-6">
                  {[
                    { icon: FaInstagram, link: CONTACT_INFO.socials.instagram },
                    { icon: FaLinkedin, link: CONTACT_INFO.socials.linkedin },
                    { icon: FaFacebookF, link: CONTACT_INFO.socials.facebook },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.link}
                      className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#0a1d4a] hover:bg-[#00aef0] hover:text-white transition-all duration-300"
                    >
                      <social.icon size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-gray-50 p-8 md:p-16 rounded-[40px] border border-gray-100 shadow-2xl shadow-[#0a1d4a]/5">
              <form onSubmit={handleSubmit} className="space-y-8 text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormInput
                    label="Full Name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
                    Service Required
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-gray-200 py-4 outline-none focus:border-[#00aef0] transition-colors text-sm appearance-none font-semibold text-[#0a1d4a]"
                  >
                    <option value="" className="bg-white">
                      Select a Service
                    </option>
                    <option value="Digital Marketing" className="bg-white">
                      Digital Marketing
                    </option>
                    <option value="Lead Generation" className="bg-white">
                      Lead Generation
                    </option>
                    <option value="SEO Optimization" className="bg-white">
                      SEO Optimization
                    </option>
                    <option value="Web Development" className="bg-white">
                      Web Design & Development
                    </option>
                    <option value="AI & Automation" className="bg-white">
                      AI & Automation
                    </option>
                    <option value="CRM Development" className="bg-white">
                      CRM Development
                    </option>
                    <option value="Content Creation" className="bg-white">
                      Content Creation
                    </option>
                    <option
                      value="Social Media Management"
                      className="bg-white"
                    >
                      Social Media Management
                    </option>
                    <option value="Other" className="bg-white">
                      Other Inquiry
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
                    Tell us more
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals..."
                    className="w-full bg-transparent border-b-2 border-gray-200 py-4 outline-none focus:border-[#00aef0] transition-colors text-sm resize-none font-semibold text-[#0a1d4a]"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full md:w-fit px-12 py-5 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-[2px] rounded-full overflow-hidden transition-all shadow-xl shadow-[#0a1d4a]/20"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Inquiry <ArrowRight size={16} />
                  </span>
                  <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Link
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        className="fixed bottom-10 right-10 bg-[#25D366] p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] text-white shadow-green-500/20"
      >
        <FaWhatsapp size={28} />
      </Link>
    </main>
  );
}

function ContactInfoItem({ label, value, icon }: any) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#00aef0] group-hover:bg-[#0a1d4a] group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[4px] text-gray-400 mb-2">
          {label}
        </p>
        <p className="text-xl font-bold tracking-tight text-[#0a1d4a] group-hover:text-[#00aef0] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );
}

function FormInput({ label, type = "text", ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
        {label}
      </label>
      <input
        type={type}
        {...props}
        required
        className="w-full bg-transparent border-b-2 border-gray-200 py-4 outline-none focus:border-[#00aef0] transition-colors text-sm font-semibold text-[#0a1d4a]"
      />
    </div>
  );
}
