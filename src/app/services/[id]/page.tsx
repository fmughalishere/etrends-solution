"use client";

import { useParams, notFound } from "next/navigation";
import { SERVICES_DATA } from "../../../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SingleServicePage() {
  const params = useParams();
  const service = SERVICES_DATA.find((s) => s.id === params.id);

  if (!service) return notFound();

  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/s1.jpeg" 
            alt={service.title}
            fill
            className="object-cover grayscale"
            priority
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
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>{">"}</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>{">"}</span>
            <span className="text-[#00aef0] uppercase">{service.title}</span>
          </nav>

          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            {service.title}
          </h1>
        </div>
      </section>
      <section className="py-24 px-6 border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="w-12 h-[2px] bg-[#00aef0] mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-8 leading-tight">
              Transforming Vision <br /> into Reality
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
              {service.detailedContent}
            </p>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-10 py-5 border-2 border-white text-white font-bold uppercase text-[11px] tracking-[2px] overflow-hidden"
            >
              <span className="relative z-10">Discuss Project</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-square border border-white/10 p-4 bg-black group overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
          </div>
        </div>
      </section>
    </main>
  );
}