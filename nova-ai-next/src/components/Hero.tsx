import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import robotImg from "@/assets/robot.png";

import client1 from "@/assets/client1.png";
import client2 from "@/assets/client2.png";
import client3 from "@/assets/client3.png";
import client4 from "@/assets/client4.png";
import client5 from "@/assets/client5.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
          src="/assets/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </motion.div>

      {/* Robot — anchored bottom-right, hero centerpiece */}
      <motion.img
        src={robotImg.src}
        alt="AI humanoid robot"
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]), right: "-4%" }}
        className="pointer-events-none absolute -bottom-[10vh] md:-bottom-[14vh] z-30 h-[78vh] md:h-[95vh] w-auto object-contain object-bottom object-right drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)] select-none"
      />

      {/* Floating blob */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 size-[400px] rounded-full bg-white/5 blur-[120px] float" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 size-[300px] rounded-full bg-white/10 blur-[100px] float" style={{ animationDelay: "2s" }} />

      {/* Headline — huge top text like reference */}
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
          className="flex items-center gap-4"
        >
          <div className="flex -space-x-3 items-center">
            {[client1, client2, client3, client4, client5].map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt=""
                className="size-9 rounded-full border-2 border-black object-cover relative"
                style={{ zIndex: 5 - i }}
              />
            ))}
            <div className="size-9 rounded-full border-2 border-black bg-zinc-900 text-white text-[11px] font-bold grid place-items-center z-0">+51</div>
          </div>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-amber-500 text-amber-500" />)}
            </div>
            <p className="text-sm font-black text-white leading-tight">Happy clients</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-lg md:text-xl leading-snug"
        >
          We help businesses use AI to <span className="text-white">simplify workflows and drive</span>{" "}
          <span className="text-muted-foreground">smarter, faster, more meaningful results.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center border border-white/25 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all rounded-sm"
          >
            <span className="bg-white text-black px-6 py-3.5 text-sm font-bold">Start Your AI Journey</span>
            <span className="bg-black text-white border-l border-white/25 px-4 py-3.5 self-stretch flex items-center">
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time}</span>;
}
