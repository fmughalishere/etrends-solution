"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm py-2 lg:py-2">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex-shrink-0">
            <Image
              src="/navbar-logo.png"
              alt="E-Trends Solutions"
              width={500}
              height={160}
              quality={100}
              priority
              className="object-contain w-[140px] sm:w-[170px] lg:w-[210px] h-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[#0a1d4a] text-[12px] xl:text-[12px] font-semibold uppercase tracking-widest hover:text-[#00aef0] transition"
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
                    className={`absolute top-full left-0 mt-5 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100 ${
                      activeDropdown === link.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-3"
                    }`}
                  >
                    <div className="py-3">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-6 py-4 text-[14px] font-medium text-[#0a1d4a] hover:bg-gray-50 hover:text-[#00aef0] transition"
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

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com/etrendssolutions/"
                className="text-[#0a1d4a] hover:text-[#00aef0] transition"
              >
                <FaInstagram size={17} />
              </Link>

              <Link
                href="https://www.linkedin.com/company/109129070/"
                className="text-[#0a1d4a] hover:text-[#00aef0] transition"
              >
                <FaLinkedin size={17} />
              </Link>
              <Link
                href="https://www.facebook.com/etrendssolutions/"
                className="text-[#0a1d4a] hover:text-[#00aef0] transition"
              >
                <FaFacebook size={17} />
              </Link>
            </div>

            <Link
              href="/contact"
              className="px-3 xl:px-4 py-2 bg-[#00aef0] text-white rounded-full text-[11px] xl:text-[12px] font-bold uppercase tracking-widest hover:bg-[#0a1d4a] transition"
            >
              Let's Talk
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[120] text-[#0a1d4a]"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white z-[90] lg:hidden transition-all duration-500 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="pt-28 pb-10 px-6 sm:px-8 flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-gray-200">
                <div className="flex items-center justify-between py-5">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#0a1d4a] text-lg sm:text-xl font-semibold uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>

                  {link.dropdown && (
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.label ? null : link.label,
                        )
                      }
                      className="text-[#0a1d4a]"
                    >
                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          mobileDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && mobileDropdown === link.label && (
                  <div className="pb-4 pl-4 flex flex-col gap-3">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 text-[15px] hover:text-[#00aef0] transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10">
            <div className="flex justify-center gap-5 mb-8">
              <Link
                href="https://instagram.com/etrendssolutions/"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#0a1d4a] hover:bg-[#00aef0] hover:text-white transition"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/company/109129070/"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#0a1d4a] hover:bg-[#00aef0] hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/etrendssolutions/"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#0a1d4a] hover:bg-[#00aef0] hover:text-white transition"
              >
                <FaFacebook size={20} />
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-50 mx-auto text-center py-3 rounded-xl bg-[#00aef0] text-white font-bold uppercase tracking-widest hover:bg-[#0a1d4a] transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
