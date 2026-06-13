"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, Users, Award } from "lucide-react";

export function Academy() {
  const cards = [
    {
      id: "01",
      title: "AI & Machine Learning Foundations",
      category: "Foundational",
      duration: "4 Weeks",
      students: "120+ Enrolled",
      gradient: "from-blue-600/20 to-cyan-500/20",
    },
    {
      id: "02",
      title: "Advanced Prompt Engineering",
      category: "Interactive",
      duration: "2 Weeks",
      students: "85+ Enrolled",
      gradient: "from-purple-600/20 to-pink-500/20",
    },
    {
      id: "03",
      title: "AI Integration in Enterprise Systems",
      category: "Technical",
      duration: "6 Weeks",
      students: "95+ Enrolled",
      gradient: "from-emerald-600/20 to-teal-500/20",
    },
    {
      id: "04",
      title: "Strategic AI Implementation",
      category: "Leadership",
      duration: "3 Weeks",
      students: "110+ Enrolled",
      gradient: "from-orange-600/20 to-yellow-500/20",
    },
  ];

  return (
    <section id="academy" className="bg-transparent text-white py-24 px-6 md:px-12 lg:px-20 w-full overflow-hidden border-t border-zinc-800">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.25em] font-black text-[#0062ff] uppercase border border-zinc-850 rounded-md px-4 py-1.5 bg-zinc-950/50 block mb-6 w-fit">
              Learning & Growth
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
              4AT Academy
            </h2>
            <p className="mt-4 text-zinc-400 text-sm lg:text-base max-w-[90%] font-medium leading-relaxed">
              Empowering developers, leaders, and creators with cutting-edge artificial intelligence education and skills.
            </p>
          </div>

          <a
            href="#"
            className="group flex items-center border border-zinc-800 overflow-hidden hover:shadow-md transition-all rounded-sm bg-zinc-950"
          >
            <span className="bg-white text-black px-5 py-3.5 text-xs font-bold uppercase tracking-widest">
              Explore Courses
            </span>
            <span className="bg-black text-white border-l border-zinc-800 px-3 py-3.5 self-stretch flex items-center justify-center">
              <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-sm hover:shadow-md hover:border-zinc-700 transition-all duration-300 h-[380px] overflow-hidden"
            >
              {/* Background gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

              {/* Top Row: ID & Category */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="font-mono text-zinc-700 text-3xl font-black">{card.id}</span>
                <span className="text-[9px] uppercase tracking-wider font-bold bg-zinc-900 text-zinc-300 px-2.5 py-1 rounded border border-zinc-800 group-hover:bg-zinc-800 transition-colors">
                  {card.category}
                </span>
              </div>

              {/* Middle: Course placeholder / visual container */}
              <div className="relative z-10 my-4 flex-1 w-full rounded-xl bg-zinc-900/50 border border-dashed border-zinc-800 flex flex-col items-center justify-center group-hover:bg-black/40 group-hover:border-zinc-700/50 transition-all overflow-hidden">
                {/* Visual placeholder representation */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:scale-110 group-hover:bg-zinc-800 group-hover:text-white transition-all duration-300">
                  <BookOpen className="size-5" />
                </div>
                <span className="text-[10px] text-zinc-550 font-bold uppercase tracking-wider mt-3">
                  Image Placeholder
                </span>
              </div>

              {/* Bottom: Title & Details */}
              <div className="relative z-10 space-y-4">
                <h3 className="font-black uppercase text-base tracking-tight text-white leading-tight group-hover:text-white">
                  {card.title}
                </h3>
                
                {/* Meta details */}
                <div className="flex justify-between items-center text-[10px] text-zinc-400 font-bold uppercase tracking-wider pt-2 border-t border-zinc-800">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {card.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="size-3" />
                    {card.students}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
