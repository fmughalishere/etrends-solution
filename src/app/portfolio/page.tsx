"use client";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl">Discover our latest projects and success stories.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-video rounded-3xl overflow-hidden glass group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div>
                  <p className="text-blue-500 font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="w-full h-full bg-gray-800 animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}