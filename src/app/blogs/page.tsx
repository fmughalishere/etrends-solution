"use client";

import { BLOGS_DATA } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogsPage() {
  const [featured, ...rest] = BLOGS_DATA;

  return (
    <main className="bg-white min-h-screen text-[#0a1d4a]">
      {/* HERO */}
      <section className="relative h-[65vh] w-full flex items-center overflow-hidden bg-[#0a1d4a]">
        <div className="absolute inset-0 z-0 text-white">
          <Image
            src="/blogs.jpeg"
            alt="Insights"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d4a] via-[#0a1d4a]/70 to-transparent" />
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
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-[#00aef0] mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white">Insights & Trends</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white mb-4">
              Insights
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl">
              Ideas, updates, and perspectives from our team on where digital
              is headed next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featured && (
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-[#00aef0] text-xs font-bold uppercase tracking-[5px] mb-8 block">
              Latest Feature
            </span>

            <Link
              href={`/blogs/${featured.id}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-[30px] overflow-hidden bg-[#f8fbff] border border-[#eef3fc] hover:shadow-2xl hover:shadow-[#0a1d4a]/5 transition-shadow duration-500"
            >
              <div className="relative h-72 lg:h-full lg:min-h-[420px] w-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {featured.category && (
                  <div className="absolute top-6 left-6 bg-[#00aef0] px-4 py-1 text-[#0a1d4a] font-bold text-[10px] uppercase tracking-widest shadow-xl">
                    {featured.category}
                  </div>
                )}
              </div>

              <div className="p-8 md:p-12 lg:pr-16">
                <span className="text-[10px] font-bold uppercase flex items-center gap-2 tracking-widest text-gray-400 mb-6">
                  <Calendar size={14} className="text-[#00aef0]" />
                  {featured.date}
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d4a] tracking-tight leading-tight mb-6 group-hover:text-[#00aef0] transition-colors">
                  {featured.title}
                </h2>

                <p className="text-gray-600 text-base leading-relaxed mb-10 line-clamp-3">
                  {featured.excerpt}
                </p>

                <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#0a1d4a] text-white rounded-full text-xs uppercase tracking-[2px] font-bold group-hover:bg-[#00aef0] transition-colors w-fit">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* GRID */}
      <section className="pb-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[#00aef0] text-xs font-bold uppercase tracking-[5px] mb-8 block">
            More Articles
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="group bg-white rounded-[30px] overflow-hidden border border-[#eef3fc] hover:shadow-2xl hover:shadow-[#0a1d4a]/5 transition-shadow duration-500 flex flex-col h-full"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {blog.category && (
                    <div className="absolute top-5 left-5 bg-[#00aef0] px-3 py-1 text-[#0a1d4a] font-bold text-[10px] uppercase tracking-widest">
                      {blog.category}
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold uppercase flex items-center gap-2 tracking-widest text-gray-400 mb-4">
                    <Calendar size={12} className="text-[#00aef0]" />
                    {blog.date}
                  </span>

                  <h3 className="text-lg font-bold text-[#0a1d4a] leading-snug mb-4 group-hover:text-[#00aef0] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#0a1d4a] group-hover:text-[#00aef0] transition-colors">
                    Read More <ArrowRight size={14} />
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