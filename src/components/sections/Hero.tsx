"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-white mt-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#00aef0]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#0a1d4a]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6">
              <svg width="60" height="15" viewBox="0 0 71 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11" stroke="#00aef0" strokeWidth="3" />
              </svg>
            </div>

            <span className="block text-[#00aef0] text-sm md:text-base font-bold tracking-[3px] uppercase mb-4">
              Next-Gen Digital Infrastructure
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0a1d4a] leading-[1.1] mb-6 tracking-tight">
              Shaping the Future <br />
              <span className="text-[#00aef0]">of Travel Industry.</span>
            </h1>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-lg mb-10">
              At E-Trends Solutions, we empower travel agencies with high-performance 
              marketing and AI-driven automation. Turning vision into 
              measurable success across the UK, USA, and Pakistan.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="group relative flex items-center gap-3 px-10 py-4 bg-[#0a1d4a] text-white font-bold uppercase text-[12px] tracking-widest rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-[#0a1d4a]/20"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/portfolio"
                className="flex items-center gap-2 px-10 py-4 text-[#0a1d4a] font-bold uppercase text-[12px] tracking-widest border border-[#0a1d4a]/20 rounded-full hover:bg-[#0a1d4a]/5 transition-all"
              >
                Our Work
                <div className="w-1.5 h-1.5 rounded-full bg-[#00aef0]" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden border-[15px] border-white shadow-2xl rotate-2">
              <Image
                src="/hero-banner.jpeg" 
                alt="Professional Business"
                width={600}
                height={700}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00aef0]/10 rounded-full blur-2xl -z-10" />
            <div className="absolute top-1/2 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-50">
               <p className="text-3xl font-bold text-[#0a1d4a]">3.8x</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Lead Growth</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="text-[#0a1d4a]/10 text-[11px] uppercase tracking-[8px] font-black">
          Innovation • Strategy • Global Reach
        </span>
      </div>
    </section>
  );
}