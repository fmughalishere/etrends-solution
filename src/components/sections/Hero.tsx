"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 inline-block tracking-widest">
            UK • USA • PAKISTAN
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-gradient">
            Transforming Travel <br /> <span className="text-blue-500 italic">Businesses Digitally</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Empowering Travel & Service-Based Companies with cutting-edge digital solutions. We turn your vision into growth, leads, and long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
              Book a Strategy Call
            </Link>
            <Link href="/portfolio" className="glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              View Our Work <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}