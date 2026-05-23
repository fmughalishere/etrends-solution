"use client";
import { SERVICES_DATA } from "../../constants";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400">Tailored solutions for your digital growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl glass hover:border-blue-500/50 transition-all duration-300 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}