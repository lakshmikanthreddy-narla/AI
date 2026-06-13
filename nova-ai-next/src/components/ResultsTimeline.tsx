import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  label: string;
  title: string;
  subtitle: string;
  desc: string;
  includes: string[];
}

const MILESTONES: Milestone[] = [
  {
    id: "01",
    year: "2019",
    label: "2019 | Foundation",
    title: "Foundation",
    subtitle: "4AT Consulting LLP Established",
    desc: "4AT was established with a clear vision: to transform financial consulting through structured thinking and strategic insight.",
    includes: [
      "Financial planning & structuring",
      "Risk & compliance advisory",
      "Business performance evaluation",
      "Strategic decision support"
    ]
  },
  {
    id: "02",
    year: "2023",
    label: "2023 | Scale & Trust",
    title: "Scale & Trust",
    subtitle: "Expanding Service Excellence",
    desc: "Crossed 120+ clients, building strong credibility and long-term partnerships across industries.",
    includes: [
      "Accounting Automation",
      "Audit & Assurance",
      "Advisory Insights",
      "Transformation"
    ]
  },
  {
    id: "03",
    year: "2024",
    label: "2024 | 4AT Academy",
    title: "4AT Academy",
    subtitle: "Training the Next Generation",
    desc: "Launched 4AT Academy, empowering talent with practical, industry-relevant knowledge and future-ready skills.",
    includes: [
      "Industry-aligned training programs",
      "Practical and hands-on learning",
      "Certification & skill pathways",
      "Career readiness & placement support"
    ]
  },
  {
    id: "04",
    year: "2026",
    label: "2026 | 4AT.AI",
    title: "4AT.AI",
    subtitle: "The AI-Powered Future",
    desc: "Stepping into the future with 4AT.AI — integrating artificial intelligence into consulting, automation, and decision-making.",
    includes: [
      "Financial process automation",
      "Advanced analytics & dashboards",
      "Predictive insights & forecasting",
      "Intelligent reporting systems"
    ]
  }
];

export function ResultsTimeline() {
  const [activeMilestone, setActiveMilestone] = useState(3); // Default to 4AT.AI (2026)

  return (
    <section id="journey" className="w-full bg-[#f8f9fa] text-black py-24 px-6 md:px-12 lg:px-16 border-t border-zinc-200 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Title area matching the layout */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block border border-zinc-300 rounded-full px-4 py-1.5 mb-6 bg-white/70">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#0052d4] block">
              Our Journey
            </span>
          </div>
          <h2 
            className="font-black uppercase tracking-tight text-black leading-[0.95]"
            style={{ fontSize: "clamp(32px, 5.5vw, 68px)" }}
          >
            Building the<br />Future of Finance
          </h2>
        </div>

        {/* Dynamic Growth Chart Panel */}
        <div className="relative w-full bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden mb-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,98,255,0.02)_0%,transparent_100%)] pointer-events-none" />

          {/* SVG Chart Line */}
          <div className="relative w-full h-[280px] mb-12 flex items-end">
            <svg viewBox="0 0 1000 240" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0062ff" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0062ff" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="0" y1="60" x2="1000" y2="60" stroke="rgba(0,0,0,0.03)" strokeDasharray="5 5" />
              <line x1="0" y1="120" x2="1000" y2="120" stroke="rgba(0,0,0,0.03)" strokeDasharray="5 5" />
              <line x1="0" y1="180" x2="1000" y2="180" stroke="rgba(0,0,0,0.03)" strokeDasharray="5 5" />

              {/* Area Under Curve */}
              <path 
                d="M 50 220 C 200 220, 250 160, 360 160 C 500 160, 560 105, 640 105 C 720 105, 780 50, 900 30 L 950 20 L 950 240 L 50 240 Z" 
                fill="url(#curveFill)"
              />

              {/* Curve Line */}
              <path 
                d="M 50 220 C 200 220, 250 160, 360 160 C 500 160, 560 105, 640 105 C 720 105, 780 50, 900 30 L 950 20" 
                fill="none" 
                stroke="#0062ff" 
                strokeWidth="5" 
                style={{ filter: "drop-shadow(0px 3px 8px rgba(0,98,255,0.25))" }}
              />

              {/* Interactive Circles on Curve */}
              {/* Circle 1 */}
              <circle 
                cx="360" 
                cy="160" 
                r="10" 
                className="cursor-pointer"
                fill="white" 
                stroke={activeMilestone === 0 ? "#0062ff" : "#18181b"} 
                strokeWidth="5"
                onMouseEnter={() => setActiveMilestone(0)}
                onClick={() => setActiveMilestone(0)}
              />
              {activeMilestone === 0 && <circle cx="360" cy="160" r="18" fill="none" stroke="#0062ff" strokeOpacity="0.3" strokeWidth="2" />}

              {/* Circle 2 */}
              <circle 
                cx="560" 
                cy="105" 
                r="10" 
                className="cursor-pointer"
                fill="white" 
                stroke={activeMilestone === 1 ? "#0062ff" : "#18181b"} 
                strokeWidth="5"
                onMouseEnter={() => setActiveMilestone(1)}
                onClick={() => setActiveMilestone(1)}
              />
              {activeMilestone === 1 && <circle cx="560" cy="105" r="18" fill="none" stroke="#0062ff" strokeOpacity="0.3" strokeWidth="2" />}

              {/* Circle 3 */}
              <circle 
                cx="720" 
                cy="75" 
                r="10" 
                className="cursor-pointer"
                fill="white" 
                stroke={activeMilestone === 2 ? "#0062ff" : "#18181b"} 
                strokeWidth="5"
                onMouseEnter={() => setActiveMilestone(2)}
                onClick={() => setActiveMilestone(2)}
              />
              {activeMilestone === 2 && <circle cx="720" cy="75" r="18" fill="none" stroke="#0062ff" strokeOpacity="0.3" strokeWidth="2" />}

              {/* Circle 4 */}
              <circle 
                cx="880" 
                cy="36" 
                r="10" 
                className="cursor-pointer"
                fill="white" 
                stroke={activeMilestone === 3 ? "#0062ff" : "#18181b"} 
                strokeWidth="5"
                onMouseEnter={() => setActiveMilestone(3)}
                onClick={() => setActiveMilestone(3)}
              />
              {activeMilestone === 3 && <circle cx="880" cy="36" r="18" fill="none" stroke="#0062ff" strokeOpacity="0.3" strokeWidth="2" />}
            </svg>

            {/* Overlaid Label Speech Bubbles */}
            {/* Label 1 */}
            <div 
              onMouseEnter={() => setActiveMilestone(0)}
              onClick={() => setActiveMilestone(0)}
              className={`absolute left-[36%] top-[66.6%] -translate-x-1/2 -translate-y-[48px] cursor-pointer border px-4 py-2.5 rounded-full shadow-sm text-xs md:text-sm font-bold transition-all duration-300 ${
                activeMilestone === 0 
                  ? "bg-white border-zinc-300 text-black scale-105 shadow-md" 
                  : "bg-zinc-50/90 border-zinc-200 text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              2019 | Foundation
            </div>

            {/* Label 2 */}
            <div 
              onMouseEnter={() => setActiveMilestone(1)}
              onClick={() => setActiveMilestone(1)}
              className={`absolute left-[56%] top-[43.75%] -translate-x-1/2 -translate-y-[48px] cursor-pointer border px-4 py-2.5 rounded-full shadow-sm text-xs md:text-sm font-bold transition-all duration-300 ${
                activeMilestone === 1 
                  ? "bg-white border-zinc-300 text-black scale-105 shadow-md" 
                  : "bg-zinc-50/90 border-zinc-200 text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              2023 | Scale & Trust
            </div>

            {/* Label 3 */}
            <div 
              onMouseEnter={() => setActiveMilestone(2)}
              onClick={() => setActiveMilestone(2)}
              className={`absolute left-[72%] top-[31.25%] -translate-x-1/2 -translate-y-[48px] cursor-pointer border px-4 py-2.5 rounded-full shadow-sm text-xs md:text-sm font-bold transition-all duration-300 ${
                activeMilestone === 2 
                  ? "bg-white border-zinc-300 text-black scale-105 shadow-md" 
                  : "bg-zinc-50/90 border-zinc-200 text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              2024 | 4AT Academy
            </div>

            {/* Label 4 */}
            <div 
              onMouseEnter={() => setActiveMilestone(3)}
              onClick={() => setActiveMilestone(3)}
              className={`absolute left-[88%] top-[15%] -translate-x-1/2 -translate-y-[48px] cursor-pointer border px-4 py-2.5 rounded-full shadow-sm text-xs md:text-sm font-bold transition-all duration-300 ${
                activeMilestone === 3 
                  ? "bg-white border-zinc-300 text-black scale-105 shadow-md" 
                  : "bg-zinc-50/90 border-zinc-200 text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              2026 | 4AT.AI
            </div>
          </div>
        </div>

        {/* Interactive Segment/Flow selector */}
        <div className="w-full bg-[#f1f3f5] border border-zinc-200 rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-2 md:gap-4 mb-8">
          <div className="flex items-center gap-1.5 md:gap-3 px-3 py-2 text-xs md:text-sm font-black uppercase text-zinc-400 tracking-wider">
            FROM
          </div>
          
          <button
            onClick={() => setActiveMilestone(0)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeMilestone === 0 ? "bg-white text-[#0062ff] shadow-sm" : "text-zinc-650 hover:bg-white/50"
            }`}
          >
            2019 Foundation
          </button>

          <span className="text-zinc-400 font-bold">→</span>

          <button
            onClick={() => setActiveMilestone(1)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeMilestone === 1 ? "bg-white text-[#0062ff] shadow-sm" : "text-zinc-650 hover:bg-white/50"
            }`}
          >
            2023 Scale
          </button>

          <span className="text-zinc-400 font-bold">→</span>

          <button
            onClick={() => setActiveMilestone(2)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeMilestone === 2 ? "bg-white text-[#0062ff] shadow-sm" : "text-zinc-650 hover:bg-white/50"
            }`}
          >
            2024 Academy
          </button>

          <div className="flex items-center gap-3 ml-auto px-4 py-2 text-xs md:text-sm font-black uppercase text-zinc-400 tracking-wider">
            TO <ArrowRight className="size-4 text-[#0062ff]" /> <span className="text-[#0062ff]">{MILESTONES[activeMilestone].title}</span>
          </div>
        </div>

        {/* Stats Grid Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left Card: Milestone Overview */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  Timeline Milestone
                </span>
                <div className="text-4xl md:text-5xl font-black text-black tracking-tight leading-none mb-4">
                  {MILESTONES[activeMilestone].year}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0052d4] mb-3">
                  {MILESTONES[activeMilestone].subtitle}
                </h4>
              </div>
              <p className="text-zinc-650 text-sm leading-relaxed font-medium mt-2">
                {MILESTONES[activeMilestone].desc}
              </p>
            </div>

            {/* Right Card: Key Focus Areas */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-4">
                Key Focus Areas
              </span>
              <ul className="space-y-3.5 flex-grow">
                {MILESTONES[activeMilestone].includes.map((focus, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-semibold text-zinc-700 leading-relaxed">
                    <CheckCircle2 className="size-4.5 text-[#0052d4] shrink-0 mt-0.5" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
