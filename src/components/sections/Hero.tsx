"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6 inline-block">
            Digital Transformation Experts
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Grow Your Business <br /> with Smart Solutions
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We provide cutting-edge digital services to help your brand trend and scale in the modern world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
              Book a Free Audit
            </button>
            <button className="glass px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}