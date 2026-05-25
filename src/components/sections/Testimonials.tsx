"use client";
import { REVIEWS } from "../../constants";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="w-12 h-[2px] bg-[#00aef0] mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5">
          {REVIEWS.slice(0, 3).map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative p-10 bg-[#0d0d0d] hover:bg-[#00aef0] transition-all duration-500 ease-in-out flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="flex gap-1 mb-8 text-[#00aef0] group-hover:text-black transition-colors">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="currentColor" />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 mb-4 text-white/5 group-hover:text-black/10 transition-colors absolute top-10 right-10" />
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-black font-medium transition-colors">
                  "{rev.content}"
                </p>
              </div>

              <div className="mt-12">
                <h4 className="font-bold text-white uppercase tracking-widest text-sm group-hover:text-black transition-colors">
                  {rev.name}
                </h4>
                <p className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[2px] mt-1 group-hover:text-black/70 transition-colors">
                  {rev.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}