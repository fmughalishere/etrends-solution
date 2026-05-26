"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.jpeg"
          alt="Digital Transformation"
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >          <div className="mb-6">
            <svg width="60" height="15" viewBox="0 0 71 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11" stroke="#00aef0" strokeWidth="3" />
            </svg>
          </div>
          <span className="block text-[#00aef0] text-sm md:text-base font-medium tracking-[2px] uppercase mb-4">
            Welcome to the Age of Digital Transformation
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Shaping the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Travel Businesses 
            </span> 
            <span className="text-[#00aef0]">.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mb-10">
            At E-Trends Solutions, we build, test, and deploy next-gen 
            digital infrastructures for travel agencies. Turning vision into 
            measurable growth across the UK, USA, and Pakistan.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border border-white text-white font-bold uppercase text-xs tracking-widest overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <Link
              href="/portfolio"
              className="flex items-center gap-2 px-8 py-4 text-white font-bold uppercase text-xs tracking-widest border border-transparent hover:border-white/20 transition-all"
            >
              Our Work
              <div className="w-1.5 h-1.5 rounded-full bg-[#00aef0]" />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="hidden lg:block absolute right-10 bottom-20 rotate-90 origin-right">
        <span className="text-white/20 text-[10px] uppercase tracking-[5px] font-bold">
          Innovation • Strategy • Growth
        </span>
      </div>
    </section>
  );
}