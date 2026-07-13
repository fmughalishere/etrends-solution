"use client";

import { useState, useMemo } from "react";
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

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(CASE_STUDIES.map((s) => s.category).filter(Boolean))
    );
    return ["Show All", ...unique];
  }, []);

  const filteredProjects =
    activeCategory === "Show All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) =>
          study.category.includes(activeCategory.split(" ")[0])
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
        <div
          className="absolute inset-0 opacity-[0.06] z-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-[#00aef0] mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white">Our Work</span>
            </nav>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white">
              Portfolios
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="pt-16 pb-4">
        <div className="w-full px-6 md:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[2px] border transition-all ${
                  activeCategory === cat
                    ? "bg-[#0a1d4a] text-white border-[#0a1d4a]"
                    : "bg-white text-[#0a1d4a]/50 border-gray-200 hover:border-[#0a1d4a]/30 hover:text-[#0a1d4a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-full px-6 md:px-12">
          <div className="space-y-32">
            {filteredProjects.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center ${
                  i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative w-full h-[320px] md:h-[500px] xl:h-[400px] rounded-[40px] overflow-hidden shadow-2xl group">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-[#00aef0] text-[11px] font-bold uppercase tracking-[5px] mb-6">
                    {study.category}
                  </span>

                  <h2 className="text-4xl md:text-6xl xl:text-5xl font-black leading-[0.95] tracking-tight mb-8 text-[#0a1d4a]">
                    {study.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-[1.9] max-w-[700px] mb-10">
                    {study.description}
                  </p>

                  {study.stats && (
                    <div className="inline-flex items-center gap-4 mb-10 px-6 py-4 rounded-2xl bg-[#f8fbff] border border-[#eef3fc] w-fit">
                      <div className="w-1.5 h-10 bg-[#00aef0] rounded-full" />
                      <span className="text-2xl md:text-3xl font-black text-[#0a1d4a]">
                        {study.stats}
                      </span>
                    </div>
                  )}

                  <Link
                    href={`/portfolio/${study.title
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]/g, "")}`}
                    className="group/btn relative w-fit flex items-center gap-3 px-10 py-5 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-[3px] rounded-full overflow-hidden"
                  >
                    <span className="relative z-10">View Case Study</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                No projects found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

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

      {/* PARTNERS */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-[#0a1d4a]">
              Our Global Partners
            </h2>
            <div className="w-16 h-[3px] bg-[#00aef0] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {PORTFOLIO_CLIENTS.map((client, i) => (
              <div
                key={i}
                className="h-32 flex items-center justify-center bg-white rounded-2xl border border-[#eef3fc] p-6 text-center group cursor-default hover:border-[#00aef0]/30 hover:shadow-lg hover:shadow-[#0a1d4a]/5 transition-all"
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