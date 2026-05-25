"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <Image
            src="/nav-logo.jpeg"
            alt="E-Trends Solutions"
            width={180}
            height={50}
            priority
            className="object-contain brightness-110"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() =>
                link.dropdown && setActiveDropdown(link.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[15px] font-medium text-white/90 hover:text-[#00aef0] transition-all duration-300 uppercase tracking-wider"
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {link.dropdown && (
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-[#1a1a1a] border-t-2 border-[#00aef0] shadow-2xl transition-all duration-300 origin-top ${
                    activeDropdown === link.label
                      ? "opacity-100 visible scale-y-100"
                      : "opacity-0 invisible scale-y-0"
                  }`}
                >
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-6 py-3 text-sm text-gray-300 hover:bg-[#0a1d4a] hover:text-[#00aef0] transition-colors border-b border-white/5 last:border-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/20 pr-6">
            <Link
              href="https://www.instagram.com/etrendssolutions/"
              className="text-white hover:text-[#00aef0] transition-transform hover:scale-110"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/109129070/"
              className="text-white hover:text-[#00aef0] transition-transform hover:scale-110"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
          <Link
            href="/contact"
            className="group relative overflow-hidden px-8 py-3 bg-transparent border border-[#00aef0] text-white text-sm font-bold uppercase tracking-widest transition-all"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white z-50 p-2"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#00aef0] uppercase tracking-tighter"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-4 bg-[#00aef0] text-navy-900 font-bold rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
