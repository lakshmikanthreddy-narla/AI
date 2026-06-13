import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clientsBg from "@/assets/clients_bg.png";
import img1 from "@/assets/1st image.png";
import img2 from "@/assets/2th image.png";
import img3 from "@/assets/3th image.png";
import sensibaLogo from "@/assets/sensiba_logo.png";
import img4 from "@/assets/4th image.png";
import img5 from "@/assets/teamlease_logo.png";
import img6 from "@/assets/6th image.png";
import img7 from "@/assets/7th image.png";
import img8 from "@/assets/8th image.png";
import img9 from "@/assets/9th image.png";
import img10 from "@/assets/10th image.png";

export function Clients() {
  return (
    <section className="relative w-full min-h-[140vh] lg:min-h-[1200px] bg-transparent text-white overflow-hidden flex flex-col justify-between pt-44 pb-24 px-0">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {clientsBg ? (
          <img 
            src={clientsBg.src} 
            alt="Clients Background" 
            className="w-full h-full object-cover object-top opacity-85 mix-blend-screen"
          />
        ) : (
          <div className="w-full h-full bg-zinc-950" />
        )}
        {/* Gradients to fade edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/15 z-10" />
      </div>

      {/* Main Left-Aligned Text Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full px-8 md:px-12">
        <div className="text-left flex flex-col items-start max-w-5xl">
          <h2 
            className="font-black uppercase tracking-tight text-white leading-[0.85] flex flex-col items-start"
            style={{ fontSize: "clamp(64px, 12vw, 150px)" }}
          >
            <span className="text-white/95">HELPING</span>
            
            <div className="flex items-center gap-8 my-3 flex-wrap">
              <span className="text-white">120+</span>
            </div>
            
            <span className="text-white/95">CLIENT</span>
            <span className="text-white/95">WORLDWIDE</span>
          </h2>
        </div>
      </div>

      {/* Bottom Grid of Logos */}
      <div className="relative z-20 w-full border-t border-zinc-800/60 bg-black/50 backdrop-blur-md">
        {/* Row 1 Logos */}
        <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-zinc-800/60 border-b border-zinc-800/60 text-center">
          
          {/* Nexter */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300">
            <img src={img1.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* Crafty */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300">
            <img src={img2.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* oslo. */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300">
            <img src={img3.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* NONAME */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300">
            <img src={img4.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* next */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300">
            <img src={img5.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* theor */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300">
            <img src={img6.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>
        </div>

        {/* Row 2 Logos */}
        <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-zinc-800/60 text-center">
          
          {/* VIOLET */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300 border-t md:border-t-0 border-zinc-800/60">
            <img src={img7.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* umbrella */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300 border-t md:border-t-0 border-zinc-800/60">
            <img src={img8.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* Rise */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300 border-t md:border-t-0 border-zinc-800/60">
            <img src={img9.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* London */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300 border-t md:border-t-0 border-zinc-800/60">
            <img src={img10.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>

          {/* Hatrick */}
          <div className="py-7 flex items-center justify-center hover:bg-white/5 transition-all duration-300 border-t md:border-t-0 border-zinc-800/60">
            <img src={sensibaLogo.src} className="h-8 w-auto object-contain max-w-[80%] brightness-75 hover:brightness-100 transition-all" alt="Client logo" />
          </div>
          
          {/* Join Us CTA Cell */}
          <div className="flex items-center justify-center p-2 border-t md:border-t-0 border-zinc-800/60">
            <a 
              href="#contact"
              className="group flex items-center justify-between border border-white/25 w-full overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all rounded-sm"
            >
              <span className="bg-white text-black px-4 py-2.5 text-xs font-bold flex-1 text-center">Join us</span>
              <span className="bg-black text-white border-l border-white/25 px-2.5 py-2.5 self-stretch flex items-center">
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
