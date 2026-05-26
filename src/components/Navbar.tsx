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
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-100"
          : "bg-transparent py-5 lg:py-7" 
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex-shrink-0">
          <Image
            src="/nav-logo.jpeg"
            alt="E-Trends Solutions"
            width={180}
            height={50}
            priority
            className={`object-contain transition-all duration-300 w-[130px] sm:w-[160px] lg:w-[190px] h-auto
            }`}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-[14px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  scrolled ? "text-[#0a1d4a]" : "text-white"
                } hover:text-[#00aef0]`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                )}
              </Link>
              {link.dropdown && (
                <div
                  className={`absolute top-full left-[-20px] mt-4 w-72 bg-white border-t-4 border-[#00aef0] rounded-b-xl shadow-2xl transition-all duration-300 origin-top ${
                    activeDropdown === link.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
                  }`}
                >
                  <div className="py-3">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-8 py-3.5 text-[13px] font-semibold text-[#0a1d4a] hover:bg-gray-50 hover:text-[#00aef0] transition-all border-b border-gray-50 last:border-0"
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
        <div className="hidden lg:flex items-center gap-8">
          <div className={`flex items-center gap-5 border-r pr-8 ${scrolled ? "border-gray-200" : "border-white/20"}`}>
            <Link href="https://instagram.com/etrendssolutions/" className={`${scrolled ? "text-[#0a1d4a]" : "text-white"} hover:text-[#00aef0] transition-transform hover:scale-110`}><FaInstagram size={20} /></Link>
            <Link href="https://www.linkedin.com/company/109129070/" className={`${scrolled ? "text-[#0a1d4a]" : "text-white"} hover:text-[#00aef0] transition-transform hover:scale-110`}><FaLinkedin size={20} /></Link>
          </div>
          
          <Link
            href="/contact"
            className={`px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all duration-500 shadow-md ${
              scrolled 
              ? "bg-[#0a1d4a] text-white hover:bg-[#00aef0]" 
              : "bg-[#00aef0] text-[#0a1d4a] hover:bg-white"
            }`}
          >
            Let's Talk
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden z-50 p-2 rounded-lg ${scrolled ? "text-[#0a1d4a]" : "text-white"}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="pt-32 pb-10 px-8 flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-gray-100">
                <div className="flex items-center justify-between py-4">
                  <Link href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#0a1d4a] uppercase tracking-wide">{link.label}</Link>
                  {link.dropdown && (
                    <button onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)} className="p-2 text-[#0a1d4a]">
                      <ChevronDown className={`w-6 h-6 transition-transform ${mobileDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {link.dropdown && mobileDropdown === link.label && (
                  <div className="flex flex-col mb-4 pl-4 border-l-2 border-[#00aef0] bg-gray-50 rounded-r-lg">
                    {link.dropdown.map((item) => (
                      <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="py-3 text-[14px] font-semibold text-gray-600 hover:text-[#00aef0]">{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10">
            <div className="flex gap-6 mb-8 justify-center">
              <Link href="https://www.instagram.com/etrendssolutions/" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#0a1d4a]"><FaInstagram size={22} /></Link>
              <Link href="https://www.linkedin.com/company/etrendssolutions/" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#0a1d4a]"><FaLinkedin size={22} /></Link>
            </div>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center py-4 bg-[#0a1d4a] text-white font-bold rounded-xl uppercase tracking-widest shadow-xl">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}