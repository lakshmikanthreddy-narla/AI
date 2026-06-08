import { ArrowUpRight } from "lucide-react";
import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";

export function BlogSection() {
  return (
    <section className="bg-[#fcfcfc] text-black py-24 px-6 md:px-12 lg:px-20 w-full overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            {/* Top Chip */}
            <span className="text-[10px] tracking-[0.25em] font-black text-zinc-800 uppercase border border-zinc-350 rounded-md px-4 py-1.5 bg-white/40 block mb-6 w-fit">
              Insights & Updates
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[0.95]">
              Stay ahead with<br />AI knowledge
            </h2>
          </div>

          {/* View All Blogs CTA */}
          <a 
            href="#" 
            className="group flex items-center border border-zinc-300 overflow-hidden hover:shadow-md transition-all rounded-sm"
          >
            <span className="bg-black text-white px-5 py-3.5 text-xs font-bold uppercase tracking-widest">
              View all blogs
            </span>
            <span className="bg-white text-black border-l border-zinc-300 px-3 py-3.5 self-stretch flex items-center justify-center">
              <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT POST (60% width - col-span 7) */}
          <div className="lg:col-span-7 flex flex-col group cursor-pointer">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/50">
              <img 
                src={blog1} 
                alt="From Data to Decisions" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-5 flex justify-between items-start gap-4">
              <h4 className="font-black text-lg md:text-xl lg:text-2xl uppercase tracking-tight text-black leading-none group-hover:text-zinc-700 transition-colors max-w-[75%]">
                From data to decisions: turning insights into action
              </h4>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider whitespace-nowrap pt-1">
                November 17, 2025
              </span>
            </div>
          </div>

          {/* RIGHT POST (40% width - col-span 5) */}
          <div className="lg:col-span-5 flex flex-col group cursor-pointer">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/50">
              <img 
                src={blog2} 
                alt="AI-Powered Marketing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-5 flex justify-between items-start gap-4">
              <h4 className="font-black text-lg md:text-xl lg:text-2xl uppercase tracking-tight text-black leading-none group-hover:text-zinc-700 transition-colors max-w-[70%]">
                AI-powered marketing: smarter campaigns, better results
              </h4>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider whitespace-nowrap pt-1">
                November 17, 2025
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
