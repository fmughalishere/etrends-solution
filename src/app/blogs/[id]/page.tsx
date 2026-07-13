"use client";

import { useParams, notFound } from "next/navigation";
import { BLOGS_DATA } from "../../../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogDetailPage() {
  const params = useParams();
  const blog = BLOGS_DATA.find((b) => b.id === params.id);

  if (!blog) return notFound();

  const relatedBlogs = BLOGS_DATA.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <main className="bg-white min-h-screen text-[#0a1d4a]">
      {/* HERO */}
      <section className="relative h-[80vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover opacity-30 transition-transform duration-[10s] hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4a] via-[#0a1d4a]/40 to-transparent" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.06] z-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#00aef0] text-[11px] font-bold tracking-[4px] mb-10 hover:gap-4 transition-all"
            >
              <ArrowLeft size={16} /> All Insights
            </Link>
            <br/>
            {blog.category && (
              <div className="inline-block bg-[#00aef0] px-4 py-1.5 text-[#0a1d4a] font-bold text-[10px] uppercase tracking-widest mb-6">
                {blog.category}
              </div>
            )}

            <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-[1.1] max-w-5xl text-white">
              {blog.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            <div className="lg:col-span-3">
              <div className="sticky top-32 space-y-12 border-l-4 border-[#00aef0] pl-10">
                <div>
                  <h4 className="text-[#0a1d4a]/40 text-[10px] font-bold tracking-[4px] mb-3">
                    Published On
                  </h4>
                  <p className="text-lg font-bold flex items-center gap-3">
                    <Calendar size={18} className="text-[#00aef0]" />{" "}
                    {blog.date}
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0a1d4a]/40 text-[10px] font-bold tracking-[4px] mb-3">
                    Authored By
                  </h4>
                  <p className="text-lg font-bold flex items-center gap-3">
                    <User size={18} className="text-[#00aef0]" /> {blog.author}
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0a1d4a]/40 text-[10px] font-bold tracking-[4px] mb-3">
                    Reading Time
                  </h4>
                  <p className="text-lg font-bold flex items-center gap-3">
                    <Clock size={18} className="text-[#00aef0]" />{" "}
                    {blog.readTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="max-w-none">
                <p className="text-[#0a1d4a] text-2xl md:text-3xl font-medium leading-snug mb-12 italic border-b border-gray-100 pb-12">
                  {blog.excerpt}
                </p>

                <div className="prose prose-lg text-gray-600 leading-[1.8] space-y-8">
                  <p>{blog.content}</p>
                </div>
              </div>

              <div className="mt-20 pt-20 border-t border-gray-100">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Ready to implement these trends?
                  </h3>
                </div>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-4 px-12 py-5 bg-[#0a1d4a] text-white font-bold uppercase text-[11px] tracking-[2px] rounded-full overflow-hidden transition-all shadow-xl shadow-[#0a1d4a]/20"
                >
                  <span className="relative z-10">
                    Start Your Digital Project
                  </span>
                  <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />
                  <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedBlogs.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#f8fbff]">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-[#00aef0] text-xs font-bold uppercase tracking-[5px] mb-4 block">
              Keep Reading
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0a1d4a] tracking-tight mb-12">
              More Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.id}`}
                  className="group bg-white rounded-[30px] overflow-hidden border border-[#eef3fc] hover:shadow-2xl hover:shadow-[#0a1d4a]/5 transition-shadow duration-500"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {item.category && (
                      <div className="absolute top-5 left-5 bg-[#00aef0] px-3 py-1 text-[#0a1d4a] font-bold text-[10px] uppercase tracking-widest">
                        {item.category}
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <span className="text-[10px] font-bold uppercase flex items-center gap-2 tracking-widest text-gray-400 mb-4">
                      <Calendar size={12} className="text-[#00aef0]" />
                      {item.date}
                    </span>

                    <h4 className="text-lg font-bold text-[#0a1d4a] leading-snug mb-4 group-hover:text-[#00aef0] transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#0a1d4a] group-hover:text-[#00aef0] transition-colors">
                      Read More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}