"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-white pt-32 lg:pt-0">
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#00aef0]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#0a1d4a]/5 blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0a1d4a] leading-[1.1] mb-6 tracking-tight">
              <span className="whitespace-nowrap">Shaping the Future</span>{" "}
              <span className="text-[#00aef0] whitespace-nowrap">
                of Travel Industry.
              </span>
            </h1>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
              At E-Trends Solutions, we empower travel agencies with
              high-performance marketing and AI-driven automation. Turning
              vision into measurable success across the UK, USA, and Pakistan.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-5 justify-center lg:justify-start mb-10 lg:mb-0">
              <Link
                href="/contact"
                className="group relative flex items-center gap-3 px-8 md:px-10 py-4 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] md:text-[12px] tracking-widest rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-[#0a1d4a]/20"
              >
                <span className="relative z-10">Get Started</span>

                <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />

                <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center gap-2 px-8 md:px-10 py-4 text-[#0a1d4a] font-bold uppercase text-[11px] md:text-[12px] tracking-widest border border-[#0a1d4a]/20 rounded-full hover:bg-[#0a1d4a]/5 transition-all"
              >
                Our Work
                <div className="w-1.5 h-1.5 rounded-full bg-[#00aef0]" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full flex justify-center pb-12 lg:pb-0"
          >
            <div className="relative z-10 rounded-[30px] md:rounded-[60px] overflow-hidden border-[6px] md:border-[15px] border-white shadow-2xl rotate-0 lg:rotate-2 w-full max-w-[500px] lg:max-w-full">
              <Image
                src="/hero-banner.jpeg"
                alt="Professional Business"
                width={600}
                height={700}
                className="w-full h-full object-cover transition-all duration-700"
                priority
              />
            </div>
            <div className="absolute top-1/2 -right-2 md:-right-10 bg-white p-4 md:p-6 rounded-2xl shadow-xl z-20 border border-gray-50 scale-[0.65] md:scale-100 origin-right">
              <p className="text-2xl md:text-3xl font-bold text-[#0a1d4a]">
                3.8x
              </p>

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Lead Growth
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
