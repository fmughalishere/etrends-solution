"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Since 2017
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Digital <span className="text-blue-500 italic">Revolution.</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Leading the travel industry across UK, USA, and Pakistan with
            data-driven strategies and smart automation.
          </p>
        </header>
        <div className="glass p-8 md:p-16 rounded-[60px] border-white/10 relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full" />

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden border-2 border-blue-500/20 shadow-2xl">
                <Image
                  src="/profile.jpeg"
                  alt="CEO E_trends Solutions"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border-white/10 hidden md:block">
                <p className="text-xl font-bold">Hassan Ali</p>
                <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase">
                  CEO & Founder
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              <h2 className="text-blue-500 uppercase tracking-widest font-black text-sm mb-6">
                CEO Message
              </h2>
              <p className="text-3xl md:text-4xl font-bold mb-10 italic leading-tight text-white/90">
                "Our mission is to bring a digital revolution to travel
                businesses globally, empowering them with the latest tech and
                automation."
              </p>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
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
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold transition-all inline-block"
                >
                  Work With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-10 rounded-[40px]">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              Innovation
            </h3>
            <p className="text-gray-400">
              Constantly evolving our AI chatbots and CRM tools to keep you
              ahead of the curve.
            </p>
          </div>
          <div className="glass p-10 rounded-[40px]">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              Global Reach
            </h3>
            <p className="text-gray-400">
              Expertise in UK flight sectors, USA tours, and Pakistan's growing
              travel market.
            </p>
          </div>
          <div className="glass p-10 rounded-[40px]">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Results</h3>
            <p className="text-gray-400">
              100+ Happy clients who have seen real ROI and business scaling
              with our strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
