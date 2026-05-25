"use client";
import Link from "next/link";
import { CONTACT_INFO, NAV_LINKS } from "../constants";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/nav-logo.jpeg"
              alt="Logo"
              width={150}
              height={40}
              priority
              className="object-contain mb-6"
            />
          </Link>{" "}
          <p className="text-gray-400 leading-relaxed mb-8">
            Empowering travel businesses with innovation, automation, and
            powerful marketing strategies since 2017.
          </p>
          <div className="flex gap-4">
            <Link
              href={CONTACT_INFO.socials.facebook}
              className="p-4 glass rounded-2xl hover:bg-blue-600 transition-colors"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={CONTACT_INFO.socials.instagram}
              className="p-4 glass rounded-2xl hover:bg-pink-600 transition-colors"
            >
              <FaInstagram />
            </Link>
            <Link
              href={CONTACT_INFO.socials.linkedin}
              className="p-4 glass rounded-2xl hover:bg-blue-700 transition-colors"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-blue-500">
            Company
          </h4>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-blue-500">
            Contact Us
          </h4>
          <p className="text-gray-400 mb-4">{CONTACT_INFO.address}</p>
          <p className="text-gray-300 font-bold mb-2">
            WhatsApp: {CONTACT_INFO.whatsapp}
          </p>
          <p className="text-gray-300 font-bold">Phone: {CONTACT_INFO.phone}</p>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm border-t border-white/5 pt-12">
        © {new Date().getFullYear()} E_trends Solutions. All Rights Reserved.
      </div>
      <Link
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        className="fixed bottom-10 right-10 bg-green-500 p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] text-white"
      >
        <FaWhatsapp size={30} />
      </Link>
    </footer>
  );
}
