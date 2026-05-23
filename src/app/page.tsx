import Hero from "../components/sections/Hero";
import Services from "../app/services/page";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Users, Zap, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { label: "Projects Completed", value: "250+", icon: Zap },
            { label: "Happy Clients", value: "150+", icon: Users },
            { label: "Years Experience", value: "05+", icon: Star },
            { label: "Awards Won", value: "10+", icon: Award },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <stat.icon className="text-blue-500 mb-3" size={24} />
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</h3>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-[10px] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-square glass rounded-[60px] overflow-hidden relative group border-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 group-hover:opacity-50 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-8xl font-black text-white/5 select-none">TRENDS</span>
            </div>
            <div className="absolute bottom-12 left-12 p-8 glass rounded-3xl border-white/10">
              <p className="text-4xl font-bold text-blue-500 tracking-tighter">Leading</p>
              <p className="text-gray-300 font-medium uppercase tracking-widest text-xs">Digital Agency</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Innovating for the <br /> 
            <span className="text-blue-500 italic">Digital Future</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            At E_trends Solutions, we don't just follow trends—we set them. Our team combines creative 
            brilliance with technical precision to deliver high-impact digital experiences that 
            transform businesses and captivate audiences.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              "Strategic Brand Growth",
              "Cutting-edge Technology",
              "Data-Driven Results",
              "Seamless User Experience"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-200 font-medium">
                <CheckCircle2 className="text-blue-500 shrink-0" size={22} />
                {item}
              </div>
            ))}
          </div>

          <Link href="/about" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
            Discover Our Story <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </Link>
        </div>
      </section>
      <Services />
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden glass p-12 md:p-24 rounded-[80px] text-center border-white/10">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full" />
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 relative z-10 tracking-tight">
            Let’s Build Something <br /> 
            <span className="text-blue-500">Extraordinary.</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 relative z-10">
            Ready to scale your business? Partner with our expert team and turn your 
            digital vision into a market-leading reality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 px-12 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95">
              Get Started Now
            </Link>
            <Link href="/portfolio" className="glass hover:bg-white/10 px-12 py-5 rounded-2xl font-bold text-lg transition-all">
              Browse Our Work
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}