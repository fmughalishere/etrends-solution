"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 bg-[#020617] overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 md:mb-24">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500 font-bold tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block"
          >
            Since 2017
          </motion.span>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tight leading-tight"
          >
            Digital{" "}
            <span className="text-blue-500 italic">
              Revolution.
            </span>
          </motion.h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-xl max-w-4xl mx-auto leading-relaxed px-2">
            Leading the travel industry across UK, USA, and Pakistan with
            data-driven strategies and smart automation.
          </p>

        </header>
        <div className="relative overflow-hidden rounded-[30px] md:rounded-[60px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-8 md:p-16 mb-20 md:mb-32">
          <div className="absolute top-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-blue-600/10 blur-[120px] rounded-full" />

          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >

              <div className="aspect-[4/5] relative rounded-[25px] md:rounded-[40px] overflow-hidden border border-blue-500/20 shadow-2xl">

                <Image
                  src="/profile.jpeg"
                  alt="CEO"
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />

              </div>
              <div className="relative md:absolute md:-bottom-6 md:-right-6 mt-5 md:mt-0 bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-3xl w-full md:w-fit">

                <p className="text-lg md:text-xl font-bold text-white">
                  Hassan Ali
                </p>

                <p className="text-blue-500 text-xs md:text-sm font-semibold tracking-widest uppercase">
                  CEO & Founder
                </p>

              </div>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >

              <h2 className="text-blue-500 uppercase tracking-[0.2em] font-black text-xs sm:text-sm mb-5 md:mb-6">
                CEO Message
              </h2>

              <p className="text-2xl sm:text-3xl md:text-4xl font-bold italic leading-snug text-white/90 mb-8 md:mb-10">
                "Our mission is to bring a digital revolution to travel
                businesses globally, empowering them with the latest tech and
                automation."
              </p>

              <div className="space-y-5 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">

                <p>
                  With more than 7 years of experience in high-competition
                  markets like the UK and USA, we understand the unique
                  challenges travel agencies face.
                </p>

                <p>
                  Innovation and trust are our core values. We don't just
                  provide services; we build long-term growth engines for our
                  partners.
                </p>

              </div>
              <div className="mt-10 md:mt-12">

                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold transition-all duration-300 text-sm sm:text-base"
                >
                  Work With Us
                </Link>

              </div>

            </motion.div>

          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-7 sm:p-10 rounded-[30px] md:rounded-[40px]">

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
              Innovation
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Constantly evolving our AI chatbots and CRM tools to keep you
              ahead of the curve.
            </p>

          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-7 sm:p-10 rounded-[30px] md:rounded-[40px]">

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
              Global Reach
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Expertise in UK flight sectors, USA tours, and Pakistan's growing
              travel market.
            </p>

          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-7 sm:p-10 rounded-[30px] md:rounded-[40px]">

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
              Results
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              100+ Happy clients who have seen real ROI and business scaling
              with our strategies.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}