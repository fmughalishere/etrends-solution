"use client";

import { useParams, notFound } from "next/navigation";
import { CASE_STUDIES } from "../../../constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CaseStudyDetail() {
  const params = useParams();
  const project = CASE_STUDIES.find(
    (item) =>
      item.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]/g, "") === params.id,
  );

  if (!project) return notFound();

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <section className="relative h-[80vh] w-full flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px] mb-8 hover:gap-4 transition-all"
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
            <div className="mb-4">
              <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
                <path
                  d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                  stroke="#00aef0"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <span className="text-[#00aef0] text-xs font-bold uppercase tracking-[4px] mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold tracking-tighter uppercase leading-none max-w-4xl">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-24 border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-[4px] mb-4">
                  Key Result
                </h4>
                <div className="text-5xl md:text-7xl font-black text-[#00aef0] tracking-tighter italic">
                  {project.stats}
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">
                    Client Sector
                  </span>
                  <span className="text-white text-sm font-bold">
                    Travel & Tourism
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">
                    Service Type
                  </span>
                  <span className="text-white text-sm font-bold">
                    {project.category.split("—")[0]}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">
                    Region
                  </span>
                  <span className="text-white text-sm font-bold">UK / USA</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="w-12 h-[2px] bg-[#00aef0] mb-8" />
              <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight mb-8">
                Execution Strategy & <br /> Business Impact
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {[
                    "Custom conversion-optimized landing pages",
                    "Technical SEO & Content restructuring",
                    "Data-driven audience targeting",
                    "Automated lead nurturing systems",
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#00aef0] w-5 h-5 shrink-0" />
                      <span className="text-gray-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="mb-6 flex justify-center">
            <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
              <path
                d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                stroke="#00aef0"
                strokeWidth="3"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter uppercase">
            Looking for similar results?
          </h2>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 px-12 py-5 border-2 border-[#00aef0] text-white font-bold uppercase text-xs tracking-[2px] overflow-hidden"
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </Link>
        </div>
      </section>
    </main>
  );
}
