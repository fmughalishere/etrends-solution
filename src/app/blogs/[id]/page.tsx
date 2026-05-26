"use client";

import { useParams, notFound } from "next/navigation";
import { BLOGS_DATA } from "../../../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const blog = BLOGS_DATA.find((b) => b.id === params.id);

  if (!blog) return notFound();

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <section className="relative h-[70vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={blog.image} alt={blog.title} fill className="object-cover opacity-25 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px] mb-8 hover:gap-4 transition-all"><ArrowLeft size={14}/> All Insights</Link>
          <div className="mb-4">
            <svg width="60" height="15" viewBox="0 0 71 16" fill="none"><path d="M1 11L12.5 4L24 11L35.5 4L47 11L58.5 4L70 11" stroke="#00aef0" strokeWidth="3" /></svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.1] max-w-4xl">{blog.title}</h1>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
             <div className="sticky top-32 space-y-10 border-l border-white/10 pl-8">
                <div>
                  <h4 className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px] mb-2">Published</h4>
                  <p className="text-sm font-bold flex items-center gap-2"><Calendar size={14}/> {blog.date}</p>
                </div>
                <div>
                  <h4 className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px] mb-2">Author</h4>
                  <p className="text-sm font-bold flex items-center gap-2"><User size={14}/> {blog.author}</p>
                </div>
                <div>
                  <h4 className="text-[#00aef0] text-[10px] font-bold uppercase tracking-[3px] mb-2">Read Time</h4>
                  <p className="text-sm font-bold flex items-center gap-2"><Clock size={14}/> {blog.readTime}</p>
                </div>
             </div>
          </div>
          <div className="lg:col-span-9">
             <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-400 text-xl leading-relaxed mb-12 italic font-medium">{blog.excerpt}</p>
                <div className="w-12 h-[2px] bg-[#00aef0] mb-12" />
                <p className="text-gray-300 text-lg leading-[1.8]">{blog.content}</p>
             </div>
             <div className="mt-20 pt-20 border-t border-white/5">
                <Link href="/contact" className="group relative inline-flex items-center gap-4 px-12 py-5 border-2 border-white font-bold uppercase text-[11px] tracking-[2px] overflow-hidden">
                  <span className="relative z-10">Scale Your Business Today</span>
                  <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}