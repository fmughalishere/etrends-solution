"use client";

import { useState } from "react";
import { CASE_STUDIES, PORTFOLIO_STATS, PORTFOLIO_CLIENTS } from "../../constants";
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
    <main className="bg-white min-h-screen text-[#0a1d4a] overflow-x-hidden">
            <section className="relative h-[65vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner.jpeg"
            alt="Portfolio Header"
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
              <span className="text-white">Our Work</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-white">
              Portfolios
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <aside className="lg:col-span-3">
            <div className="sticky top-32">
              <div className="mb-8">
                <div className="w-10 h-[3px] bg-[#00aef0] mb-4" />
                <h2 className="text-xl font-bold uppercase tracking-tighter text-[#0a1d4a]">
                  Filter By Category
                </h2>
              </div>

              <ul className="space-y-4">
                {["Show All", "SEO", "Web Design", "Google Ads", "Immigration"].map((cat) => (
                  <li key={cat} className="flex items-center gap-3">
                    <div
                      className={`h-[2px] transition-all duration-300 ${activeCategory === cat ? "bg-[#00aef0] w-10" : "bg-gray-100 w-6"}`}
                    />
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[11px] font-bold uppercase tracking-[2px] transition-colors ${
                        activeCategory === cat ? "text-[#0a1d4a]" : "text-gray-400 hover:text-[#00aef0]"
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
                <div className="relative aspect-video rounded-[40px] overflow-hidden border-8 border-gray-50 shadow-2xl">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[4px] mb-4">
                    {study.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0a1d4a] tracking-tighter mb-6 group-hover:text-[#00aef0] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {study.description}
                  </p>
                  <div className="text-4xl font-black text-gray-100 mb-8 uppercase italic transition-colors group-hover:text-[#00aef0]/10">
                    {study.stats}
                  </div>

                  <Link
                    href={`/portfolio/${study.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "")}`}
                    className="group/btn relative flex items-center gap-3 px-10 py-4 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-widest rounded-full overflow-hidden transition-all shadow-xl shadow-[#0a1d4a]/20"
                  >
                    <span className="relative z-10">View Case Study</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {PORTFOLIO_STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-6xl font-black text-[#0a1d4a] mb-2">
                {stat.value}
              </h3>
              <p className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-[#0a1d4a]">Our Global Partners</h2>
            <div className="w-16 h-[3px] bg-[#00aef0] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 bg-gray-100 border border-gray-100">
            {PORTFOLIO_CLIENTS.map((client, i) => (
              <div
                key={i}
                className="h-32 flex items-center justify-center bg-white p-6 text-center group cursor-default transition-all"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#0a1d4a] transition-colors">
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