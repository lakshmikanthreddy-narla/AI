"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import robotImg from "@/public/assets/robot.png";
import { GlowLine } from "./GlowLine";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    id: "far-left",
    endX: -660,
    endRotate: -25,
    endY: -30,
    initRotate: 8,
    zIndex: 1,
    label: "Experience",
    headline: "7+ Years of AI consulting expertise",
    hasImage: false,
    bg: "bg-gradient-to-b from-zinc-800 to-zinc-950",
  },
  {
    id: "left",
    endX: -330,
    endRotate: -12,
    endY: -20,
    initRotate: 5,
    zIndex: 2,
    label: "Automation",
    headline: "Intelligent process automation at scale",
    hasImage: true,
    bg: "bg-zinc-900",
  },
  {
    id: "right",
    endX: 330,
    endRotate: 12,
    endY: -20,
    initRotate: -5,
    zIndex: 2,
    label: "Analytics",
    headline: "Data-driven predictive insights",
    hasImage: true,
    bg: "bg-zinc-900",
  },
  {
    id: "far-right",
    endX: 660,
    endRotate: 25,
    endY: -30,
    initRotate: -8,
    zIndex: 1,
    label: "Satisfaction",
    headline: "95% Client satisfaction rate",
    hasImage: false,
    bg: "bg-gradient-to-b from-zinc-800 to-zinc-950",
  },
];

export function OurVision() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

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

      CARDS.forEach((card, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        tl.to(
          el,
          {
            x: card.endX,
            rotation: card.endRotate,
            y: card.endY,
            opacity: 1,
            transformOrigin: "50% 100%",
            ease: "power2.out",
            duration: 0.7,
          },
          0.3,
        );
      });

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll(".reveal-item"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative bg-black">
      {/* ── PINNED SCREEN ──────────────────────────────────────────────── */}
      <div ref={stickyRef} className="relative h-screen w-full overflow-hidden">
        <GlowLine className="absolute top-0 z-10" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="size-[600px] rounded-full bg-white/[0.03] blur-[140px]" />
        </div>

        <p className="absolute top-10 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-zinc-500 select-none whitespace-nowrap z-50">
          — Our Vision
        </p>

        {/* LEFT TEXT */}
        <div
          ref={leftRef}
          className="absolute left-6 md:left-12 top-1/2 z-20 flex flex-col justify-between"
          style={{ width: "clamp(220px, 24vw, 340px)", transform: "translateY(-180px)", height: "360px" }}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Our Vision</p>
            <h2
              style={{ fontSize: "clamp(42px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.1 }}
              className="tracking-tighter text-white"
            >
              Trans&shy;forming<br />Intelligence<br />into Impact
            </h2>
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.6 }} className="text-zinc-400">
            At 4AT, we harness AI to convert ideas into measurable business outcomes — from
            advanced analytics to intelligent automation.
          </p>
        </div>

        {/* RIGHT TEXT */}
        <div
          ref={rightRef}
          className="absolute right-6 md:right-12 top-1/2 z-20 flex flex-col justify-start"
          style={{ width: "clamp(220px, 24vw, 340px)", transform: "translateY(-180px)", height: "360px" }}
        >
          <p
            style={{ fontSize: "13px", letterSpacing: "1.5px", fontWeight: 500 }}
            className="uppercase text-zinc-500 mb-5"
          >
            Key Advantages
          </p>
          <ul className="space-y-4">
            {[
              "Intelligent process automation",
              "Data-driven predictive insights",
              "Tailored AI-powered solutions",
              "Seamless enterprise integration",
            ].map((item) => (
              <li
                key={item}
                style={{ fontSize: "18px", fontWeight: 450, lineHeight: 1.5 }}
                className="flex items-start gap-3 text-zinc-300"
              >
                <span className="mt-[9px] size-2 rounded-full bg-white shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CENTER IMAGE + CARDS */}
        <div className="absolute inset-0 flex items-center justify-center">
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`absolute w-[260px] h-[450px] rounded-2xl overflow-hidden ${card.bg}`}
              style={{
                zIndex: card.zIndex,
                rotate: `${card.initRotate}deg`,
                opacity: 0,
                willChange: "transform",
                boxShadow: "0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.07)",
              }}
            >
              {card.hasImage && (
                <>
                  <Image
                    src={robotImg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    draggable={false}
                    fill
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">{card.label}</p>
                <p className="text-xl font-bold text-white leading-snug">{card.headline}</p>
              </div>
            </div>
          ))}

          {/* Center card */}
          <div
            className="relative z-30 w-[300px] h-[520px] rounded-2xl overflow-hidden bg-zinc-950"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.08)" }}
          >
            <Image
              src={robotImg}
              alt="AI robot"
              className="object-cover object-top"
              fill
              sizes="300px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-3 px-4">
              <div className="text-center">
                <p style={{ fontSize: "18px", fontWeight: 700 }} className="text-white">
                  4AT Leadership
                </p>
                <p style={{ fontSize: "14px", fontWeight: 400 }} className="text-zinc-400">
                  Transforming Intelligence into Impact
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center bg-white text-black rounded-md overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
              >
                <span style={{ fontSize: "16px", fontWeight: 550 }} className="px-4 py-2">
                  Book a 30-Min Call
                </span>
                <span className="bg-black text-white p-2 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center max-w-md px-6 z-50 pointer-events-none">
          <p className="text-[12px] leading-relaxed text-zinc-600 italic">
            &ldquo;AI at 4AT is not just about technology — it&apos;s about enabling people to think
            bigger, act faster, and deliver exceptional results.&rdquo;
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-widest text-zinc-700">
            Founder &amp; Leadership Team, 4AT
          </p>
        </div>
      </div>

      {/* ── CONTENT BELOW PIN ──────────────────────────────────────────── */}
      <div ref={contentRef} className="relative bg-black px-6 pt-24 pb-32">
        <div className="max-w-5xl mx-auto border-t border-white/[0.06] mb-20" />
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal-item text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-white mb-14">
            Transforming Intelligence<br className="hidden md:block" /> into Impact with AI
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6">
              <p className="reveal-item text-base leading-relaxed text-zinc-400">
                At 4AT, we harness the power of artificial intelligence to convert ideas into
                measurable business outcomes. From advanced analytics to intelligent automation
                and scalable solution design, we build systems that enhance human potential and
                drive operational excellence.
              </p>
              <a
                href="#contact"
                className="reveal-item group inline-flex items-center bg-white text-black rounded-md overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                <span className="px-5 py-3 text-sm font-medium">Explore our vision</span>
                <span className="bg-black text-white p-3 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </div>

            <div>
              <p className="reveal-item text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
                Key Advantages
              </p>
              <ul className="space-y-4">
                {[
                  "Intelligent process automation",
                  "Data-driven predictive insights",
                  "Tailored AI-powered solutions",
                  "Seamless enterprise integration",
                ].map((item) => (
                  <li key={item} className="reveal-item flex items-start gap-3 text-base text-zinc-300">
                    <span className="mt-[8px] size-1.5 rounded-full bg-white/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal-item mt-20 border-l-2 border-white/10 pl-6 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300 italic">
              &ldquo;AI at 4AT is not just about technology — it&apos;s about enabling people to
              think bigger, act faster, and deliver exceptional results.&rdquo;
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-zinc-600">
              Founder &amp; Leadership Team, 4AT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
