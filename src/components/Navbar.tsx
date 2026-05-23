"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          E_trends <span className="text-blue-500">SOLUTIONS</span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm hover:text-blue-400 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <button className="bg-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;