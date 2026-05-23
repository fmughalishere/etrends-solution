"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-2 flex justify-between items-center shadow-2xl border-white/10">
        <Link href="/" className="flex items-center">
          <Image 
            src="/nav-logo.jpeg"
            alt="E_trends Solutions Logo"
            width={160}
            height={45} 
            className="object-contain hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-semibold text-gray-300 hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link 
          href="/contact" 
          className="bg-blue-600 px-7 py-2.5 rounded-full text-sm font-extrabold text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}