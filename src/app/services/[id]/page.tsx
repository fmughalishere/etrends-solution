"use client";

import { useParams, notFound } from "next/navigation";
import { SERVICES_DATA } from "../../../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SingleServicePage() {
  const params = useParams();
  const service = SERVICES_DATA.find((s) => s.id === params.id);

  if (!service) return notFound();

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <section className="relative h-[65vh] md:h-[75vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/s1.jpeg"
            alt={service.title}
            fill
            className="object-cover opacity-40 transition-transform duration-[10s] hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a] via-[#0a1d4a]/60 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px] mb-8 hover:gap-4 transition-all"
            >
              <ArrowLeft size={14} /> Back to Services
            </Link>

            <div className="mb-4">
              <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
                <path
                  d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                  stroke="#00aef0"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#00aef0]">{service.title}</span>
            </nav>

            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-tight">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="w-16 h-[3px] bg-[#00aef0] mb-8" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d4a] uppercase tracking-tight mb-8 leading-tight">
               {service.tagline} <br />
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
              {service.detailedContent}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Data-driven strategies",
                "Advanced AI automation",
                "Measurable ROI growth",
                "Global market expertise",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#00aef0] w-5 h-5" />
                  <span className="text-[#0a1d4a] font-semibold text-sm uppercase tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-[2px] rounded-full overflow-hidden transition-all shadow-xl shadow-[#0a1d4a]/20"
            >
              <span className="relative z-10">Start Your Project</span>

              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-2" />

              <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-[60px] border-[12px] border-gray-50 shadow-2xl overflow-hidden group"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          
          <div>
            <p className="text-4xl font-bold text-[#0a1d4a] tracking-tighter">
              97%
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#00aef0] mt-2">
              Client Success
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-[#0a1d4a] tracking-tighter">
              3.8x
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#00aef0] mt-2">
              Lead Growth
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-[#0a1d4a] tracking-tighter">
              24/7
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#00aef0] mt-2">
              Smart Support
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-[#0a1d4a] tracking-tighter">
              150+
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#00aef0] mt-2">
              Global Projects
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}