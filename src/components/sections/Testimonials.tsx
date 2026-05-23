"use client";
import { REVIEWS } from "../../constants";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter italic">Trusted by <span className="text-blue-500">Industry Leaders</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[50px] border-white/5 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-8 text-yellow-500">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-lg mb-10 italic leading-relaxed flex-grow">"{rev.content}"</p>
              <div>
                <h4 className="font-extrabold text-xl">{rev.name}</h4>
                <p className="text-blue-500 text-sm font-medium">{rev.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}