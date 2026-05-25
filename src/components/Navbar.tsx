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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex-shrink-0">
          <Image
            src="/nav-logo.jpeg"
            alt="E-Trends Solutions"
            width={180}
            height={50}
            priority
            className="object-contain brightness-110 w-[130px] sm:w-[150px] lg:w-[180px] h-auto"
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
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
              {link.dropdown && (
                <div
                  className={`absolute top-full left-0 mt-3 w-64 bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 origin-top ${
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
                        className="block px-6 py-3 text-sm text-gray-300 hover:bg-[#0a1d4a] hover:text-[#00aef0] transition-all duration-300 border-b border-white/5 last:border-0"
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
              target="_blank"
              className="text-white hover:text-[#00aef0] transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/109129070/"
              target="_blank"
              className="text-white hover:text-[#00aef0] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
          <Link
            href="/contact"
            className="group relative overflow-hidden px-8 py-3 border border-[#00aef0] text-white text-sm font-bold uppercase tracking-widest rounded-full"
          >
            <span className="relative z-10">Let's Talk</span>

            <div className="absolute inset-0 bg-[#00aef0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white z-50 p-2"
        >
          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          ) : (
            <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[85%] bg-black z-40 transform transition-transform duration-500 lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-28 pb-10 px-6 flex flex-col">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-white/10 pb-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg sm:text-xl font-semibold text-white hover:text-[#00aef0] uppercase tracking-wide py-3 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.label ? null : link.label
                        )
                      }
                      className="text-white p-2"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {link.dropdown && mobileDropdown === link.label && (
                  <div className="ml-4 mt-2 flex flex-col rounded-xl overflow-hidden bg-white/5">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 text-sm text-gray-300 hover:text-[#00aef0] hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5 mt-10">
            <Link
              href="https://www.instagram.com/etrendssolutions/"
              target="_blank"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#00aef0] hover:border-[#00aef0] transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/109129070/"
              target="_blank"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#00aef0] hover:border-[#00aef0] transition-all"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-10 w-full text-center px-8 py-4 bg-[#00aef0] text-black font-bold rounded-full uppercase tracking-wider hover:scale-[1.02] transition-transform"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}