"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Target, Award, Quote } from "lucide-react";
import { ABOUT_DATA } from "../../constants";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-[#0a1d4a] overflow-hidden">
            <section className="relative h-[65vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lets-talk.jpeg"
            alt="About E-Trends"
            fill
            className="object-cover opacity-40 transition-transform duration-[10s] hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a] via-[#0a1d4a]/70 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6">
              <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
                <path d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11" stroke="#00aef0" strokeWidth="4" />
              </svg>
            </div>
            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-[#00aef0] mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white">Our Story</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-white">
              Who We Are
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#00aef0] text-xs font-bold uppercase tracking-[5px] mb-4 block">Our Foundation</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight mb-8 text-[#0a1d4a]">
                Leading the <br /> <span className="text-[#00aef0]">Digital Evolution.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {ABOUT_DATA.about_us_desc}
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="border-l-4 border-[#00aef0] pl-6">
                  <div className="text-5xl font-bold text-[#0a1d4a] tracking-tighter">7+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">Years Experience</div>
                </div>
                <div className="border-l-4 border-[#00aef0] pl-6">
                  <div className="text-5xl font-bold text-[#0a1d4a] tracking-tighter">150+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">Global Partners</div>
                </div>
              </div>
            </motion.div>

            <div className="relative aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-[#0a1d4a]/10 border-8 border-gray-50">
              <Image
                src="/hero-banner.jpeg"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-5">
            <Quote size={300} className="text-[#0a1d4a]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <motion.div whileHover={{ scale: 1.02 }} className="relative aspect-[4/5] rounded-[60px] overflow-hidden border-[15px] border-white shadow-2xl">
                <Image
                  src="/profile.jpeg"
                  alt="Ali Hassan Wazir"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-6">
                <svg width="40" height="10" viewBox="0 0 71 16" fill="none">
                  <path d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11" stroke="#00aef0" strokeWidth="4" />
                </svg>
              </div>
              <h3 className="text-[#00aef0] text-xs font-bold uppercase tracking-[5px] mb-6">Message From CEO</h3>
              
              <p className="text-2xl md:text-4xl font-bold text-[#0a1d4a] leading-tight mb-8">
                "We don't just build software; <br /> we architect <span className="text-[#00aef0]">Growth Engines</span> for your business."
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                {ABOUT_DATA.ceo_message}
              </p>

              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-16 bg-[#0a1d4a] rounded-full flex items-center justify-center text-white">
                    <Award size={30} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-[#0a1d4a] tracking-tight uppercase">Ali Hassan Wazir</h4>
                    <p className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px]">Founder & CEO</p>
                 </div>
              </div>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-4 px-12 py-5 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-[2px] rounded-full overflow-hidden transition-all shadow-xl shadow-[#0a1d4a]/20"
              >
                <span className="relative z-10">Start a Conversation</span>
                <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0a1d4a] uppercase tracking-tighter">Our Core Pillars</h2>
              <div className="w-16 h-[3px] bg-[#00aef0] mx-auto mt-6" />
           </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AboutValueCard
              icon={<Target size={40} />}
              title="Innovation"
              desc="Constantly evolving our AI chatbots and CRM tools to keep you ahead of the digital curve."
            />
            <AboutValueCard
              icon={<Globe size={40} />}
              title="Global Reach"
              desc="Tailored expertise for UK flight sectors, USA tours, and Pakistan's growing travel markets."
            />
            <AboutValueCard
              icon={<Award size={40} />}
              title="Proven Results"
              desc="Delivering measurable ROI and scalable business growth for over 100+ global clients."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutValueCard({ icon, title, desc }: any) {
  return (
    <div className="group relative p-12 bg-gray-50 rounded-[40px] overflow-hidden transition-all duration-500 border border-transparent hover:border-[#00aef0] hover:shadow-2xl hover:shadow-[#0a1d4a]/5">
      <div className="relative z-10">
        <div className="mb-8 text-[#0a1d4a] transition-transform duration-500 group-hover:scale-110 group-hover:text-[#00aef0]">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#0a1d4a] uppercase tracking-widest mb-4">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00aef0]/5 rounded-full transition-all duration-500 group-hover:scale-[3]" />
    </div>
  );
}