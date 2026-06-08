import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import robotImg from "@/assets/woman_portrait.png";
import cardLeftImg from "@/assets/card_left.png";
import cardRightImg from "@/assets/card_right.png";
import cardFarLeftImg from "@/assets/card_far_left.jpg";
import cardFarRightImg from "@/assets/card_far_right.png";
import { GlowLine } from "./GlowLine";

gsap.registerPlugin(ScrollTrigger);

const SATELLITE_CARDS = [
  { id: "far-left", endX: -660, endRotate: -25, endY: -30, initRotate: 8, zIndex: 1, bg: "bg-zinc-900", hasImage: true, image: cardFarLeftImg, label: "Experience", headline: "7+ Years of AI consulting expertise" },
  { id: "left", endX: -330, endRotate: -12, endY: -20, initRotate: 5, zIndex: 2, bg: "bg-zinc-900", hasImage: true, image: cardLeftImg, label: "Automation", headline: "Intelligent process automation at scale" },
  { id: "right", endX: 330, endRotate: 12, endY: -20, initRotate: -5, zIndex: 2, bg: "bg-zinc-900", hasImage: true, image: cardRightImg, label: "Analytics", headline: "Data-driven predictive insights" },
  { id: "far-right", endX: 660, endRotate: 25, endY: -30, initRotate: -8, zIndex: 1, bg: "bg-zinc-900", hasImage: true, image: cardFarRightImg, label: "Satisfaction", headline: "95% Client satisfaction rate" },
];

export function OurVision() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: stickyRef.current,
          scrub: 1,
          start: "top top",
          end: "+=1400",
        },
      });

      tl.to(
        [leftRef.current, rightRef.current],
        { opacity: 0, y: -30, duration: 0.3, ease: "power2.in" },
        0,
      );

      SATELLITE_CARDS.forEach((card, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        tl.to(el, {
          x: card.endX,
          rotation: card.endRotate,
          y: card.endY,
          opacity: 1,
          transformOrigin: "50% 100%",
          ease: "power2.out",
          duration: 0.7,
        }, 0.3);
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id="our-vision" className="relative bg-black">
      <div ref={stickyRef} className="relative h-screen w-full overflow-hidden">
        <GlowLine className="absolute top-0 z-10" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="size-[600px] rounded-full bg-white/[0.03] blur-[140px]" />
        </div>

        {/* ── FULL-WIDTH THREE-COLUMN LAYOUT ── */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-10 md:px-16 grid grid-cols-[1fr_auto_1fr] gap-8 md:gap-14 items-center">

            {/* LEFT */}
            <div ref={leftRef}>
              {/* OUR VISION Chip */}
              <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 mb-6 bg-zinc-950/50">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">
                  OUR VISION
                </span>
              </div>
              <h2
                className="text-white uppercase font-black"
                style={{ fontSize: "clamp(28px, 4vw, 60px)", lineHeight: 1.0, letterSpacing: "-0.01em" }}
              >
                TRANSFORMING<br />IDEAS INTO<br />INTELLIGENT<br />OUTCOMES WITH<br />THE POWER OF AI
              </h2>
              <p className="mt-6 text-zinc-400 max-w-[300px]" style={{ fontSize: "clamp(12px, 1vw, 15px)", lineHeight: 1.7 }}>
                Whether it's predictive analytics, automation,<br />
                or intelligent process design, we focus on<br />
                building tools that empower your people and<br />
                elevate your results.
              </p>
            </div>

            {/* CENTER — satellite cards + portrait card + CTA */}
            <div className="relative flex flex-col items-center">
              {SATELLITE_CARDS.map((card, i) => (
                <div
                  key={card.id}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className={`absolute rounded-xl overflow-hidden ${card.bg}`}
                  style={{
                    width: "240px", height: "320px",
                    zIndex: card.zIndex,
                    rotate: `${card.initRotate}deg`,
                    opacity: 0, willChange: "transform", top: 0,
                    boxShadow: "0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.07)",
                  }}
                >
                  {card.hasImage && (
                    <>
                      <img src={card.image} alt="" className="absolute inset-0 w-full h-full object-cover object-top" draggable={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{card.label}</p>
                    <p className="text-sm font-bold text-white leading-snug">{card.headline}</p>
                  </div>
                </div>
              ))}

              {/* Portrait card */}
              <div
                className="relative z-10 rounded-xl overflow-hidden bg-zinc-950"
                style={{
                  width: "240px", height: "320px",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <img src={robotImg} alt="AI robot" className="absolute inset-0 w-full h-full object-cover object-top" draggable={false} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold" style={{ fontSize: "15px" }}>4AT Leadership</p>
                  <p className="text-zinc-400" style={{ fontSize: "12px" }}>Marketing Director</p>
                </div>
              </div>

              {/* CTA button — same width as card */}
              <a
                href="#contact"
                className="group z-10 inline-flex items-center border border-white/25 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 rounded-sm"
                style={{ width: "240px" }}
              >
                <span className="bg-white text-black px-5 py-3.5 text-sm font-bold flex-1 text-center">
                  Book a 30-Min Call
                </span>
                <span className="bg-black text-white border-l border-white/25 px-4 py-3.5 self-stretch flex items-center">
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </a>
            </div>

            {/* RIGHT */}
            <div ref={rightRef} className="flex flex-col">
              <p className="uppercase text-zinc-500 mb-6" style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: 600 }}>
                Key Advantages
              </p>
              <div className="divide-y divide-white/[0.07]">
                {[
                  "Smart process automation",
                  "Predictive data insights",
                  "Custom AI solutions",
                  "Seamless system integration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-4">
                    <span className="text-zinc-500 text-lg leading-none">›</span>
                    <span className="text-zinc-100" style={{ fontSize: "clamp(14px, 1.3vw, 18px)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
