"use client";

import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Target, Cpu, ArrowRight } from "lucide-react";
import { SERVICES_DATA, PORTFOLIO_CLIENTS } from "../constants";

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Hero />
      <section className="py-0 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          <ValueCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Imaginative Solutions"
            desc="Bespoke software and creative strategies tailored specifically to your business's unique digital needs."
            highlight={false}
          />
          <ValueCard
            icon={<Target className="w-8 h-8" />}
            title="Visionary Concepts"
            desc="Transforming forward-thinking ideas into powerful, practical applications that drive global success."
            highlight={true} // Highlighted with Navy Blue
          />
          <ValueCard
            icon={<Cpu className="w-8 h-8" />}
            title="Tech-Driven Results"
            desc="Accelerated business growth through cutting-edge AI automation and modern technology stacks."
            highlight={false}
          />
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Years Experience", value: "7+" },
            { label: "Global Office", value: "1" },
            { label: "Projects Completed", value: "150+" },
            { label: "Client Growth", value: "7.8x" },
          ].map((stat, i) => (
            <div key={i} className="border-l border-gray-200 pl-6">
              <h3 className="text-4xl font-bold text-[#0a1d4a] mb-2">
                {stat.value}
              </h3>
              <p className="text-[#00aef0] font-bold uppercase tracking-widest text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="w-12 h-[2px] bg-[#00aef0] mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold text-[#0a1d4a] uppercase tracking-tight">
                Our Specialized <br /> Services
              </h2>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-3 text-[#0a1d4a] font-bold uppercase tracking-widest text-xs hover:text-[#00aef0] transition-colors"
            >
              Explore All Services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-gray-100 border border-gray-100">
            {SERVICES_DATA.slice(0, 3).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative h-[300px] bg-white overflow-hidden flex flex-col justify-end p-10"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0a1d4a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[1px] bg-[#0a1d4a] group-hover:bg-[#00aef0] transition-all" />
                    <h3 className="text-lg font-bold text-[#0a1d4a] uppercase tracking-widest group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 group-hover:text-gray-300 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 border-t border-gray-100 overflow-hidden bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-12">
          <p className="text-[#00aef0] text-[10px] font-bold tracking-[4px] uppercase">
            Our Global Partners
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 md:gap-32 whitespace-nowrap w-max"
            animate={{ x: ["0%", "-10%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...PORTFOLIO_CLIENTS, ...PORTFOLIO_CLIENTS].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-2xl md:text-4xl font-bold uppercase tracking-widest text-gray-300 hover:text-[#0a1d4a] transition-all duration-300 cursor-default"
              >
                {client}
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
    <div
      className={`p-16 border border-gray-50 flex flex-col items-center text-center transition-all duration-700 ${
        highlight 
        ? "bg-[#0a1d4a] text-white shadow-2xl z-10" 
        : "bg-white text-[#0a1d4a] hover:bg-gray-50"
      }`}
    >
      <div className={`mb-8 scale-125 ${highlight ? "text-[#00aef0]" : "text-[#00aef0]"}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${highlight ? "text-gray-300" : "text-gray-500"}`}>
        {desc}
      </p>
    </div>
  );
}