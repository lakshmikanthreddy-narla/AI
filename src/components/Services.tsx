import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

// Images placed in src/assets/ — fallback to placeholder colors if not yet present
let card1: string, card2: string, card3: string, card4: string;
try { card1 = new URL("../assets/card1_strategy.png", import.meta.url).href; } catch { card1 = ""; }
try { card2 = new URL("../assets/card2.png", import.meta.url).href; } catch { card2 = ""; }
try { card3 = new URL("../assets/card3.png", import.meta.url).href; } catch { card3 = ""; }
try { card4 = new URL("../assets/card4.png", import.meta.url).href; } catch { card4 = ""; } const SERVICES = [
  {
    id: "00-1",
    title: "FINANCIAL STRATEGY\n& ADVISORY",
    image: card1,
    desc: "We align financial frameworks to support long-term corporate growth, risk management, and intelligent capital allocation.",
    includes: ["Corporate finance advisory", "Risk assessment frameworks", "Strategic capital allocation"],
  },
  {
    id: "00-2",
    title: "INTELLIGENT AUTOMATION\n& ANALYTICS",
    image: card2,
    desc: "We build intelligent automation pipelines and data models to streamline financial reporting and predictive decision analytics.",
    includes: ["Automated reporting pipelines", "Predictive modeling dashboards", "Operational intelligence"],
  },
  {
    id: "00-3",
    title: "PROCESS\nOPTIMIZATION",
    image: card3,
    desc: "We analyze and refine operational workflows to eliminate waste, improve output speed, and minimize margins of error.",
    includes: ["Workflow audits", "Efficiency engineering", "Continuous improvement planning"],
  },
  {
    id: "00-4",
    title: "SCALABLE BUSINESS\nSOLUTIONS",
    image: card4,
    desc: "We architect robust, cross-functional platforms and systems that scale seamlessly alongside your expanding business operations.",
    includes: ["Enterprise architecture", "Scalable systems design", "Operational framework scale"],
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(2); // Default to card 00-3 active

  return (
    <section id="services" className="bg-[#f0efeb] text-black py-20 px-0 overflow-hidden">
      {/* Heading */}
      <div className="px-6 mb-16 max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 block mb-4">
            Services & Frameworks
          </span>
          <h2
            className="font-black uppercase tracking-tight text-center mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 76px)", lineHeight: 0.95 }}
          >
            What 4AT Does
          </h2>
          <p className="text-zinc-650 text-base md:text-lg font-bold leading-relaxed max-w-2xl mx-auto">
            We build the foundation that supports aspirational and effective financial decision-making.
          </p>
        </Reveal>
      </div>

      {/* Edge-to-edge Card row */}
      <div className="w-full flex border-y border-zinc-300 divide-x divide-zinc-300 min-h-[700px] bg-white">
        {SERVICES.map((service, index) => {
          const isActive = hoveredIndex === index;
          return (
            <div
              key={service.id}
              className="relative flex flex-col justify-between overflow-hidden cursor-pointer p-6 transition-all duration-500 ease-out"
              style={{
                flex: isActive ? 1.6 : 0.8,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {/* Background image & overlay for active card */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-0"
                  >
                    {service.image ? (
                      <img
                        src={service.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Text & Content wrapper */}
              <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                {/* Top: Card Number & Title for Active Card */}
                <div>
                  <p className={`text-xs font-bold ${isActive ? "text-zinc-400" : "text-zinc-400"}`}>
                    {service.id}
                  </p>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mt-4"
                    >
                      <h3 className="font-black uppercase text-2xl leading-none text-white whitespace-pre-line">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-300 mt-4 leading-relaxed max-w-[90%] font-medium">
                        {service.desc}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Bottom details for active, or Title for inactive */}
                <div className="mt-auto">
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6"
                    >
                      <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-3 font-bold">
                        KEY FOCUS AREAS
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.includes.map((inc) => (
                          <span
                            key={inc}
                            className="text-xs bg-black/60 border border-zinc-700/60 backdrop-blur-md px-3 py-1.5 text-white font-medium rounded-sm"
                          >
                            {inc}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <h3 className="font-black uppercase text-base leading-tight text-black whitespace-pre-line mt-4">
                      {service.title}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Card 5 — 4AT CTA (dark green, stable size) */}
        <div
          className="relative flex flex-col justify-between bg-[#1f2619] text-white p-6 transition-all duration-500 ease-out"
          style={{ flex: 1.2 }}
        >
          {/* Subtle green ambient light background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2b3523]/30 to-black/80 z-0 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-2">
            <span className="text-sm font-semibold tracking-wide text-zinc-200">4AT®</span>
          </div>

          <div className="relative z-10 mt-auto">
            <h3 className="font-black uppercase text-xl leading-tight mb-6 tracking-tight max-w-[90%]">
              START YOUR OPERATIONS JOURNEY WITH US
            </h3>
            <a
              href="#contact"
              className="group flex items-center justify-between border border-white/25 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all rounded-sm"
            >
              <span className="bg-white text-black px-5 py-3.5 text-sm font-bold flex-1 text-center">Let's Talk</span>
              <span className="bg-black text-white border-l border-white/25 px-4 py-3.5 self-stretch flex items-center">
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="w-full max-w-[1280px] mx-auto px-8 mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        {/* Left: text + CTA */}
        <div>
          <h3 className="text-black text-2xl md:text-3xl font-bold tracking-tight leading-snug">
            Our performance metrics show how<br />
            <span className="text-zinc-400">AI delivers measurable impact.</span>
          </h3>
          <a
            href="#contact"
            className="group mt-6 inline-flex items-center border border-zinc-300 overflow-hidden hover:shadow-md transition-all"
          >
            <span className="bg-black text-white px-6 py-3.5 text-sm font-bold">Get started now</span>
            <span className="bg-white text-black border-l border-zinc-300 px-4 py-3.5 self-stretch flex items-center transition-transform">
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Right: 3 stats */}
        <div className="flex flex-row gap-8 sm:gap-12 lg:gap-16">
          {[
            { num: "5X",   label: "Faster AI execution" },
            { num: "99%",  label: "Reliable system uptime" },
            { num: "62+",  label: "Businesses supported" },
          ].map((s) => (
            <div key={s.num} className="flex flex-col">
              <span className="font-black text-black tracking-tighter" style={{ fontSize: "clamp(40px, 4.5vw, 60px)", lineHeight: 1 }}>
                {s.num}
              </span>
              <span className="text-zinc-500 text-xs md:text-sm font-medium mt-2 whitespace-nowrap">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
