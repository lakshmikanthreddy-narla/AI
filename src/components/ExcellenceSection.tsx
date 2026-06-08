import excellenceBg from "@/assets/excellence_bg.png";

export function ExcellenceSection() {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[850px] bg-black text-white overflow-hidden flex flex-col justify-between p-8 md:p-16 lg:p-24 border-t border-white/[0.05]">
      
      {/* Background Image with Dark Vignette/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={excellenceBg} 
          alt="Excellence Background" 
          className="w-full h-full object-cover object-center opacity-70"
        />
        {/* Dark overlay to ensure white text is perfectly readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10" />
        <div className="absolute inset-0 bg-black/25 z-10" />
      </div>

      {/* LEFT-TOP OVERLAY (z-20) */}
      <div className="relative z-20 flex flex-col items-start max-w-sm mt-4">
        <span 
          className="font-black leading-none text-white tracking-tighter" 
          style={{ fontSize: "clamp(80px, 15vw, 180px)" }}
        >
          5+
        </span>
        <span className="text-sm md:text-lg lg:text-xl font-black tracking-[0.2em] uppercase text-white leading-tight mt-2">
          YEARS OF<br />EXPERIENCE
        </span>
      </div>

      {/* RIGHT-BOTTOM OVERLAY (z-20) */}
      <div className="relative z-20 flex flex-col items-end self-end max-w-2xl mt-12 text-right">
        
        {/* 4AT Logo Group */}
        <div className="flex items-center gap-1.5 mb-4 justify-end">
          <span className="text-xs font-bold tracking-tight text-white/90">4AT®</span>
        </div>

        {/* Quote */}
        <h3 className="text-base md:text-xl lg:text-2xl font-extrabold tracking-tight text-white uppercase leading-normal max-w-lg mb-8">
          “AI should simplify decisions, not complicate them. Our mission is to make intelligence practical for every business.”
        </h3>

        {/* Glassmorphic Stats Blocks */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {/* Stat 1 */}
          <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 flex flex-col items-start text-left shadow-lg">
            <span className="text-2xl md:text-3xl font-black text-white">50+</span>
            <span className="text-[10px] md:text-xs text-zinc-400 font-semibold mt-1 leading-snug">
              AI models for smarter decisions
            </span>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 flex flex-col items-start text-left shadow-lg">
            <span className="text-2xl md:text-3xl font-black text-white">98%</span>
            <span className="text-[10px] md:text-xs text-zinc-400 font-semibold mt-1 leading-snug">
              Client satisfaction rate
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
