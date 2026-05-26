"use client";

import { BLOGS_DATA } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <section className="relative h-[60vh] w-full flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 text-white">
          <Image src="/1.jpg" alt="Blogs" fill className="object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="mb-4">
            <svg width="60" height="15" viewBox="0 0 71 16" fill="none"><path d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11" stroke="#00aef0" strokeWidth="3" /></svg>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-white">Insights</h1>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5">
          {BLOGS_DATA.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} className="group relative bg-black flex flex-col h-full overflow-hidden">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={blog.image} alt={blog.title} fill className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-6 left-6 bg-[#00aef0] px-4 py-1 text-black font-bold text-[10px] uppercase tracking-widest">{blog.category}</div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow relative">
                <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 text-gray-500 group-hover:text-black mb-4 transition-colors">
                    <span className="text-[10px] font-bold uppercase flex items-center gap-1"><Calendar size={12}/> {blog.date}</span>
                    <span className="text-[10px] font-bold uppercase flex items-center gap-1"><User size={12}/> {blog.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-black transition-colors mb-4">{blog.title}</h3>
                  <p className="text-gray-500 text-sm group-hover:text-black/80 transition-colors mb-8">{blog.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors">Read Article <ArrowRight size={14} /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}