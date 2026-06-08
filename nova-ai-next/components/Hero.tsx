"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import robotImg from "@/public/assets/robot.png";

// Video in public/ is served as a static URL — never import binary files in Next.js
const HERO_VIDEO = "/assets/hero-bg.mp4";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const robotY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </motion.div>

      {/* Robot */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: robotY, right: "-4%" }}
        className="pointer-events-none absolute -bottom-[10vh] md:-bottom-[14vh] z-30 h-[78vh] md:h-[95vh] w-auto select-none"
      >
        <Image
          src={robotImg}
          alt="AI humanoid robot"
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
          priority
        />
      </motion.div>

      {/* Floating blobs */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 size-[400px] rounded-full bg-white/5 blur-[120px] float" />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 size-[300px] rounded-full bg-white/10 blur-[100px] float"
        style={{ animationDelay: "2s" }}
      />

      {/* Headline */}
      <div className="relative z-10 pt-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-bold tracking-tighter leading-[0.9] text-[18vw] md:text-[14vw] bg-gradient-to-b from-white via-white/70 to-white/20 bg-clip-text text-transparent select-none"
        >
          UNLOCK AI
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-bold tracking-tighter leading-[0.9] text-[18vw] md:text-[14vw] mt-[-2vw] bg-gradient-to-b from-white/60 via-white/30 to-white/5 bg-clip-text text-transparent select-none text-right md:text-left md:pl-[15vw]"
        >
          POWER
        </motion.h1>
      </div>

      {/* Bottom-left content */}
      <div className="absolute bottom-16 left-6 md:left-10 max-w-md z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="size-8 rounded-full border-2 border-black bg-gradient-to-br from-zinc-600 to-zinc-800"
              />
            ))}
            <div className="size-8 rounded-full border-2 border-black bg-white text-black text-[10px] font-bold grid place-items-center">
              +51
            </div>
          </div>
          <div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs font-medium">Happy clients</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-lg md:text-xl leading-snug"
        >
          We help businesses use AI to{" "}
          <span className="text-white">simplify workflows and drive</span>{" "}
          <span className="text-muted-foreground">
            smarter, faster, more meaningful results.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center bg-white text-black rounded-md overflow-hidden hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
          >
            <span className="px-5 py-3 text-sm font-medium">Start Your AI Journey</span>
            <span className="bg-black text-white p-3 group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/50 backdrop-blur-sm bg-black/30">
        <div className="flex justify-between items-center px-6 py-3 text-[11px] tracking-widest text-muted-foreground uppercase">
          <span>LA, California</span>
          <Clock />
          <span>(21.0278° N, 105.8342° E)</span>
        </div>
      </div>
    </section>
  );
}

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time}</span>;
}
