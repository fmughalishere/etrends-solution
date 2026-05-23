"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold mb-10 text-center"
        >
          We Are <span className="text-blue-500">Trends</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="glass p-10 rounded-[40px]">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">To empower businesses with cutting-edge technology and innovative digital marketing strategies that drive real growth and measurable results.</p>
          </div>
          <div className="glass p-10 rounded-[40px]">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">To become the global leader in digital transformation, known for our creativity, technical excellence, and commitment to client success.</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">We don't just build websites; we build brands. Our team combines creativity with technical expertise to deliver solutions that stand out.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Expert Team", "Fast Delivery", "24/7 Support", "Proven ROI"].map((item, i) => (
              <div key={i} className="p-6 glass rounded-2xl font-bold">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}