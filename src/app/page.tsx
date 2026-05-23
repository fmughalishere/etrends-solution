import Hero from "../components/sections/Hero";
import ServicesPreview from "../app/services/page";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { label: "Years Experience", value: "7+" },
            { label: "Countries Served", value: "3" },
            { label: "Happy Clients", value: "100+" },
            { label: "Results Driven", value: "100%" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <ServicesPreview />
      <Testimonials />
    </div>
  );
}