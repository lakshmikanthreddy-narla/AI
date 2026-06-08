import { motion } from "framer-motion";
import { ChevronRight, Star, Menu } from "lucide-react";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";
import card4 from "@/assets/card4.png";

// Team member avatars for "Expert AI Team"
const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
];

export function FeaturesGrid() {
  return (
    <section id="features-grid" className="bg-[#fcfcfc] text-black py-24 px-6 md:px-12 lg:px-16 w-full overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-3">
            Why choose us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[0.95]">
            Smarter AI.<br />Real results.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:col-span-12 gap-6 items-stretch lg:grid-cols-12">
          
          {/* CARD 1: STRATEGIC CUSTOMIZATION (Left column, row-span 2) */}
          <div className="lg:col-span-4 bg-[#0d0d0d] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[600px] lg:min-h-[720px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/[0.08]">
            <div className="relative z-10">
              <span className="text-[10px] tracking-[0.2em] font-bold text-zinc-500 uppercase border border-zinc-800 rounded-full px-3 py-1">
                Custom Solutions
              </span>
              <h3 className="text-2xl font-black tracking-tight mt-6 uppercase leading-none">
                Strategic Customization
              </h3>
              <p className="text-zinc-400 text-sm mt-3 max-w-[280px] leading-relaxed">
                AI solutions tailored to align perfectly with your business strategy.
              </p>
              
              <ul className="mt-8 space-y-4">
                {[
                  "Tailored AI solutions",
                  "Aligned with strategy",
                  "Custom-Built AI",
                  "Strategic integration",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                    <ChevronRight className="size-4 text-red-500 stroke-[3px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Robot Image cropped at the bottom */}
            <div className="absolute bottom-0 right-0 w-[95%] h-[55%] pointer-events-none select-none z-0 translate-y-[5%] translate-x-[5%]">
              <img 
                src={card1} 
                alt="Strategic Customization AI" 
                className="w-full h-full object-contain object-bottom-right opacity-90"
              />
            </div>
            
            {/* Card 1 Footer */}
            <div className="relative z-10 flex items-center justify-between mt-auto pt-8 border-t border-white/[0.05]">
              <span className="text-xs text-zinc-500 font-medium">
                © 2025 4AT Agency
              </span>
              <Menu className="size-4 text-zinc-500 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* MIDDLE COLUMN (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* CARD 2: EXPERT AI TEAM */}
            <div className="bg-[#f5f5f3] rounded-3xl p-8 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[340px] lg:h-[348px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-zinc-200/50">
              
              {/* Avatars Cloud background with a splatter/spray-paint look */}
              <div className="relative w-full h-[140px] flex items-center justify-center">
                {/* Speckled background graphic */}
                <div className="absolute inset-0 bg-[radial-gradient(#d1d1d1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 rounded-full blur-sm" />
                
                {/* Floating overlapping circle avatars */}
                <div className="relative w-full max-w-[260px] h-full">
                  {/* Central Avatar */}
                  <div className="absolute top-[35%] left-[40%] translate-x-[-10%] translate-y-[-10%] size-16 rounded-full border-[3px] border-[#f5f5f3] shadow-lg overflow-hidden z-35 scale-110">
                    <img src={AVATARS[0]} className="w-full h-full object-cover" alt="" />
                  </div>
                  
                  {/* Surrounding Avatars */}
                  <div className="absolute top-[15%] left-[20%] size-10 rounded-full border-2 border-[#f5f5f3] shadow-md overflow-hidden z-20">
                    <img src={AVATARS[1]} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="absolute top-[10%] left-[65%] size-11 rounded-full border-2 border-[#f5f5f3] shadow-md overflow-hidden z-20">
                    <img src={AVATARS[2]} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="absolute top-[55%] left-[15%] size-11 rounded-full border-2 border-[#f5f5f3] shadow-md overflow-hidden z-20">
                    <img src={AVATARS[3]} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="absolute top-[50%] left-[68%] size-12 rounded-full border-2 border-[#f5f5f3] shadow-md overflow-hidden z-25">
                    <img src={AVATARS[4]} className="w-full h-full object-cover" alt="" />
                  </div>
                  
                  {/* Outer edge smaller ones */}
                  <div className="absolute top-[30%] left-[5%] size-8 rounded-full border-2 border-[#f5f5f3] shadow-sm overflow-hidden z-10 opacity-70">
                    <img src={AVATARS[5]} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="absolute top-[5%] left-[45%] size-9 rounded-full border-2 border-[#f5f5f3] shadow-sm overflow-hidden z-10 opacity-85">
                    <img src={AVATARS[6]} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="absolute top-[40%] left-[85%] size-9 rounded-full border-2 border-[#f5f5f3] shadow-sm overflow-hidden z-10 opacity-60">
                    <img src={AVATARS[7]} className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-4 flex flex-col items-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs font-bold tracking-tight text-zinc-800">4AT®</span>
                </div>
                <h4 className="text-lg font-black tracking-tight uppercase text-black">
                  Expert AI Team
                </h4>
                <p className="text-zinc-500 text-xs mt-1 max-w-[280px]">
                  Specialists who align technology with your business goals.
                </p>
              </div>
            </div>

            {/* NESTED ROW (Two smaller cards side-by-side) */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* CARD 4: 256+ HAPPY CLIENTS */}
              <div className="rounded-3xl p-6 relative overflow-hidden min-h-[180px] flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-zinc-200/40">
                {/* Foam texture image background */}
                <img 
                  src={card2} 
                  alt="Background texture" 
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-black tracking-tight text-black leading-none">
                    256+
                  </h4>
                  <p className="text-zinc-650 text-xs font-semibold mt-1">
                    Happy clients
                  </p>
                </div>
                
                {/* 5 Dark/metallic rating stars */}
                <div className="relative z-10 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-zinc-800 stroke-zinc-800" />
                  ))}
                </div>
              </div>

              {/* CARD 5: SAFE & RELIABLE */}
              <div className="bg-[#f5f5f3] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[180px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-zinc-200/50">
                <div className="relative z-10">
                  <h4 className="text-sm font-black tracking-tight uppercase text-black leading-tight">
                    Safe &<br />Reliable
                  </h4>
                </div>

                {/* Metallic Shield graphic offset on the right */}
                <div className="absolute right-[-10%] bottom-[-10%] w-[65%] h-[65%] opacity-90 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
                    {/* Metallic Outer shield border */}
                    <path 
                      d="M10 20 L50 5 L90 20 C90 55 50 85 50 95 C50 85 10 55 10 20 Z" 
                      fill="url(#shieldGrad)" 
                      stroke="#bfbfbf" 
                      strokeWidth="2"
                    />
                    {/* Metallic Inner shield */}
                    <path 
                      d="M20 27 L50 15 L80 27 C80 57 50 80 50 88 C50 80 20 57 20 27 Z" 
                      fill="url(#innerShieldGrad)" 
                      stroke="#d9d9d9" 
                      strokeWidth="1.5"
                    />
                    {/* Futuristic circuitry nodes on shield */}
                    <circle cx="50" cy="35" r="4" fill="#1f2619" />
                    <line x1="50" y1="39" x2="50" y2="52" stroke="#1f2619" strokeWidth="2.5" />
                    <circle cx="50" cy="55" r="3" fill="#1f2619" />
                    <line x1="50" y1="58" x2="50" y2="70" stroke="#1f2619" strokeWidth="2.5" />
                    <circle cx="50" cy="73" r="4" fill="#1f2619" />
                    
                    <line x1="38" y1="48" x2="47" y2="55" stroke="#1f2619" strokeWidth="2" />
                    <circle cx="35" cy="46" r="3" fill="#1f2619" />
                    <line x1="62" y1="48" x2="53" y2="55" stroke="#1f2619" strokeWidth="2" />
                    <circle cx="65" cy="46" r="3" fill="#1f2619" />

                    <defs>
                      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e6e6e6" />
                        <stop offset="50%" stopColor="#b3b3b3" />
                        <stop offset="100%" stopColor="#808080" />
                      </linearGradient>
                      <linearGradient id="innerShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#d9d9d9" />
                        <stop offset="100%" stopColor="#a6a6a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="relative z-10 mt-auto">
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">
                    (©19-25)
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* CARD 3: SCALABLE FOR GROWTH */}
            <div className="bg-[#0a0a0a] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[340px] lg:h-[348px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/[0.08]">
              <div className="relative z-10">
                <h4 className="text-lg font-black tracking-tight uppercase text-white leading-none">
                  Scalable for Growth
                </h4>
                <p className="text-zinc-400 text-xs mt-1.5">
                  AI systems that grow with your business.
                </p>
              </div>

              {/* Area chart visualization */}
              <div className="relative w-full h-[150px] my-4 flex items-end">
                {/* SVG Area Chart */}
                <svg viewBox="0 0 300 130" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00c853" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00c853" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Horizontal grid lines */}
                  <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <line x1="0" y1="120" x2="300" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

                  {/* Gradient fill */}
                  <path 
                    d="M 0 120 C 50 120, 80 85, 110 85 C 140 85, 170 12, 210 12 C 240 12, 270 50, 300 50 L 300 120 L 0 120 Z" 
                    fill="url(#chartGlow)"
                  />
                  
                  {/* Bold line stroke */}
                  <path 
                    d="M 0 120 C 50 120, 80 85, 110 85 C 140 85, 170 12, 210 12 C 240 12, 270 50, 300 50" 
                    fill="none" 
                    stroke="#00c853" 
                    strokeWidth="3.5" 
                  />

                  {/* Highlight dots and label lines */}
                  <circle cx="110" cy="85" r="4.5" fill="#00c853" stroke="#0a0a0a" strokeWidth="2" />
                  <circle cx="210" cy="12" r="5" fill="#00c853" stroke="#0a0a0a" strokeWidth="2" />
                  <circle cx="300" cy="50" r="4.5" fill="#00c853" stroke="#0a0a0a" strokeWidth="2" />
                </svg>

                {/* Growth Tooltip labels */}
                <div className="absolute top-[52%] left-[30%] bg-zinc-900 border border-zinc-800 text-[#00c853] text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                  30%
                </div>
                <div className="absolute top-[0%] left-[68%] bg-zinc-900 border border-zinc-800 text-[#00c853] text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                  80%
                </div>
                <div className="absolute top-[28%] right-[-1%] bg-zinc-900 border border-zinc-800 text-[#00c853] text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                  50%
                </div>
                
                {/* Floating circular metallic badge on the left */}
                <div className="absolute left-[3%] top-[45%] size-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/60 shadow-lg flex items-center justify-center">
                  <div className="size-6 rounded-full border-2 border-dashed border-zinc-500 flex items-center justify-center animate-[spin_12s_linear_infinite]">
                    <div className="size-2 rounded-full bg-[#00c853]" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.05]">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                  10% more compare to the last month
                </span>
              </div>
            </div>

            {/* CARD 6: REAL TIME SUPPORT 24/7 */}
            <div className="bg-[#e6e5e0] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[200px] lg:h-[220px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-zinc-200/50">
              {/* Cloudy misty background using absolute styled gradient divs */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-350/25 via-zinc-200/40 to-zinc-400/20 z-0 pointer-events-none" />
              
              {/* Overlapping hands pointing to each other (Creation of Adam concept) */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-between px-2 pointer-events-none z-10">
                {/* Human Hand */}
                <img 
                  src={card3} 
                  alt="Human hand" 
                  className="w-[50%] h-[60%] object-contain object-left-bottom translate-x-[-10%] translate-y-[15%] rotate-[10deg] opacity-95"
                />
                
                {/* Robot Hand */}
                <img 
                  src={card4} 
                  alt="Robot hand" 
                  className="w-[50%] h-[60%] object-contain object-right-top translate-x-[10%] translate-y-[-15%] rotate-[-10deg] opacity-95"
                />
              </div>

              {/* Gradient to darken text areas slightly for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e6e5e0]/60 via-transparent to-[#e6e5e0]/60 z-15 pointer-events-none" />

              {/* Text Layout */}
              <div className="relative z-20 flex justify-between items-start w-full">
                <div>
                  <h4 className="text-base font-black tracking-tight uppercase text-black leading-none">
                    Real Time Support
                  </h4>
                  <p className="text-zinc-650 text-xs mt-1 max-w-[170px] leading-snug">
                    From planning to launch and beyond.
                  </p>
                </div>
                
                <span className="text-3xl font-black tracking-tighter text-black">
                  24/7
                </span>
              </div>
              
              {/* Dummy bottom buffer for layout height alignment */}
              <div className="h-4" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
