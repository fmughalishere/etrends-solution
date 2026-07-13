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
    <main className="bg-white min-h-screen text-[#0a1d4a] overflow-x-hidden">
      <section className="relative h-[70vh] w-full flex items-end pb-24 overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-40 transition-transform duration-[10s] hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4a] via-transparent to-transparent" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.06] z-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-[#00aef0] text-[11px] font-bold tracking-[4px] mb-8 hover:gap-4 transition-all"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            <span className="text-[#00aef0] text-xs font-bold  tracking-[5px] mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter  leading-none text-white max-w-5xl">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-12">
              <div className="p-12 bg-gray-50 rounded-[40px]">
                <h4 className="text-gray-400 text-[11px] font-bold  tracking-[4px] mb-6">
                  Key Business Result
                </h4>
                <div className="text-6xl md:text-8xl font-black text-[#0a1d4a] tracking-tighter italic">
                  {project.stats}
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100 space-y-6">
                {[
                  { label: "Client Sector", value: "Travel & Tourism" },
                  {
                    label: "Service Type",
                    value: project.category.split("—")[0],
                  },
                  { label: "Growth Region", value: "UK / USA" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-gray-50 pb-4"
                  >
                    <span className="text-gray-400  text-[10px] font-bold tracking-widest">
                      {item.label}
                    </span>
                    <span className="text-[#0a1d4a] text-sm font-bold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="w-16 h-[3px] bg-[#00aef0] mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold text-[#0a1d4a]  tracking-tight mb-10 leading-tight">
                Execution Strategy & <br />{" "}
                <span className="text-[#00aef0]">Measurable Impact.</span>
              </h2>
              <div className="max-w-none">
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    "Custom conversion funnels",
                    "High-authority backlink systems",
                    "Advanced audience pre-screening",
                    "Intelligent intake automation",
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="text-[#00aef0] w-6 h-6 shrink-0" />
                      <span className="text-[#0a1d4a] text-sm font-bold  tracking-wide">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-[#0a1d4a] mb-12 tracking-tighter ">
            Achieve Your Growth Potential
          </h2>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-[2px] rounded-full overflow-hidden transition-all shadow-xl shadow-[#0a1d4a]/20"
          >
            <span className="relative z-10">Start Your Project Today</span>
            <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </main>
  );
}
