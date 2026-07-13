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

      {/* VALUE PROPS */}
      <section className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              icon={<Sparkles className="w-7 h-7" />}
              title="Imaginative Solutions"
              desc="Bespoke software and creative strategies tailored specifically to your business's unique digital needs."
              highlight={false}
              delay={0}
            />
            <ValueCard
              icon={<Target className="w-7 h-7" />}
              title="Visionary Concepts"
              desc="Transforming forward-thinking ideas into powerful, practical applications that drive global success."
              highlight={true}
              delay={0.12}
            />
            <ValueCard
              icon={<Cpu className="w-7 h-7" />}
              title="Tech-Driven Results"
              desc="Accelerated business growth through cutting-edge AI automation and modern technology stacks."
              highlight={false}
              delay={0.24}
            />
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="relative py-24 bg-[#0a1d4a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {[
              { label: "Years Experience", value: "7+" },
              { label: "Global Office", value: "1" },
              { label: "Projects Completed", value: "150+" },
              { label: "Client Growth", value: "7.8x" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center md:text-left"
              >
                <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-3">
                  {stat.value}
                </h3>
                <div className="w-8 h-[2px] bg-[#00aef0] mx-auto md:mx-0 mb-3" />
                <p className="text-white/50 font-bold uppercase tracking-widest text-[10px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="w-12 h-[2px] bg-[#00aef0] mb-4" />
              <h2 className="text-4xl md:text-6xl font-black text-[#0a1d4a] uppercase tracking-tighter">
                Specialized <br /> Services
              </h2>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-3 text-[#0a1d4a] font-bold uppercase tracking-widest text-xs hover:text-[#00aef0] transition-colors"
            >
              Explore All Services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 3).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group relative h-[420px] md:h-[460px] rounded-[30px] bg-black overflow-hidden flex flex-col justify-end p-8 md:p-10 block"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[1]" />
                  <div className="absolute inset-0 bg-[#0a1d4a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-[2]" />

                  <span className="absolute top-8 right-8 z-[3] text-white/30 font-black text-sm tracking-widest group-hover:text-[#00aef0] transition-colors">
                    0{idx + 1}
                  </span>

                  <div className="relative z-[3]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-[2px] bg-[#00aef0]" />
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 max-w-xs">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-24 border-t border-gray-100 overflow-hidden bg-[#f8fbff]">
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-14">
          <p className="text-[#00aef0] text-[10px] font-bold tracking-[4px] uppercase">
            Our Global Partners
          </p>
        </div>

        <div className="relative w-full overflow-hidden space-y-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#f8fbff] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#f8fbff] to-transparent" />
                   <motion.div
            className="flex gap-16 md:gap-32 whitespace-nowrap w-max"
            animate={{ x: ["0%", "-10%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {[...PORTFOLIO_CLIENTS, ...PORTFOLIO_CLIENTS].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-2xl md:text-4xl font-black uppercase tracking-widest text-gray-300 hover:text-[#0a1d4a] transition-all duration-300 cursor-default"
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

function ValueCard({ icon, title, desc, highlight, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative p-12 md:p-14 rounded-[30px] flex flex-col items-center text-center transition-all duration-500 ${
        highlight
          ? "bg-[#0a1d4a] text-white shadow-2xl shadow-[#0a1d4a]/20 md:-translate-y-4"
          : "bg-[#f8fbff] text-[#0a1d4a] border border-[#eef3fc] hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0a1d4a]/5"
      }`}
    >
      <div
        className={`mb-8 w-16 h-16 rounded-2xl flex items-center justify-center ${
          highlight ? "bg-white/10 text-[#00aef0]" : "bg-white text-[#00aef0]"
        }`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          highlight ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {desc}
      </p>
    </motion.div>
  );
}
