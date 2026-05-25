"use client";

import { SERVICES_DATA } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
            <section className="relative h-[60vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/services.jpeg" 
            alt="Services" fill className="object-cover opacity-20 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="mb-4">
            <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
              <path d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11" stroke="#00aef0" strokeWidth="3" />
            </svg>
          </div>
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>{">"}</span>
            <span className="text-[#00aef0]">Services</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
            Services
          </h1>
        </div>
      </section>
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5">
            {SERVICES_DATA.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className="group relative h-[300px] bg-black overflow-hidden flex flex-col justify-end p-10"
              >
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
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                     <ArrowRight className="text-black" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}