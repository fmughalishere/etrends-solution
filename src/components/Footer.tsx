"use client";

import Link from "next/link";
import { CONTACT_INFO } from "../constants";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { ArrowRight, MapPin } from "lucide-react";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div>
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lets-talk.jpeg"
            alt="CTA Business"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a]/95 via-[#0a1d4a]/70 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#00aef0] mb-4">
              Work With Us
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tighter leading-tight">
              We're Interested in Talking <br /> About Your Business.
            </h2>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-[#00aef0] text-[#0a1d4a] font-bold uppercase text-[12px] tracking-[2px] rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-[#00aef0]/20"
            >
              <span className="relative z-10">Let's Get Started</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
      <footer className="bg-[#0a1d4a] pt-24 pb-12 overflow-hidden border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div>
              <Image 
                src="/navbar-logo.png" 
                alt="Footer Logo" 
                width={180} 
                height={50} 
                className="mb-10"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
                Stay Updated with Tech Trends
              </h3>
              <div className="flex items-center border-b border-white/20 pb-4 max-w-md group focus-within:border-[#00aef0] transition-colors">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-gray-400"
                />
                <button className="text-xs font-bold uppercase tracking-[2px] text-[#00aef0] hover:text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#00aef0]">
                   <MapPin size={18} />
                   <h4 className="text-[10px] font-bold uppercase tracking-[4px]">Pakistan</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#00aef0]/30 pl-4">
                  {CONTACT_INFO.address}
                </p>
                <p className="text-white text-xs font-bold">{CONTACT_INFO.phone}</p>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 text-center">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {["Services", "Our Work", "About Us", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Contact Us" ? "/contact" : 
                    item === "Our Work" ? "/portfolio" : 
                    `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-[11px] font-bold uppercase tracking-[3px] text-gray-300 hover:text-[#00aef0] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-5">
              {[
                { icon: FaInstagram, link: CONTACT_INFO.socials.instagram },
                { icon: FaFacebookF, link: CONTACT_INFO.socials.facebook },
                { icon: FaLinkedinIn, link: CONTACT_INFO.socials.linkedin },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.link}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#00aef0] hover:text-[#0a1d4a] transition-all duration-300"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>

            <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[3px]">
              etrendssolutions.com © {new Date().getFullYear()}.
            </div>
          </div>
        </div>
        <Link
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          className="fixed bottom-10 right-10 bg-[#25D366] p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] text-white shadow-green-500/20"
        >
          <FaWhatsapp size={28} />
        </Link>
      </footer>
    </div>
  );
}
