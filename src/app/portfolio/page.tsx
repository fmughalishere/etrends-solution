"use client";
import { CASE_STUDIES, PORTFOLIO_STATS, PORTFOLIO_CLIENTS } from "../../constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="pt-32 bg-[#020617] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
                <header className="mb-24">
          <p className="text-blue-500 font-bold mb-4 tracking-widest uppercase text-[10px]">/ Case Studies</p>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            Numbers that close deals <br/> before we <span className="text-blue-500 italic">say a word.</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg font-medium italic">
            Proven ROI and scalable growth systems across Global Travel and Service industries.
          </p>
        </header>

        <section className="mb-32">
          <div className="bg-blue-600 rounded-[50px] p-10 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black mb-12">The ROI case, compressed</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {PORTFOLIO_STATS.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-4xl md:text-6xl font-black">{stat.value}</h3>
                  <p className="text-blue-100 text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="space-y-32 mb-40">
          {CASE_STUDIES.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 relative aspect-video w-full rounded-3xl overflow-hidden border border-white/5 shadow-xl group">
                <Image 
                  src={study.image} 
                  alt="Marketing Case" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                />
              </div>
              <div className="flex-1 space-y-6">
                <span className="text-blue-500 font-black text-[10px] tracking-[0.3em] uppercase">{study.category}</span>
                <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">{study.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{study.description}</p>
                <div className="pt-4"><span className="text-4xl font-black text-blue-500">{study.stats}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
        <section className="pb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Our Global <span className="text-blue-500">Partners</span></h2>
            <p className="text-gray-500">Trusted by 25+ leading travel and service agencies across UK, USA, & Pakistan.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PORTFOLIO_CLIENTS.map((client, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                className="glass p-6 rounded-2xl border-white/5 flex items-center justify-center text-center text-sm font-bold text-gray-400 hover:text-blue-400 transition-all cursor-default"
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