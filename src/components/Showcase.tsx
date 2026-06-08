import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import robotImg from "@/assets/robot.png";
import { GlowLine } from "./GlowLine";

function SideCard({
  progress,
  side,
  order,
  src,
}: {
  progress: MotionValue<number>;
  side: "left" | "right";
  order: 1 | 2;
  src: string;
}) {
  const sign = side === "left" ? -1 : 1;
  // Inner pair peeks out slightly, outer pair fans further and tilts more —
  // creates the crossed/fanned look from the reference recording.
  const innerEndX = sign * 95;
  const outerEndX = sign * 200;
  const xEnd = order === 1 ? innerEndX : outerEndX;
  const rotEnd = order === 1 ? sign * -6 : sign * -12;
  const yEnd = order === 1 ? 4 : -6;
  const startProgress = order === 1 ? 0.18 : 0.35;
  const endProgress = order === 1 ? 0.62 : 0.9;

  const x = useTransform(progress, [startProgress, endProgress], ["0%", `${xEnd}%`]);
  const rotate = useTransform(progress, [startProgress, endProgress], [0, rotEnd]);
  const y = useTransform(progress, [startProgress, endProgress], ["0%", `${yEnd}%`]);
  const scale = useTransform(progress, [startProgress, endProgress], [0.85, 1]);
  const opacity = useTransform(
    progress,
    [startProgress, startProgress + 0.04, endProgress],
    [0, 1, 1]
  );
  const zIndex = order === 1 ? 15 : 12;
  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity, zIndex }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26%] aspect-square rounded-2xl overflow-hidden border border-border bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
}

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const centerScale = useTransform(scrollYProgress, [0, 0.2, 0.7], [1, 1, 0.85]);

  return (
    <section ref={ref} className="relative h-[280vh]">
      <GlowLine className="absolute top-0" />
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-6">
        <div className="text-center absolute top-16 left-0 right-0 z-30">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">— Showcase</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">See it in motion.</h2>
        </div>

        <div className="relative w-full max-w-7xl h-[78vh] flex items-center justify-center">
          {/* Side cards — emerge from behind center, slide horizontally outward */}
          <SideCard progress={scrollYProgress} side="left" order={2} src={robotImg} />
          <SideCard progress={scrollYProgress} side="right" order={2} src={robotImg} />
          <SideCard progress={scrollYProgress} side="left" order={1} src={robotImg} />
          <SideCard progress={scrollYProgress} side="right" order={1} src={robotImg} />

          {/* Center hero image — square format */}
          <motion.div
            style={{ scale: centerScale }}
            className="relative z-20 w-[60vh] max-w-[88%] aspect-square rounded-3xl overflow-hidden border border-border shadow-[0_30px_120px_-20px_rgba(255,255,255,0.18)] bg-zinc-900"
          >
            <img src={robotImg} alt="AI robot showcase" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
