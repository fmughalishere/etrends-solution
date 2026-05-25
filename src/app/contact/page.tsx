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
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <section className="relative h-[60vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lets-talk.jpeg"
            alt="Contact Us"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="mb-4">
            <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
              <path
                d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                stroke="#00aef0"
                strokeWidth="3"
              />
            </svg>
          </div>
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-[#00aef0]">Contact Us</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <div className="w-12 h-[2px] bg-[#00aef0] mb-8" />
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                  Interested in Talking <br /> About Your Business?
                </h2>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Have a bold idea? We have the team to build it. Reach out and
                  let's create something extraordinary together.
                </p>
              </div>
              <div className="space-y-10">
                <ContactInfoItem
                  label="Email Us"
                  value={CONTACT_INFO.email}
                  icon={<Mail size={18} />}
                />
                <ContactInfoItem
                  label="Call Us"
                  value={CONTACT_INFO.phone}
                  icon={<Phone size={18} />}
                />
                <ContactInfoItem
                  label="Our Office"
                  value={CONTACT_INFO.address}
                  icon={<MapPin size={18} />}
                />
              </div>
              <div className="pt-10 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#00aef0] mb-6">
                  Connect With Us
                </p>
                <div className="flex gap-6">
                  <Link
                    href={CONTACT_INFO.socials.instagram}
                    className="hover:text-[#00aef0] transition-colors"
                  >
                    <FaInstagram size={20} />
                  </Link>
                  <Link
                    href={CONTACT_INFO.socials.linkedin}
                    className="hover:text-[#00aef0] transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                  <Link
                    href={CONTACT_INFO.socials.facebook}
                    className="hover:text-[#00aef0] transition-colors"
                  >
                    <FaFacebookF size={20} />
                  </Link>
                  <Link
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="hover:text-[#00aef0] transition-colors"
                  >
                    <FaWhatsapp size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-[#0d0d0d] p-8 md:p-16 border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-8">
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
                  <label className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500">
                    Service Required
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00aef0] transition-colors text-sm appearance-none"
                  >
                    <option value="" className="bg-black">
                      Select a Service
                    </option>
                    <option value="Web Design" className="bg-black">
                      Website Design & Development
                    </option>
                    <option value="SEO" className="bg-black">
                      SEO Optimization
                    </option>
                    <option value="Lead Gen" className="bg-black">
                      Lead Generation
                    </option>
                    <option value="AI Automation" className="bg-black">
                      AI & Automation
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals..."
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00aef0] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full md:w-fit px-12 py-5 border-2 border-white text-white font-bold uppercase text-[11px] tracking-[2px] overflow-hidden"
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
        className="fixed bottom-10 right-10 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] text-white"
      >
        <FaWhatsapp size={25} />
      </Link>
    </main>
  );
}

function ContactInfoItem({ label, value, icon }: any) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="text-[#00aef0] mt-1">{icon}</div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[4px] text-gray-600 mb-2">
          {label}
        </p>
        <p className="text-xl font-bold tracking-tight text-white group-hover:text-[#00aef0] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );
}

function FormInput({ label, type = "text", ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500">
        {label}
      </label>
      <input
        type={type}
        {...props}
        required
        className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00aef0] transition-colors text-sm"
      />
    </div>
  );
}
