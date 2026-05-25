"use client";

import {
  CASE_STUDIES,
  PORTFOLIO_STATS,
  PORTFOLIO_CLIENTS,
} from "../../constants";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioPage() {

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="pt-28 md:pt-32 bg-[#020617] min-h-screen text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-28"
        >

          <p className="text-blue-500 font-bold mb-4 tracking-[0.25em] uppercase text-[10px] sm:text-xs">
            / Case Studies
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight">

            Numbers that close deals <br />

            before we{" "}

            <span className="text-blue-500 italic">
              say a word.
            </span>

          </h1>

          <p className="text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed italic">
            Proven ROI and scalable growth systems across Global Travel and
            Service industries.
          </p>

        </motion.header>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-24 md:mb-32"
        >

          <div className="relative overflow-hidden bg-blue-600 rounded-[30px] md:rounded-[50px] p-6 sm:p-10 md:p-16 shadow-2xl">
            <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 blur-3xl rounded-full" />

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-10 md:mb-12 text-center leading-tight">

              The ROI case, compressed

            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

              {PORTFOLIO_STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >

                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-2">

                    {stat.value}

                  </h3>

                  <p className="text-blue-100 text-[10px] sm:text-xs uppercase font-bold tracking-widest leading-relaxed">

                    {stat.label}

                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.section>

        <div className="space-y-20 md:space-y-32 mb-28 md:mb-40">

          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${
                i % 2 !== 0
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } gap-8 md:gap-12 items-center`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex-1 relative aspect-video w-full rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group"
              >

                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              </motion.div>
              <div className="flex-1 space-y-5 text-center md:text-left">

                <span className="text-blue-500 font-black text-[10px] sm:text-xs tracking-[0.3em] uppercase">

                  {study.category}

                </span>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight tracking-tight">

                  {study.title}

                </h2>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">

                  {study.description}

                </p>

                <div className="pt-3">

                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-500">

                    {study.stats}

                  </span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
        <section className="pb-24 md:pb-32">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">

              Our Global{" "}

              <span className="text-blue-500">
                Partners
              </span>

            </h2>

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Trusted by 25+ leading travel and service agencies across UK,
              USA, & Pakistan.
            </p>

          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {PORTFOLIO_CLIENTS.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex items-center justify-center text-center text-xs sm:text-sm font-bold text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-300 cursor-default"
              >

                {client}

              </motion.div>
            ))}

          </div>

        </section>

      </div>
    </div>
  );
}