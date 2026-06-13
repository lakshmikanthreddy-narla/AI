
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import process1 from "@/assets/process1.png";
import process2 from "@/assets/process2.png";
import process3 from "@/assets/process3.png";
import process4 from "@/assets/process4.png";

const STEPS = [
  {
    num: "01",
    title: "DISCOVERY & STRATEGY",
    desc: "This helps us identify where AI can create the most value.",
    includes: ["Business analysis", "AI opportunity mapping", "Technical feasibility review"],
    time: "TIME PERIOD: 1–2 WEEKS",
    image: process1,
    imageAlign: "left",
  },
  {
    num: "02",
    title: "DATA & PLANNING",
    desc: "We organize and refine your data for AI readiness, ensuring accuracy and consistency.",
    includes: ["Data collection and cleaning", "Infrastructure setup", "Model selection planning"],
    time: "TIME PERIOD: 2–3 WEEKS",
    image: process2,
    imageAlign: "right",
  },
  {
    num: "03",
    title: "DEVELOPMENT & INTEGRATION",
    desc: "We build, test, and integrate AI solutions seamlessly.",
    includes: ["AI model development, API, and system integration", "Technical feasibility review"],
    time: "TIME PERIOD: 2–3 WEEKS",
    image: process3,
    imageAlign: "left",
  },
  {
    num: "04",
    title: "LAUNCH & SUPPORT",
    desc: "After deployment, we monitor performance, train your team, and provide ongoing support to ensure lasting success.",
    includes: ["System deployment", "Team training", "Ongoing maintenance and updates"],
    time: "TIME PERIOD: CONTINUOUS",
    image: process4,
    imageAlign: "right",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Heading animations (stays mostly visible or fades slightly at the end)
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1, 0.92, 0.98], [1, 1, 0.8, 0.2]);

  // Define scroll animation ranges for each of the 4 steps
  const stepAnimations = [
    {
      opacity: useTransform(scrollYProgress, [0.12, 0.16, 0.32, 0.36], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [0.12, 0.16, 0.32, 0.36], [40, 0, 0, -40]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.32, 0.36, 0.52, 0.56], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [0.32, 0.36, 0.52, 0.56], [40, 0, 0, -40]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.52, 0.56, 0.72, 0.76], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [0.52, 0.56, 0.72, 0.76], [40, 0, 0, -40]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.72, 0.76, 0.92, 0.96], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [0.72, 0.76, 0.92, 0.96], [40, 0, 0, -40]),
    },
  ];

  return (
    <div ref={containerRef} className="relative h-[480vh] bg-transparent">
      {/* Sticky screen wrapper */}
      <div className="sticky top-0 h-screen w-full bg-transparent text-white flex flex-col overflow-hidden py-12 px-6 md:px-12">
        {/* Subtle top border line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-zinc-900" />
        
        {/* Header Container - Fixed at the top */}
        <motion.div 
          style={{ opacity: headingOpacity }}
          className="relative z-20 flex flex-col items-center mb-8 shrink-0"
        >
          {/* HOW IT WORKS Chip */}
          <div className="border border-zinc-800 rounded-full px-4 py-1.5 mb-4 bg-zinc-950/50">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#0062ff]">
              4AT.AI
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 
            className="text-center font-black uppercase tracking-tight leading-[0.95] max-w-4xl text-white"
            style={{ fontSize: "clamp(24px, 4vw, 54px)" }}
          >
            DISCOVER. DESIGN. DEPLOY.
          </h2>
        </motion.div>

        {/* Steps Presentation Area */}
        <div className="relative flex-1 w-full max-w-[1200px] mx-auto flex items-center justify-center">
          {STEPS.map((step, index) => {
            const isImageLeft = step.imageAlign === "left";
            const anim = stepAnimations[index];
            
            return (
              <motion.div
                key={step.num}
                style={{ 
                  opacity: anim.opacity,
                  y: anim.y,
                }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full py-4"
              >
                {/* Side-by-side Layout wrapper */}
                <div 
                  className={`w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 h-full ${
                    isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image Column */}
                  <div className="flex-1 w-full max-w-[480px] aspect-square flex items-center justify-center relative overflow-hidden bg-transparent">
                    {step.image ? (
                      <img 
                        src={step.image.src} 
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-950 flex items-center justify-center text-zinc-800">
                        Placeholder Image
                      </div>
                    )}
                  </div>

                  {/* Text Content Column */}
                  <div className="flex-1 w-full relative flex flex-col justify-center min-h-[300px]">
                    {/* Big background number */}
                    <span className="absolute right-0 bottom-0 text-[120px] md:text-[160px] font-black text-zinc-900/20 select-none pointer-events-none z-0">
                      {step.num}
                    </span>
                    
                    {/* Active Content details */}
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-4.5xl font-black tracking-tight uppercase mb-4 text-white">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-zinc-450 leading-relaxed mb-6 font-medium max-w-[90%]">
                        {step.desc}
                      </p>
                      
                      {/* Bullet points */}
                      <ul className="space-y-4 mb-8">
                        {step.includes.map((inc) => (
                          <li key={inc} className="text-base md:text-lg text-zinc-200 flex items-start gap-3 font-bold">
                            <span className="text-zinc-650 font-bold mt-0.5">&gt;</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Time Period label */}
                      <p className="text-xs md:text-sm font-bold tracking-widest text-zinc-550 uppercase">
                        {step.time}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
