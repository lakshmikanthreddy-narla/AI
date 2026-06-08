import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

let clientsBg: string;
try { clientsBg = new URL("../assets/clients_bg.png", import.meta.url).href; } catch { clientsBg = ""; }

export function Clients() {
  return (
    <section className="relative w-full min-h-[140vh] lg:min-h-[1200px] bg-black text-white overflow-hidden flex flex-col justify-between pt-44 pb-24 px-0">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {clientsBg ? (
          <img 
            src={clientsBg} 
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
          <div className="py-7 flex items-center justify-center gap-2 text-zinc-400 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors cursor-default">
            <svg className="size-4 text-current" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h4l8 10V4h4v16h-4l-8-10v10H4V4z" />
            </svg>
            <span>Nexter</span>
          </div>

          {/* Crafty */}
          <div className="py-7 flex items-center justify-center gap-1.5 text-zinc-400 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors cursor-default">
            <svg className="size-4 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            <span>Crafty</span>
          </div>

          {/* oslo. */}
          <div className="py-7 flex items-center justify-center text-zinc-350 font-black tracking-tight text-xl hover:text-white transition-colors cursor-default">
            oslo.
          </div>

          {/* NONAME */}
          <div className="py-7 flex items-center justify-center text-zinc-400 font-normal tracking-[0.25em] text-xs hover:text-white transition-colors cursor-default" style={{ fontFamily: "monospace" }}>
            NONAME
          </div>

          {/* next */}
          <div className="py-7 flex items-center justify-center text-zinc-400 font-extrabold lowercase tracking-tighter text-lg hover:text-white transition-colors cursor-default">
            next
          </div>

          {/* theor */}
          <div className="py-7 flex items-center justify-center text-zinc-400 font-light italic tracking-wider text-lg hover:text-white transition-colors cursor-default" style={{ fontFamily: "Georgia, serif" }}>
            theor
          </div>
        </div>

        {/* Row 2 Logos */}
        <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-zinc-800/60 text-center">
          
          {/* VIOLET */}
          <div className="py-7 flex items-center justify-center text-zinc-500 font-mono tracking-widest text-xs hover:text-white transition-colors cursor-default border-t md:border-t-0 border-zinc-800/60">
            <span className="border border-zinc-700/50 px-2 py-0.5 text-[9px] uppercase font-bold">[VIOLET]</span>
          </div>

          {/* umbrella */}
          <div className="py-7 flex items-center justify-center gap-2 text-zinc-450 font-medium uppercase tracking-wide text-xs hover:text-white transition-colors cursor-default border-t md:border-t-0 border-zinc-800/60">
            <span className="text-sm">☂</span>
            <span>umbrella</span>
          </div>

          {/* Rise */}
          <div className="py-7 flex items-center justify-center gap-1 text-zinc-350 font-black tracking-tighter text-lg hover:text-white transition-colors cursor-default border-t md:border-t-0 border-zinc-800/60">
            <svg className="size-4 text-current" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 18h3V8H4v10zm6 0h3v-6h-3v6zm6-12v12h3V6h-3z" />
            </svg>
            <span>Rise</span>
          </div>

          {/* London */}
          <div className="py-7 flex items-center justify-center gap-1.5 text-zinc-450 font-semibold uppercase tracking-wider text-xs hover:text-white transition-colors cursor-default border-t md:border-t-0 border-zinc-800/60">
            <svg className="size-4 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>London</span>
          </div>

          {/* Hatrick */}
          <div className="py-7 flex items-center justify-center text-zinc-400 font-bold uppercase tracking-tight text-sm hover:text-white transition-colors cursor-default border-t md:border-t-0 border-zinc-800/60">
            <span>Hatrick</span>
            <span className="text-zinc-600 font-bold text-xs ml-0.5">&lt;</span>
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
