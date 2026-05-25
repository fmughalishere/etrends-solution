"use client";

import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials"; // Import updated component
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Target, Zap, ArrowRight } from "lucide-react";
import { SERVICES_DATA, PORTFOLIO_CLIENTS } from "../constants";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      <Hero />
      <section className="py-0 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          <ValueCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Imaginative Solutions"
            desc="Specialize in crafting innovative software solutions. Tailored perfectly to your business's unique needs."
            highlight={false}
          />
          <ValueCard
            icon={<Target className="w-8 h-8" />}
            title="Visionary Concepts"
            desc="Transforming forward-thinking ideas into powerful, practical applications that drive success."
            highlight={true}
          />
          <ValueCard
            icon={<Zap className="w-8 h-8" />}
            title="Rapid Execution"
            desc="Delivering high-quality software at an accelerated pace, ensuring speed and excellence."
            highlight={false}
          />
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Years Experience", value: "7+" },
            { label: "Global Offices", value: "3" },
            { label: "Projects Completed", value: "150+" },
            { label: "Client Growth", value: "3.8x" },
          ].map((stat, i) => (
            <div key={i} className="border-l border-white/10 pl-6">
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-[#00aef0] font-bold uppercase tracking-widest text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <div className="w-12 h-[2px] bg-[#00aef0] mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
              We Can Help You With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative h-[250px] bg-black overflow-hidden flex flex-col justify-end p-10"
              >
                {/* Hover Background Fill */}
                <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[1px] bg-white group-hover:bg-navy-900 transition-all" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-widest group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 group-hover:text-black/80 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 border-t border-white/5 overflow-hidden bg-black">
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-12">
          <p className="text-[#00aef0] text-xs font-bold tracking-[4px] uppercase">
            Our Trusted Partners
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 md:gap-32 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...PORTFOLIO_CLIENTS, ...PORTFOLIO_CLIENTS].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-white text-2xl md:text-5xl font-black uppercase tracking-tighter opacity-20 grayscale hover:grayscale-0 hover:opacity-100 hover:text-[#00aef0] transition-all duration-300 cursor-default"
              >
                {client.split(" ")[0]}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}
function ValueCard({ icon, title, desc, highlight }: any) {
  return (
    <div className={`p-16 border border-white/5 flex flex-col items-center text-center transition-all duration-700 ${
      highlight ? "bg-[#00aef0] text-black" : "bg-transparent text-white"
    }`}>
      <div className={`mb-10 scale-125 ${highlight ? "text-black" : "text-[#00aef0]"}`}>{icon}</div>
      <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">{title}</h3>
      <p className={`text-sm leading-relaxed ${highlight ? "text-black/70" : "text-gray-400"}`}>{desc}</p>
    </div>
  );
}