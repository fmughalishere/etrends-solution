"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Quote, Mail, Sparkles } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { ABOUT_DATA } from "../../constants";

const STATS = [
  { value: "8+", label: "Years of Excellence" },
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "15+", label: "Industry Awards" },
];

export default function CEOMessagePage() {
  return (
    <main className="bg-[#f8fbff] min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative h-[75vh] flex items-end overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0">
          <Image
            src="/s1.jpeg"
            alt="CEO"
            fill
            priority
            className="object-cover scale-110 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4a] via-[#0a1d4a]/85 to-[#0a1d4a]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a]/70 via-transparent to-[#0a1d4a]/70" />
        </div>

        {/* decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#00aef0]" />
              <span className="text-[#00aef0] uppercase tracking-[5px] text-xs font-bold">
                Founder & CEO
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              CEO <br /> Message
            </h1>

            <p className="text-white/70 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
              Building innovation-driven digital experiences that transform
              businesses globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative bg-white border-b border-[#eef3fc]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 -mt-px">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`py-10 px-6 text-center md:text-left ${
                  i !== 0 ? "border-l border-[#eef3fc]" : ""
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#0a1d4a]">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN MESSAGE SECTION */}
      <section className="relative py-24">
        <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
          <Quote size={280} className="text-[#0a1d4a]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-24"
            >
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden shadow-[0_30px_80px_rgba(10,29,74,0.15)] border-[12px] border-white">
                  <Image
                    src="/profile.jpeg"
                    alt="Ali Hassan Wazir"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#0a1d4a] text-white rounded-3xl px-6 py-5 shadow-xl flex items-center gap-3 border-4 border-white">
                  <Sparkles size={22} className="text-[#00aef0]" />
                  <div>
                    <div className="text-sm font-bold leading-none">
                      Since 2016
                    </div>
                    <div className="text-[10px] uppercase tracking-[2px] text-white/60 mt-1">
                      Leading Innovation
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 hidden lg:flex flex-wrap gap-4">
                <Link
                  href="https://www.linkedin.com/company/109129070/"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-6 py-4 border border-[#d9e6ff] rounded-full text-[#0a1d4a] font-semibold hover:bg-white hover:shadow-md transition-all text-sm"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </Link>

                <Link
                  href="mailto:info@etrendssolutions.com"
                  className="inline-flex items-center gap-3 px-6 py-4 border border-[#d9e6ff] rounded-full text-[#0a1d4a] font-semibold hover:bg-white hover:shadow-md transition-all text-sm"
                >
                  <Mail size={16} />
                  Email
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >

              <span className="text-[#00aef0] text-xs font-bold uppercase tracking-[5px]">
                A Message To Our Clients
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-[#0a1d4a] leading-tight mt-6 mb-10">
                "We don't just create technology — we create{" "}
                <span className="text-[#00aef0]">future-ready growth.</span>"
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>{ABOUT_DATA.ceo_message}</p>

                <p>
                  Our mission is to empower brands with scalable digital
                  solutions, intelligent automation, and world-class customer
                  experiences that truly drive measurable impact.
                </p>

                <p>
                  We believe innovation should not only look modern — it should
                  create real business transformation.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 p-6 bg-white rounded-3xl shadow-[0_10px_40px_rgba(10,29,74,0.06)] border border-[#eef3fc]">
                <div className="w-20 h-20 shrink-0 rounded-full bg-[#0a1d4a] text-white flex items-center justify-center shadow-xl">
                  <Award size={36} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0a1d4a] uppercase tracking-tight">
                    Ali Hassan Wazir
                  </h3>

                  <p className="text-[#00aef0] uppercase tracking-[3px] text-xs font-bold mt-1">
                    Founder & CEO
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 mt-12">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-[2px] rounded-full overflow-hidden transition-all shadow-xl"
                >
                  <span className="relative z-10">Start a Conversation</span>

                  <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />

                  <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/109129070/"
                  target="_blank"
                  className="lg:hidden inline-flex items-center gap-3 px-8 py-5 border border-[#d9e6ff] rounded-full text-[#0a1d4a] font-semibold hover:bg-white transition-all"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </Link>

                <Link
                  href="mailto:info@etrendssolutions.com"
                  className="lg:hidden inline-flex items-center gap-3 px-8 py-5 border border-[#d9e6ff] rounded-full text-[#0a1d4a] font-semibold hover:bg-white transition-all"
                >
                  <Mail size={18} />
                  Email
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}