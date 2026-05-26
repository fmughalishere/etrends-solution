"use client";
import { useEffect, useState } from "react";
import { REVIEWS } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % REVIEWS.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="py-32 bg-[#0a1d4a] relative overflow-hidden">
      <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
        <Quote size={300} color="white" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-[2px] bg-[#00aef0] mb-6" />
          <h2 className="text-sm font-bold text-[#00aef0] uppercase tracking-[5px] mb-4">
            Global Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            What Our Clients Say
          </h3>
        </div>
        <div className="max-w-[1000px] mx-auto relative min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full text-center"
            >
              <div className="flex justify-center gap-1 mb-10 text-[#00aef0]">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={24} fill="currentColor" />
                ))}
              </div>

              <p className="text-2xl md:text-4xl font-medium text-white italic leading-snug mb-12 px-4 md:px-10">
                "{REVIEWS[index].content}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-10 h-[1px] bg-[#00aef0] mb-4" />
                <h4 className="text-xl font-bold text-white uppercase tracking-widest">
                  {REVIEWS[index].name}
                </h4>
                <p className="text-[#00aef0] text-[11px] font-bold uppercase tracking-[3px] mt-2">
                  {REVIEWS[index].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 items-center justify-center text-white hover:bg-[#00aef0] hover:text-[#0a1d4a] transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 items-center justify-center text-white hover:bg-[#00aef0] hover:text-[#0a1d4a] transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-16">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === i ? "w-12 bg-[#00aef0]" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}