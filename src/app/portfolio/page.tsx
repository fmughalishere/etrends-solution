"use client";

import { useState } from "react";
import {
  CASE_STUDIES,
  PORTFOLIO_STATS,
  PORTFOLIO_CLIENTS,
} from "../../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Show All");
  const filteredProjects =
    activeCategory === "Show All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) =>
          study.category.includes(activeCategory.split(" ")[0]),
        );

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <section className="relative h-[60vh] w-full flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/testimonials.jpeg"
            alt="Portfolio"
            fill
            className="object-cover grayscale"
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
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-6">
            Portfolios
          </h1>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3">
            <div className="sticky top-32">
              <div className="mb-6">
                <svg width="40" height="10" viewBox="0 0 71 16" fill="none">
                  <path
                    d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                    stroke="#00aef0"
                    strokeWidth="3"
                  />
                </svg>
                <h2 className="text-2xl font-bold uppercase tracking-tight mt-2">
                  Filter By Category:
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  "Show All",
                  "SEO",
                  "Web Design",
                  "Google Ads",
                  "Immigration",
                ].map((cat) => (
                  <li key={cat} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-[2px] transition-all ${activeCategory === cat ? "bg-[#00aef0] w-10" : "bg-white/10"}`}
                    />
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`text-xs font-bold uppercase tracking-[2px] transition-colors ${
                        activeCategory === cat
                          ? "text-[#00aef0]"
                          : "text-gray-500 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-24">
            {filteredProjects.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center group"
              >
                <div className="relative aspect-video overflow-hidden bg-black border border-white/5">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[4px] mb-4">
                    {study.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-6 group-hover:text-[#00aef0] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {study.description}
                  </p>
                  <div className="text-3xl font-black text-white/20 mb-8 uppercase italic">
                    {study.stats}
                  </div>

                  <Link
                    href={`/portfolio/${study.title
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]/g, "")}`}
                    className="group/btn relative flex items-center gap-3 px-8 py-4 border border-white text-white font-bold uppercase text-[10px] tracking-widest overflow-hidden"
                  >
                    <span className="relative z-10">View Work</span>
                    <ArrowRight className="relative z-10 w-4 h-4" />
                    <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {PORTFOLIO_STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-6xl font-black text-[#00aef0] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[3px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
              Our Global Partners
            </h2>
            <div className="w-12 h-[2px] bg-[#00aef0] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 bg-white/5 border border-white/5">
            {PORTFOLIO_CLIENTS.map((client, i) => (
              <div
                key={i}
                className="h-32 flex items-center justify-center bg-black p-6 text-center group cursor-default transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-[#00aef0] transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
