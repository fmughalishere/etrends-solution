"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Quote, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { ABOUT_DATA } from "../../constants";

export default function CEOMessagePage() {
  return (
    <main className="bg-[#f8fbff] min-h-screen overflow-hidden">
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-[#0a1d4a]/10">
        <div className="absolute inset-0">
          <Image
            src="/s1.jpeg"
            alt="CEO"
            fill
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a] via-[#0a1d4a]/90 to-[#0a1d4a]/60" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#00aef0] uppercase tracking-[5px] text-xs font-bold">
              Founder & CEO
            </span>

            <h1 className="text-5xl md:text-5xl font-bold text-white uppercase leading-none mt-6 tracking-tight">
              CEO <br /> Message
            </h1>

            <p className="text-white/70 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
              Building innovation-driven digital experiences that transform
              businesses globally.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute top-20 right-10 opacity-5">
          <Quote size={280} className="text-[#0a1d4a]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden shadow-[0_30px_80px_rgba(10,29,74,0.15)] border-[12px] border-white">
                <Image
                  src="/profile.jpeg"
                  alt="Ali Hassan Wazir"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="mb-6">
                <svg width="60" height="15" viewBox="0 0 71 16" fill="none">
                  <path
                    d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11"
                    stroke="#00aef0"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              <span className="text-[#00aef0] text-xs font-bold uppercase tracking-[5px]">
                A Message To Our Clients
              </span>

              <h2 className="text-3xl md:text-6xl font-bold text-[#0a1d4a] leading-tight mt-6 mb-10">
                “We don't just create technology — we create{" "}
                <span className="text-[#00aef0]">future-ready growth.</span>”
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

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-[#0a1d4a] text-white flex items-center justify-center shadow-xl">
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
                  className="inline-flex items-center gap-3 px-8 py-5 border border-[#d9e6ff] rounded-full text-[#0a1d4a] font-semibold hover:bg-white transition-all"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </Link>

                <Link
                  href="mailto:info@etrendssolutions.com"
                  className="inline-flex items-center gap-3 px-8 py-5 border border-[#d9e6ff] rounded-full text-[#0a1d4a] font-semibold hover:bg-white transition-all"
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
