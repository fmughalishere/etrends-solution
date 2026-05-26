"use client";

import { SERVICES_DATA, REVIEWS } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white min-h-screen text-[#0a1d4a] overflow-x-hidden">
            <section className="relative h-[65vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services.jpeg" 
            alt="Services Header"
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
              <span className="text-white">Our Specialties</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-white">
              Services
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
             <span className="text-[#00aef0] text-xs font-bold uppercase tracking-[5px] mb-4 block">What we do</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0a1d4a]">Expertise That Drives <br /> Global Growth</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-200 border border-gray-200">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative h-[400px] md:h-[450px] overflow-hidden flex flex-col justify-end p-8 md:p-12 bg-black"
              >                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[1]" />
                <div className="absolute inset-0 bg-[#0a1d4a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-[2]" />

                <div className="relative z-[3]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-[2px] bg-[#00aef0] transition-all" />
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 max-w-xs">
                    {service.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-[#00aef0] opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center gap-1 mb-8 text-[#00aef0]">
             {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>

          <div className="relative min-h-[300px] flex items-center justify-center">
            {REVIEWS.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeSlide === i ? 1 : 0, 
                  x: activeSlide === i ? 0 : 20,
                  display: activeSlide === i ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Quote className="w-12 h-12 text-[#00aef0]/20 mx-auto mb-8" />
                <p className="text-xl md:text-3xl font-medium text-[#0a1d4a] italic leading-snug mb-10">
                  "{rev.content}"
                </p>
                <div className="mt-12">
                   <h4 className="font-bold text-[#0a1d4a] uppercase tracking-widest text-sm">{rev.name}</h4>
                   <p className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px] mt-2">{rev.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12">
             {REVIEWS.slice(0, 5).map((_, i) => (
               <button 
                key={i} 
                onClick={() => setActiveSlide(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${activeSlide === i ? "w-12 bg-[#00aef0]" : "w-2 bg-[#0a1d4a]/10"}`}
               />
             ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0a1d4a] tracking-tighter uppercase mb-10">Ready to Transform?</h2>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-[2px] rounded-full overflow-hidden transition-all shadow-xl shadow-[#0a1d4a]/20"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
         </div>
      </section>

    </main>
  );
}