"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Get in <span className="text-blue-500">Touch</span></h1>
          <p className="text-gray-400 text-lg mb-12">Have a project in mind? Let's build something amazing together.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="p-4 glass rounded-2xl text-blue-500"><Mail size={24}/></div>
              <div><p className="text-sm text-gray-500">Email us at</p><p className="text-xl font-medium">info@etrendssolutions.com</p></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 glass rounded-2xl text-blue-500"><Phone size={24}/></div>
              <div><p className="text-sm text-gray-500">Call us at</p><p className="text-xl font-medium">+92 312 1234567</p></div>
            </div>
          </div>
        </div>
        <div className="glass p-8 md:p-12 rounded-[40px]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors" />
            <textarea placeholder="Your Message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-2xl font-bold text-lg transition-all">Send Message</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}