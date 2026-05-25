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
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lets-talk.jpeg"
            alt="CTA"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-6">
            <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
              <path
                d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                stroke="#00aef0"
                strokeWidth="3"
              />
            </svg>
          </div>
          <p className="text-sm font-bold uppercase tracking-[3px] text-gray-400 mb-4">
            Let's Get in Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">
            We're Interested in Talking <br /> About Your Business.
          </h2>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 px-12 py-5 border-2 border-white font-bold uppercase text-[11px] tracking-[2px] overflow-hidden"
          >
            <span className="relative z-10">Lets Talk!</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </section>
      <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                Join for Company Updates
              </h3>
              <div className="flex items-center border-b border-white/20 pb-4 max-w-md group focus-within:border-[#00aef0] transition-colors">
                <input
                  type="email"
                  placeholder="Your E-mail Address"
                  className="bg-transparent flex-1 outline-none text-sm text-gray-300 placeholder:text-gray-600"
                />
                <button className="text-xs font-bold uppercase tracking-[2px] text-white hover:text-[#00aef0] transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[4px] mb-6">
                  Pakistan
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {["Services", "Our Work", "Contact us"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Contact us"
                      ? "/contact"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-[11px] font-bold uppercase tracking-[2px] text-white hover:text-[#00aef0] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-6 text-white">
              <Link
                href={CONTACT_INFO.socials.instagram}
                className="hover:text-[#00aef0] transition-colors"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href={CONTACT_INFO.socials.facebook}
                className="hover:text-[#00aef0] transition-colors"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                href={CONTACT_INFO.socials.linkedin}
                className="hover:text-[#00aef0] transition-colors"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
            <div className="text-gray-600 text-[10px] uppercase tracking-[2px]">
              etrendssolutions.co © {new Date().getFullYear()}. All Rights
              Reserved
            </div>
          </div>
        </div>
        <Link
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          className="fixed bottom-10 right-10 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] text-white"
        >
          <FaWhatsapp size={25} />
        </Link>
      </footer>
    </div>
  );
}
