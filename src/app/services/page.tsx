"use client";
import { SERVICES_DATA } from "../../constants";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-6">Our <span className="text-blue-500 italic">Specialties</span></h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto italic">Tailored digital solutions specifically built for the Travel & Service industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[40px] border-white/5 hover:border-blue-500/50 transition-all flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}