"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 md:pt-36">

      {/* Background Blur Effects */}
      <div className="absolute top-10 left-0 md:left-10 w-52 h-52 md:w-72 md:h-72 bg-blue-600/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-10 right-0 md:right-10 w-52 h-52 md:w-72 md:h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-bold tracking-[3px] mb-6">
            UK • USA • PAKISTAN
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">

            <span className="text-white">
              Transforming Travel
            </span>

            <br />

            <span className="text-blue-500 italic">
              Businesses Digitally
            </span>

          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 px-2">
            Empowering Travel & Service-Based Companies with cutting-edge
            digital solutions. We turn your vision into growth, leads, and
            long-term success.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white text-black px-8 sm:px-10 py-4 rounded-2xl font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300"
            >
              Book a Strategy Call
            </Link>

            <Link
              href="/portfolio"
              className="w-full sm:w-auto border border-white/10 bg-white/5 backdrop-blur-xl px-8 sm:px-10 py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-white"
            >
              View Our Work
              <ArrowRight size={20} />
            </Link>

          </div>

        </motion.div>
      </div>
    </section>
  );
}