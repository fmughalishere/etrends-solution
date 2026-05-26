"use client";

import { BLOGS_DATA } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen text-[#0a1d4a]">
      <section className="relative h-[65vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0 text-white">
          <Image
            src="/blogs.jpeg"
            alt="Insights"
            fill
            className="object-cover opacity-40 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a] via-[#0a1d4a]/70 to-transparent" />
        </div>

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
              <span className="text-white">Insights & Trends</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-white">
              Insights
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-100 border border-gray-100">
            {BLOGS_DATA.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="group relative bg-white flex flex-col h-full overflow-hidden"
              >
                {/* Image Thumbnail */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-[#00aef0] px-4 py-1 text-[#0a1d4a] font-bold text-[10px] uppercase tracking-widest shadow-xl">
                    {blog.category}
                  </div>
                </div>
                <div className="p-12 flex flex-col flex-grow relative">
                  <div className="absolute inset-0 bg-[#0a1d4a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-6 text-gray-400 group-hover:text-gray-300 mb-6 transition-colors">
                      <span className="text-[10px] font-bold uppercase flex items-center gap-2 tracking-widest">
                        <Calendar size={14} className="text-[#00aef0]" />{" "}
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0a1d4a] uppercase tracking-tight group-hover:text-white transition-colors mb-6 leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm group-hover:text-gray-400 transition-colors mb-10 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#0a1d4a] group-hover:text-[#00aef0] transition-colors">
                      Read Article <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
