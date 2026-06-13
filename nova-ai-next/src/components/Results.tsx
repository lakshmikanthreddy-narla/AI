import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import fleetMaintenanceImg from "@/assets/fleet_maintenance.png";
import talentScreeningImg from "@/assets/talent_screening.png";
import customerSupportImg from "@/assets/customer_support.png";
import healthcareDiagnosticsImg from "@/assets/healthcare_diagnostics.png";
import contentPersonalizationImg from "@/assets/content_personalization.png";
import card1 from "@/assets/card1.png";

const MORE_CASES = [
  { title: "PREDICTIVE FLEET MAINTENANCE AI", year: "2025" },
  { title: "AI TALENT SCREENING ASSISTANT", year: "2025" },
  { title: "AUTOMATED CUSTOMER SUPPORT", year: "2025" },
  { title: "HEALTHCARE DIAGNOSTICS SYSTEM", year: "2025" },
  { title: "AI CONTENT PERSONALIZATION", year: "2025" },
];

export function Results() {
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  const isAnyImageHovered =
    hoveredCase === "PREDICTIVE FLEET MAINTENANCE AI" ||
    hoveredCase === "AI TALENT SCREENING ASSISTANT" ||
    hoveredCase === "AUTOMATED CUSTOMER SUPPORT" ||
    hoveredCase === "HEALTHCARE DIAGNOSTICS SYSTEM" ||
    hoveredCase === "AI CONTENT PERSONALIZATION";

  return (
    <section id="work" className="bg-white text-black py-20 px-0">
      <div className="w-full">

        {/* Heading */}
        <div className="w-full pl-6 pr-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-black uppercase tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
          >
            4AT ACHIEVEMENTS
          </motion.h2>
        </div>

        {/* Featured case + details */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] border-y border-zinc-200">

          {/* LEFT: featured image */}
          <div className="relative overflow-hidden min-h-[500px] lg:min-h-[600px] w-full">
            {card1 ? (
              <img src={card1.src} alt="Featured case" className="absolute inset-0 w-full h-full object-cover object-center" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-400" />
            )}
            {/* oslo. logo */}
            <div className="absolute top-8 left-8">
              <span className="text-white font-black text-3xl">oslo.</span>
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-8 left-8 flex gap-12">
              <div>
                <p className="text-white font-black text-5xl tracking-tighter">70%</p>
                <p className="text-white/85 text-xs mt-2 max-w-[140px] font-medium leading-normal">Increase in fraud detection accuracy</p>
              </div>
              <div>
                <p className="text-white font-black text-5xl tracking-tighter">2X</p>
                <p className="text-white/85 text-xs mt-2 max-w-[140px] font-medium leading-normal">Real-time anomaly scanning</p>
              </div>
            </div>
          </div>

          {/* RIGHT: case details */}
          <div className="border-t lg:border-t-0 lg:border-l border-zinc-200 flex flex-col justify-between bg-white">
            {/* Top */}
            <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] uppercase tracking-widest border border-zinc-300 px-3 py-1 font-bold text-zinc-650">Featured</span>
              </div>
              <h3 className="font-black uppercase text-2xl lg:text-3xl leading-tight mb-4">FINANCIAL RISK DETECTION</h3>
              <p className="text-zinc-500 text-sm lg:text-base mt-2 leading-relaxed max-w-[90%] font-medium">
                A fraud-detection AI built to monitor high-risk transactions, flag anomalies, and protect financial institutions with real-time intelligence.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="group inline-flex items-center border border-zinc-300 overflow-hidden hover:shadow-md transition-all rounded-sm"
                >
                  <span className="bg-black text-white px-6 py-3.5 text-sm font-bold">View full case study</span>
                  <span className="bg-white text-black border-l border-zinc-300 px-4 py-3.5 self-stretch flex items-center">
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </div>

            {/* Meta rows */}
            <div className="border-t border-zinc-200 bg-zinc-50/30">
              {[
                { label: "Date:", value: "November 25, 2025" },
                { label: "Client:", value: "SecureBank India" },
                { label: "Industry:", value: "FinTech & banking" },
                { label: "Services:", value: "Machine Learning, Dashboard Engineering, Security Audits" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between px-8 py-4 border-b border-zinc-100 last:border-0">
                  <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">{row.label}</span>
                  <span className="text-zinc-800 text-sm font-medium text-right max-w-[60%]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More case studies + right column */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] border-x-0 border-b border-zinc-200 bg-white">

          {/* More case list */}
          <div className="border-r-0 lg:border-r border-zinc-200">
            <div className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 bg-zinc-50/20">
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">More Case Studies</span>
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold mr-8">Year</span>
            </div>
            {MORE_CASES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onMouseEnter={() => setHoveredCase(c.title)}
                onMouseLeave={() => setHoveredCase(null)}
                className="relative overflow-hidden flex items-center justify-between px-8 py-5 border-b border-zinc-100 last:border-0 group cursor-pointer"
              >
                {/* Top slide-down black background */}
                <div className="absolute top-0 left-0 w-full h-0 bg-black transition-all duration-300 ease-out group-hover:h-1/2 z-0" />
                {/* Bottom slide-up black background */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-300 ease-out group-hover:h-1/2 z-0" />

                {/* Content */}
                <div className="relative z-10 w-full flex items-center justify-between pointer-events-none">
                  <span className="font-black uppercase text-sm lg:text-base tracking-tight text-black group-hover:text-white transition-colors duration-300">{c.title}</span>
                  <div className="flex items-center gap-6">
                    <span className="text-zinc-400 group-hover:text-zinc-300 text-sm font-semibold transition-colors duration-300">{c.year}</span>
                    <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: since label + card chip image placeholder */}
          <div className="flex flex-col justify-between p-8 bg-zinc-50/10">
            <div className="flex items-center justify-between mb-8 lg:mb-0">
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">Since (2019-25)</span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-zinc-700">4AT®</span>
              </div>
            </div>
            {/* Chip card visual container with hover pop-up */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center shadow-md max-w-[320px] mx-auto w-full">
              {/* Default chip card */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center transition-all duration-300 ${isAnyImageHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                <div className="size-16 rounded-xl bg-yellow-400/80 flex items-center justify-center shadow-inner">
                  <div className="size-8 rounded bg-yellow-600/60" />
                </div>
              </div>
              {/* Pop-up server image */}
              <img
                src={fleetMaintenanceImg.src}
                alt="Predictive Fleet Maintenance"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${hoveredCase === "PREDICTIVE FLEET MAINTENANCE AI" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              />
              {/* Pop-up talent screening image */}
              <img
                src={talentScreeningImg.src}
                alt="AI Talent Screening Assistant"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${hoveredCase === "AI TALENT SCREENING ASSISTANT" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              />
              {/* Pop-up customer support image */}
              <img
                src={customerSupportImg.src}
                alt="Automated Customer Support"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${hoveredCase === "AUTOMATED CUSTOMER SUPPORT" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              />
              {/* Pop-up healthcare diagnostics image */}
              <img
                src={healthcareDiagnosticsImg.src}
                alt="Healthcare Diagnostics System"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${hoveredCase === "HEALTHCARE DIAGNOSTICS SYSTEM" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              />
              {/* Pop-up content personalization image */}
              <img
                src={contentPersonalizationImg.src}
                alt="AI Content Personalization"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${hoveredCase === "AI CONTENT PERSONALIZATION" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
