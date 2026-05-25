"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Target, Award } from "lucide-react";
import { ABOUT_DATA } from "../../constants";

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <section className="relative h-[60vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner.jpeg"
            alt="About Us"
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
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-[#00aef0]">About</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
            About Us
          </h1>
        </div>
      </section>

      <section className="py-24 border-b border-white/5 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-[2px] bg-[#00aef0] mb-8" />
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-tight mb-8">
                {ABOUT_DATA.about_us_title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                {ABOUT_DATA.about_us_desc}
              </p>
              <div className="flex gap-10">
                <div>
                  <div className="text-4xl font-bold text-white tracking-tighter">
                    7+
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#00aef0]">
                    Years Exp
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white tracking-tighter">
                    150+
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#00aef0]">
                    Global Projects
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-700 border border-white/5">
              <Image
                src="/hero-banner.jpeg"
                alt="Process"
                fill
                className="object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] relative border border-white/10 overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Hassan Ali"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#00aef0] p-8 text-black hidden md:block">
              <p className="text-xl font-black uppercase tracking-tighter">
                Hassan Ali
              </p>
              <p className="text-xs font-bold uppercase tracking-[2px]">
                CEO & Founder
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-6">
              <svg width="40" height="10" viewBox="0 0 71 16" fill="none">
                <path
                  d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                  stroke="#00aef0"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <h3 className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[4px] mb-6">
              CEO Message
            </h3>
            <blockquote className="text-2xl md:text-2xl italic leading-snug mb-10 text-white/90">
              "{ABOUT_DATA.ceo_message}"
            </blockquote>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-10 py-5 border-2 border-white text-white font-bold uppercase text-xs tracking-[2px] overflow-hidden"
            >
              <span className="relative z-10">Discuss Vision</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5">
            <AboutValueCard
              icon={<Target size={30} />}
              title="Innovation"
              desc="Constantly evolving our AI chatbots and CRM tools to keep you ahead of the curve."
            />
            <AboutValueCard
              icon={<Globe size={30} />}
              title="Global Reach"
              desc="Expertise in UK flight sectors, USA tours, and Pakistan's growing travel market."
            />
            <AboutValueCard
              icon={<Award size={30} />}
              title="Results"
              desc="100+ Happy clients who have seen real ROI and business scaling with our strategies."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutValueCard({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative h-[300px] bg-black overflow-hidden flex flex-col justify-center p-12 text-center items-center">
      <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

      <div className="relative z-10">
        <div className="mb-6 text-[#00aef0] group-hover:text-black transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4 group-hover:text-black transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm group-hover:text-black/80 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
}
