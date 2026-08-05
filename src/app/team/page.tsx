"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TEAM_DATA } from "../../constants";

export default function TeamPage() {
  return (
    <main className="bg-white min-h-screen text-[#0a1d4a] overflow-hidden">
      <section className="relative h-[60vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner.jpeg"
            alt="Meet Our Team"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a] via-[#0a1d4a]/70 to-transparent" />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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

            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-[#00aef0] mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white">Meet Our Team</span>
            </nav>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none text-white">
              Meet Our Team
            </h1>

            <p className="text-gray-300 text-sm md:text-base max-w-xl mt-6 leading-relaxed">
              The people behind E-Trends Solutions — a dedicated team of
              strategists, designers, developers, and specialists driving
              your brand forward every day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-[#0a1d4a]">
              Meet the Talent
            </h2>
            <div className="w-16 h-[3px] bg-[#00aef0] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_DATA.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamCard({ member, index }: { member: (typeof TEAM_DATA)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group flex flex-col bg-gray-50 rounded-[28px] overflow-hidden border border-transparent hover:border-[#00aef0] hover:shadow-2xl hover:shadow-[#0a1d4a]/5 transition-all duration-500"
    >
      {/* Fixed-ratio image frame keeps every photo cropped and aligned the same way,
          regardless of the original image's size or orientation. */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0a1d4a]/5">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4a]/70 via-transparent to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#0a1d4a] uppercase tracking-tight leading-snug">
          {member.name}
        </h3>
        <span className="text-[#00aef0] text-[11px] font-bold uppercase tracking-[2px] mt-1 mb-4">
          {member.role}
        </span>
        <div className="mt-auto flex flex-wrap gap-2">
          {member.points.map((point) => (
            <span
              key={point}
              className="text-[9px] font-bold uppercase tracking-widest text-[#0a1d4a] bg-white border border-gray-200 rounded-full px-3 py-1.5"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
