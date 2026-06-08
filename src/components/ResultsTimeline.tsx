import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ethanBg from "@/assets/ethan_bg.png";
import ethanPortrait from "@/assets/ethan_portrait.png";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  theme: "light" | "dark";
}

const TIMELINE_SLIDES: TimelineItem[][] = [
  [
    {
      year: "2018",
      title: "FOUNDATION",
      desc: "Launched with a vision to bring AI solutions to businesses of all sizes.",
      theme: "light",
    },
    {
      year: "2020",
      title: "BUILDING EXPERTISE",
      desc: "Launched enterprise projects to streamline operations with automation and AI.",
      theme: "dark",
    },
  ],
  [
    {
      year: "2022",
      title: "GLOBAL EXPANSION",
      desc: "Expanded our consulting footprint globally, serving Fortune 500 enterprises.",
      theme: "light",
    },
    {
      year: "2025",
      title: "AGENTIC AI LEADERSHIP",
      desc: "Pioneering state-of-the-art agentic workflows that transform enterprise operations.",
      theme: "dark",
    },
  ],
];

export function ResultsTimeline() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % TIMELINE_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev - 1 + TIMELINE_SLIDES.length) % TIMELINE_SLIDES.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full min-h-[700px] grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden border-t border-zinc-200">
      
      {/* LEFT COLUMN: 60% Width (lg:col-span-7) */}
      <div className="lg:col-span-7 bg-[#fcfcfc] text-black px-8 py-16 md:p-20 flex flex-col justify-between min-h-[600px]">
        
        {/* Top Text Content */}
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-3">
            Why choose us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[0.95] mb-6">
            DELIVERING<br />RESULTS OVER TIME
          </h2>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
            From our humble beginnings to leading AI innovations, we've consistently driven measurable results for clients.
          </p>
        </div>

        {/* Timeline Cards Row with slide animation */}
        <div className="my-10 relative min-h-[220px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
            >
              {TIMELINE_SLIDES[activeSlide].map((item, idx) => {
                const isDark = item.theme === "dark";
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.02)] border ${
                      isDark 
                        ? "bg-[#0d0d0d] text-white border-white/[0.08]" 
                        : "bg-white text-black border-zinc-200/60"
                    }`}
                  >
                    <div>
                      <span className={`text-xs font-bold tracking-widest ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                        {item.year}
                      </span>
                      <h4 className="text-lg font-black tracking-tight uppercase mt-2 leading-none">
                        {item.title}
                      </h4>
                    </div>
                    
                    <p className={`text-xs md:text-sm leading-relaxed mt-4 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-8 items-center border-t border-zinc-200 pt-6">
          <button 
            onClick={handlePrev}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black transition-colors"
          >
            <ChevronLeft className="size-4" />
            Previous
          </button>
          
          <button 
            onClick={handleNext}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black transition-colors"
          >
            Next
            <ChevronRight className="size-4" />
          </button>
        </div>

      </div>

      {/* RIGHT COLUMN: 40% Width (lg:col-span-5) */}
      <div className="lg:col-span-5 bg-[#0a0a0a] text-white relative min-h-[500px] flex flex-col items-center justify-center p-8 md:p-12">
        {/* Background Image of motion-blurred red lights */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ethanBg} 
            alt="Backdrop" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80" />
        </div>

        {/* Portrait container in center */}
        <div className="relative z-10 w-full max-w-[340px] flex flex-col items-center">
          
          {/* Framed Portrait Box */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.1] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-zinc-900 flex flex-col justify-end">
            <img 
              src={ethanPortrait} 
              alt="Ethan Parker" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            {/* 4AT logo at the bottom center of portrait */}
            <div className="relative z-10 flex items-center justify-center gap-1.5 pb-6">
              <span className="text-xs font-bold tracking-tight text-white/90">4AT®</span>
            </div>
          </div>

          {/* Under-portrait Info */}
          <div className="text-center mt-6">
            <h4 className="text-lg font-black tracking-tight uppercase text-white">
              Ethan Parker
            </h4>
            <p className="text-zinc-400 text-xs mt-1">
              Founder & CEO, GEN-AI Consulting
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
