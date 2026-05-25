"use client";

import { SERVICES_DATA } from "../../constants";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 min-h-screen bg-[#020617] overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20">

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-5 md:mb-6 leading-tight">

            Our{" "}

            <span className="text-blue-500 italic">
              Specialties
            </span>

          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-xl max-w-3xl mx-auto italic leading-relaxed px-2">
            Tailored digital solutions specifically built for the Travel &
            Service industries.
          </p>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">

          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 rounded-[28px] md:rounded-[40px] p-7 sm:p-8 md:p-10 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2"
            >
              <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">

                <service.icon size={30} />

              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">

                {service.title}

              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">

                {service.desc}

              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}