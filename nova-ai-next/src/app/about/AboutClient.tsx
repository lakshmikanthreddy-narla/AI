"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import glitchPortrait from "@/assets/glitch_portrait.png";
import walkingTeam from "@/assets/walking_team.png";
import missionGlitch from "@/assets/mission_glitch.png";
import colBlurProfile from "@/assets/col_blur_profile.png";
import eyeProjection from "@/assets/eye_projection.png";
import interlockedLogo from "@/assets/interlocked_logo.png";
import blueprintMeeting from "@/assets/blueprint_meeting.png";
import sunglassesWoman from "@/assets/sunglasses_woman.png";
import manRobot from "@/assets/man_robot.jpg";
import arEarpieceWoman from "@/assets/ar_earpiece_woman.png";
import ethanPortrait from "@/assets/ethan_portrait.png";
import womanPortrait from "@/assets/woman_portrait.png";

export default function AboutClient() {
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <div className="min-h-screen bg-background text-[#1c1c1c] font-sans selection:bg-black selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Global Nav */}
      <Nav />

      {/* Background Orbs */}
      <div className="orbs">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>

      {/* ── MAIN CONTENT (3-COLUMN GRID) ── */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr_0.9fr] min-h-screen pt-20 lg:pt-0 border-b border-[#dbdbdb]">

        {/* LEFT COLUMN: WHO WE ARE with subtle rainbow light leak */}
        <div className="relative flex flex-col justify-center p-8 md:p-14 lg:p-20 bg-[#f4f4f4] lg:border-r border-[#dbdbdb] overflow-hidden min-h-[40vh] lg:min-h-0">
          {/* Subtle rainbow aurora gradient at bottom-left */}
          <div
            className="absolute bottom-0 left-0 w-[120%] h-[70%] pointer-events-none opacity-80 mix-blend-multiply"
            style={{
              background: "radial-gradient(circle at bottom left, rgba(253, 230, 138, 0.45) 0%, rgba(167, 243, 208, 0.35) 25%, rgba(191, 219, 254, 0.4) 50%, rgba(243, 207, 243, 0.35) 75%, transparent 100%)",
              filter: "blur(40px)"
            }}
          />

          <div className="relative z-10 my-auto">
            <h1
              className="font-black leading-[0.85] tracking-tighter text-[#2a2a2a] flex flex-col select-none"
              style={{ fontSize: "clamp(4.5rem, 9.5vw, 10.5rem)" }}
            >
              <span>WHO</span>
              <span className="pl-[28%] text-transparent bg-clip-text bg-gradient-to-r from-[#2a2a2a] via-[#5c5c5c] to-[#1c1c1c]">WE</span>
              <span>ARE</span>
            </h1>
          </div>
        </div>

        {/* CENTER COLUMN: Glitch Portrait Image */}
        <div className="relative border-t lg:border-t-0 border-b lg:border-b-0 lg:border-r border-[#dbdbdb] bg-[#e5e5e5] overflow-hidden min-h-[500px] lg:min-h-0 flex items-center justify-center">
          <img
            src={glitchPortrait.src}
            alt="AI Digital Glitch Portrait"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* RIGHT COLUMN: Info, Team Card & CTA Button */}
        <div className="flex flex-col justify-between p-8 md:p-14 bg-[#f4f4f4] min-h-[50vh] lg:min-h-0">

          {/* Walking Team Card */}
          <div className="border border-[#dbdbdb] rounded-none overflow-hidden bg-white p-3 shadow-sm max-w-sm mx-auto lg:mx-0 w-full">
            <div className="aspect-[4/3] rounded-none overflow-hidden bg-zinc-100 mb-3 border border-[#e5e5e5]">
              <img
                src={walkingTeam.src}
                alt="Walking Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#5c5c5c] px-1">
              <span>©Since 2019</span>
              <a href="#" className="underline hover:text-black transition-colors">
                View our team
              </a>
            </div>
          </div>

          {/* Description & CTA Button */}
          <div className="mt-12 lg:mt-auto max-w-sm mx-auto lg:mx-0 w-full flex flex-col gap-6">
            <p className="text-[#3a3a3a] text-sm md:text-[15px] font-medium leading-relaxed">
              We empower businesses to harness AI's true potential with strategic thinking, innovation, and measurable, data-driven impact.
            </p>

            {/* Get Started Now Button */}
            <div className="inline-flex items-stretch border border-black overflow-hidden font-sans select-none max-w-max">
              <a
                href="#contact"
                className="bg-black hover:bg-zinc-900 text-white text-xs font-bold px-6 py-4 transition-colors duration-200 flex items-center justify-center tracking-wider"
              >
                Get Started Now
              </a>
              <div className="bg-white text-black border-l border-black flex items-center justify-center px-4">
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ── SECOND SECTION: FULL-BLEED VIDEO ── */}
      <section className="relative w-full h-[50vh] md:h-[80vh] lg:h-screen bg-black overflow-hidden border-t border-[#dbdbdb]">
        <video
          src="/assets/1st video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </section>

      {/* ── THIRD SECTION: SCROLL-REVEAL STATEMENT ── */}
      <section className="bg-black text-white py-32 border-t border-[#222222]">
        <ScrollRevealStatement />
      </section>

      {/* ── FOURTH SECTION: GRID MISSION & VISION ── */}
      <section className="bg-black text-white border-t border-[#222222] overflow-hidden">
        <div className="w-full border-l border-r border-[#222222]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#222222] gap-px">
            {/* Row 1, Col 1: Our Mission */}
            <div className="bg-black p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="inline-block border border-white/20 px-3 py-1 mb-8">
                  <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    OUR MISSION
                  </span>
                </div>
                <p className="text-[#a1a1a1] text-xs md:text-sm leading-relaxed">
                  At 4AT, we help businesses harness the power of AI to work smarter, move faster, and innovate with confidence. Our solutions simplify operations, enhance decisions, and drive sustainable growth.
                </p>
              </div>
            </div>

            {/* Row 1, Col 2: Image 1 */}
            <div className="relative aspect-square md:aspect-auto h-full min-h-[320px] bg-zinc-950 overflow-hidden">
              <img src={missionGlitch.src} alt="Mission digital portrait" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Row 1, Col 3: Centered Logo */}
            <div className="bg-black p-12 flex items-center justify-center min-h-[320px]">
              <img src={interlockedLogo.src} alt="4AT Logo" className="h-16 w-auto object-contain brightness-95" />
            </div>

            {/* Row 1, Col 4: Our Vision */}
            <div className="bg-black p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="inline-block border border-white/20 px-3 py-1 mb-8">
                  <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    OUR VISION
                  </span>
                </div>
                <ul className="space-y-3.5 text-white text-xs md:text-sm font-semibold tracking-tight">
                  {[
                    "Empower growth with AI.",
                    "Inspire innovation daily.",
                    "Enhance human potential.",
                    "Drive data-led success.",
                    "Shape a smarter future."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-zinc-500 font-normal">➤</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 2, Col 1: Image 2 */}
            <div className="relative aspect-square md:aspect-auto h-full min-h-[320px] bg-zinc-950 overflow-hidden">
              <img src={colBlurProfile.src} alt="Blurred profile study" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Row 2, Col 2: Let's Work Together */}
            <div className="bg-black p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
              <h3 className="text-lg md:text-xl font-black tracking-tight leading-none uppercase text-white">
                LET'S WORK TOGETHER
              </h3>
              <div className="space-y-4 mt-8">
                <p className="text-[9px] font-bold text-zinc-500 tracking-wider">
                  BOOK A CALL AND SEE IF WE'RE A GOOD FIT.
                </p>
                <div className="inline-flex items-stretch border border-white overflow-hidden max-w-max">
                  <a
                    href="#contact"
                    className="bg-white text-black text-[10px] font-bold px-4 py-2.5 transition-colors duration-200 hover:bg-zinc-200 uppercase"
                  >
                    Book a call
                  </a>
                  <div className="bg-transparent text-white border-l border-white flex items-center justify-center px-3">
                    <ArrowUpRight className="size-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2, Col 3: Our Goal & Stats */}
            <div className="bg-black p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="inline-block border border-white/20 px-3 py-1 mb-8">
                  <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    OUR GOAL
                  </span>
                </div>
                <p className="text-[#a1a1a1] text-xs md:text-sm leading-relaxed">
                  At 4AT, our goal is to guide businesses toward intelligent growth with practical AI solutions that create lasting impact.
                </p>
              </div>
              <div className="mt-6">
                <div className="text-3xl md:text-4xl font-black text-white leading-none">50+</div>
                <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1.5 font-bold">Projects delivered</div>
              </div>
            </div>

            {/* Row 2, Col 4: Image 3 */}
            <div className="relative aspect-square md:aspect-auto h-full min-h-[320px] bg-zinc-950 overflow-hidden">
              <img src={eyeProjection.src} alt="Eye text projection study" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FIFTH SECTION: PARTNERS WHO BELIEVE IN AI ── */}
      <section className="bg-[#f3f3f3] text-black border-t border-[#222222]">
        <div className="relative w-full border-l border-r border-[#222222] bg-[#f3f3f3] py-20 px-6 md:px-12 flex flex-col items-center">

          {/* Overlapping Centered Tag */}
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 border border-[#222222] bg-white px-5 py-1.5 select-none shadow-sm">
            <span className="text-[9px] md:text-xs font-bold tracking-widest text-[#1c1c1c] uppercase">
              TRUSTED BY LEADING INNOVATORS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-[2.75rem] font-black text-center tracking-tighter mb-16 uppercase max-w-3xl leading-none text-[#1c1c1c]">
            PARTNERS WHO BELIEVE IN THE POWER OF AI
          </h2>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

            {/* Nexter */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2024</span>
              <div className="flex items-center gap-2 text-[#1c1c1c]">
                <svg className="size-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" />
                </svg>
                <span className="font-extrabold text-xl tracking-tight">Nexter</span>
              </div>
            </div>

            {/* Syd */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2024</span>
              <span className="font-black text-3xl tracking-tighter text-[#1c1c1c] flex items-center">
                Syd<span className="text-zinc-400 text-2xl font-bold ml-0.5">☺</span>
              </span>
            </div>

            {/* Oslo */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2023</span>
              <span className="font-black text-2xl tracking-tight text-[#1c1c1c] lowercase">oslo.</span>
            </div>

            {/* Nonme */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2023</span>
              <span className="font-light text-2xl tracking-[0.2em] text-[#1c1c1c] uppercase">NONME</span>
            </div>

            {/* Next */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2022</span>
              <span className="font-black text-2xl tracking-tighter text-[#1c1c1c] flex items-center lowercase gap-1">
                next<span className="text-zinc-400 font-normal">↗</span>
              </span>
            </div>

            {/* Theo */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2021</span>
              <span className="italic font-serif text-3xl tracking-tighter text-[#1c1c1c]">theo</span>
            </div>

            {/* London */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2020</span>
              <div className="flex items-center gap-2 text-[#1c1c1c]">
                <div className="size-4 bg-black rotate-45 flex-shrink-0" />
                <span className="font-extrabold text-xl tracking-tight">London</span>
              </div>
            </div>

            {/* Umbrella */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2020</span>
              <div className="flex items-center gap-1.5 text-[#1c1c1c]">
                <span className="text-xl">☂</span>
                <span className="font-extrabold text-lg tracking-tight">umbrella</span>
              </div>
            </div>

            {/* Rise */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2019</span>
              <span className="font-black text-2xl tracking-tighter text-[#1c1c1c] uppercase flex items-center">
                ✊ Rise<span className="text-[10px] text-zinc-400 align-super ml-0.5">™</span>
              </span>
            </div>

            {/* Hudson */}
            <div className="bg-[#fcfcfc] p-8 flex flex-col items-center justify-center relative min-h-[160px] rounded-none border border-[#e5e5e5]">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-400">2018</span>
              <div className="flex items-center gap-2 text-[#1c1c1c]">
                <div className="size-4 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="size-1.5 bg-black rounded-full" />
                </div>
                <span className="font-extrabold text-lg tracking-tight">Hudson</span>
              </div>
            </div>

            {/* Black CTA Card */}
            <div className="bg-[#0a0a0a] text-white p-6 md:p-8 flex flex-col justify-between relative min-h-[160px] rounded-none border border-[#222222] sm:col-span-2 lg:col-span-2">
              <div>
                <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">
                  4AT®
                </span>
                <h3 className="text-lg md:text-xl font-bold tracking-tight mt-2 uppercase text-white leading-tight">
                  JOIN THE FUTURE OF AI INNOVATION
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-8">
                {/* Join Us Button */}
                <div className="inline-flex items-stretch border border-white overflow-hidden max-w-max self-start">
                  <a
                    href="#contact"
                    className="bg-white text-black text-[10px] font-bold px-4 py-2.5 transition-colors duration-200 hover:bg-zinc-200 uppercase"
                  >
                    Join us
                  </a>
                  <div className="bg-transparent text-white border-l border-white flex items-center justify-center px-3">
                    <ArrowUpRight className="size-3.5" />
                  </div>
                </div>

                {/* Rating Info */}
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-black text-white leading-none">4.9</div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <div className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">100+ Happy clients</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SIXTH SECTION: OUR GROWTH OVER THE YEARS ── */}
      <section className="bg-white text-[#1c1c1c] border-t border-[#e5e5e5] overflow-hidden py-24 relative">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 40s linear infinite;
          }
          .marquee-container:hover .marquee-track {
            animation-play-state: paused;
          }
        `}} />

        <div className="w-full px-6 md:px-12 lg:px-24 mb-16">
          <h2 className="text-3xl md:text-[2.75rem] font-black tracking-tight uppercase leading-none text-[#1c1c1c]">
            OUR GROWTH<br />OVER THE YEARS
          </h2>
        </div>

        {/* Marquee Track Wrapper */}
        <div className="w-full border-t border-b border-[#e5e5e5] bg-[#fdfdfd] overflow-hidden marquee-container relative py-0">
          <div className="marquee-track flex">
            {/* Render 2 sets of cards to create a seamless infinite loop */}
            {[...GROWTH_CARDS, ...GROWTH_CARDS].map((card, i) => (
              <div
                key={i}
                className="w-[300px] md:w-[540px] h-[200px] md:h-[320px] flex-shrink-0 border-r border-[#e5e5e5] bg-[#fcfcfc] overflow-hidden flex flex-col justify-between"
              >
                {card.type === "text" ? (
                  <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-extrabold text-sm md:text-base tracking-tight uppercase text-[#1c1c1c]">
                        {card.title}
                      </h4>
                      <span className="text-[10px] md:text-xs font-bold text-zinc-400">
                        {card.year}
                      </span>
                    </div>
                    <p className="text-[#5c5c5c] text-[11px] md:text-xs leading-relaxed max-w-[200px] md:max-w-xs">
                      {card.description}
                    </p>
                  </div>
                ) : (
                  <img
                    src={card.image?.src}
                    alt={card.alt}
                    className={`w-full h-full object-contain bg-[#fcfcfc] ${card.position || "object-center"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EIGHTH SECTION: MEET THE EXPERTS (AI INNOVATION TEAM) ── */}
      <section className="bg-[#050505] text-white border-t border-zinc-900 py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block border border-white/20 px-3 py-1 mb-4">
            <span className="text-[9px] md:text-xs font-bold tracking-widest text-zinc-400 uppercase">
              MEET THE EXPERTS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            AI INNOVATION TEAM
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-zinc-900 gap-px border border-zinc-900 max-w-7xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="bg-black p-8 flex flex-col justify-between group min-h-[290px] h-[300px]">
              <div className="flex gap-5 items-start mb-6">
                {/* Grayscale on default, color on hover */}
                <div className="w-28 h-28 flex-shrink-0 bg-zinc-950 overflow-hidden border border-zinc-800">
                  <img 
                    src={member.image?.src} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight text-white">{member.name}</h3>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{member.title}</span>
                </div>
              </div>

              {/* Skills Dotted List */}
              <div className="space-y-3">
                {member.skills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-end gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    <span className="bg-black pr-2 z-10 group-hover:text-white transition-colors duration-300">{skill}</span>
                    <div className="flex-1 border-b border-dashed border-zinc-800 group-hover:border-white transition-colors duration-300 -translate-y-1" />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Join Us Card */}
          <div className="bg-[#e5e5e5] text-black p-8 flex flex-col justify-between min-h-[290px] h-[300px]">
            <div>
              <div className="flex items-center gap-1.5 mb-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                4AT®
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 leading-none">
                JOIN OUR GROWING TEAM OF INNOVATORS
              </h3>
            </div>
            <div>
              <a 
                href="#contact" 
                className="group inline-flex items-center bg-black hover:bg-zinc-800 text-white transition-all duration-300 pl-6 pr-1.5 py-1.5 text-xs font-bold tracking-widest uppercase gap-4"
              >
                Apply Now
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center transition-colors group-hover:bg-zinc-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── NINTH SECTION: AWARDS & RECOGNITION ── */}
      <section className="bg-black text-white border-t border-zinc-900 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h2 className="text-4xl md:text-[3.25rem] font-black uppercase tracking-tight text-white leading-none mb-8">
              AWARDS &<br />RECOGNITION
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                <span className="text-zinc-600 text-base font-black">&gt;</span> Recognized AI innovator
              </li>
              <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                <span className="text-zinc-600 text-base font-black">&gt;</span> Top Automation Solution 2024
              </li>
              <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                <span className="text-zinc-600 text-base font-black">&gt;</span> Best AI integration partner
              </li>
            </ul>
          </div>

          {/* Right Column (Awards Table) */}
          <div className="lg:col-span-8">
            <div className="w-full">
              {/* Headers */}
              <div className="grid grid-cols-3 border-b border-zinc-900 pb-3 mb-6 text-[10px] font-black tracking-widest text-zinc-500 uppercase">
                <span>AWARDS</span>
                <span>NOMINATION</span>
                <span className="text-right">YEAR</span>
              </div>
              {/* Rows */}
              <div className="divide-y divide-zinc-900">
                {AWARDS.map((award, index) => (
                  <div key={index} className="grid grid-cols-3 py-6 items-center text-sm font-extrabold text-white">
                    <span className="uppercase tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 bg-white/20 rounded-sm inline-block" />
                      {award.name}
                    </span>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">{award.nomination}</span>
                    <span className="text-right text-xs text-zinc-500">{award.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TENTH SECTION: FAQ (ANSWERS TO COMMON AI QUERIES) ── */}
      <section className="bg-white text-black border-t border-zinc-200 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-[3.25rem] font-black uppercase tracking-tight text-black leading-[0.95]">
            ANSWERS TO<br />COMMON AI QUERIES
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-zinc-200 pb-3 mb-0 text-[10px] font-black tracking-widest text-zinc-400 uppercase">
          <span className="lg:col-span-7">QUESTIONS</span>
          <span className="lg:col-span-5 hidden lg:inline">ANSWERS</span>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border-l border-r border-b border-zinc-200">
          {/* Left Column: Questions List */}
          <div className="lg:col-span-7 divide-y divide-zinc-200 lg:border-r border-zinc-200 flex flex-col justify-between">
            {FAQ_ITEMS.map((item, idx) => {
              const isActive = activeFaq === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFaq(idx)}
                  className={`w-full text-left px-6 py-7 md:px-8 md:py-8 flex justify-between items-center transition-all duration-300 flex-1 ${
                    isActive 
                      ? "bg-[#0a0a0a] text-white" 
                      : "bg-white text-black hover:bg-zinc-50"
                  }`}
                >
                  <span className="text-xs md:text-sm lg:text-[15px] font-black uppercase tracking-tight max-w-[85%] leading-snug">
                    {item.question}
                  </span>
                  <span className="text-base md:text-lg font-bold font-mono">
                    {isActive ? "—" : "+"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Answer Box */}
          <div className="lg:col-span-5 bg-[#f4f4f4] p-8 md:p-12 lg:p-16 flex items-center justify-center min-h-[280px] lg:min-h-0 border-t border-zinc-200 lg:border-t-0">
            <p className="text-[#1c1c1c] text-sm md:text-[15px] lg:text-base font-medium leading-relaxed text-center max-w-sm">
              {FAQ_ITEMS[activeFaq]?.answer}
            </p>
          </div>
        </div>
      </section>

      {/* ── ELEVENTH SECTION: CONTACT FORM ── */}
      <Contact />

      {/* Footer */}
      <div className="bg-black border-t border-[#222222]">
        <Footer />
      </div>
    </div>
  );
}

function ScrollRevealStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const text = "AT 4AT®, WE HELP BUSINESSES INTEGRATE ARTIFICIAL INTELLIGENCE INTO THEIR CORE STRATEGIES, ENABLING SMARTER DECISIONS, FASTER WORKFLOWS, AND MEANINGFUL INNOVATION ACROSS EVERY LEVEL.";
  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className="relative w-full border-l border-r border-[#222222] pl-8 md:pl-16 pr-8 md:pr-16 pt-16 flex flex-col items-start min-h-[50vh] justify-center"
    >
      {/* WHO WE ARE Label Box sitting exactly on the grid lines */}
      <div className="absolute top-0 -translate-y-1/2 left-0 -translate-x-px border border-[#222222] bg-black px-4 py-1.5 select-none">
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-white uppercase">
          WHO WE ARE
        </span>
      </div>

      {/* Paragraph with Scroll-Triggered Highlighting */}
      <p className="text-xl md:text-[2.1rem] lg:text-[2.6rem] font-bold tracking-tight leading-[1.25] text-left flex flex-wrap gap-x-3 gap-y-1.5 select-none uppercase w-full">
        {words.map((word, i) => {
          // Sequential trigger window based on word index
          const start = 0.25 + (i / words.length) * 0.5;
          const end = start + 0.08;

          // Transform colors dynamically: Starts gray, lights up white, fades back to gray
          const color = useTransform(
            scrollYProgress,
            [0, start - 0.04, start, end, end + 0.04, 1],
            [
              "rgba(255, 255, 255, 0.15)",
              "rgba(255, 255, 255, 0.15)",
              "rgba(255, 255, 255, 1)",
              "rgba(255, 255, 255, 1)",
              "rgba(255, 255, 255, 0.15)",
              "rgba(255, 255, 255, 0.15)"
            ]
          );

          return (
            <motion.span key={i} style={{ color }} className="transition-colors duration-75">
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}

const GROWTH_CARDS = [
  {
    type: "text",
    title: "FOUNDATION",
    year: "2018",
    description: "Started delivering data-driven strategies and consulting for early-stage clients."
  },
  {
    type: "image",
    image: sunglassesWoman,
    alt: "Sunglasses projection overlay",
    position: "object-top"
  },
  {
    type: "text",
    title: "BUILDING EXPERTISE",
    year: "2020",
    description: "Launched enterprise projects to streamline operations with automation and AI."
  },
  {
    type: "image",
    image: manRobot,
    alt: "Man next to robot",
    position: "object-top"
  },
  {
    type: "text",
    title: "EXPANSION",
    year: "2022",
    description: "Expanded into new industries, including healthcare and finance, shipping robust custom ML modules."
  },
  {
    type: "image",
    image: arEarpieceWoman,
    alt: "Woman with AR earpiece",
    position: "object-top"
  },
  {
    type: "text",
    title: "LEADERSHIP",
    year: "2024",
    description: "Established ourselves as a leader in AI transformation, shipping intelligence globally."
  },
  {
    type: "image",
    image: blueprintMeeting,
    alt: "Team looking at blueprint",
    position: "object-top"
  }
];

const TEAM_MEMBERS = [
  {
    name: "ETHAN PARKER",
    title: "Founder & CEO",
    image: ethanPortrait,
    skills: ["PROCESS AUTOMATION", "INTELLIGENT WORKFLOWS", "RPA INTEGRATIONS"]
  },
  {
    name: "AVA REYNOLDS",
    title: "AI Systems Engineer",
    image: womanPortrait,
    skills: ["PREDICTIVE ALGORITHMS", "MACHINE LEARNING MODELS", "MODEL OPTIMIZATION"]
  },
  {
    name: "NOAH CARTER",
    title: "AI Strategy Consultant",
    image: glitchPortrait,
    skills: ["SCALABLE DEPLOYMENT MODELS", "ENTERPRISE AI ADOPTION", "BUSINESS PROCESS MAPPING"]
  },
  {
    name: "SARAH BROWN",
    title: "Data Science Lead",
    image: colBlurProfile,
    skills: ["DATA ARCHITECTURE DESIGN", "DEEP LEARNING PIPELINES", "MODEL EVALUATION & TUNING"]
  },
  {
    name: "LIAM TURNER",
    title: "Automation Architect",
    image: ethanPortrait,
    skills: ["PROCESS AUTOMATION", "INTELLIGENT WORKFLOWS", "RPA INTEGRATIONS"]
  }
];

const AWARDS = [
  { name: "Awwwards", nomination: "UI design – winner", year: "2025" },
  { name: "Behance", nomination: "Honorable mention", year: "2022" },
  { name: "DesignRush", nomination: "Website of the year – nominee", year: "2021" },
  { name: "CSS Design Awards", nomination: "Best visual design – function", year: "2019" },
  { name: "Dribbble", nomination: "Web excellence awards", year: "2018" }
];

const FAQ_ITEMS = [
  {
    question: "WHAT INDUSTRIES DOES 4AT WORK WITH?",
    answer: "We partner with businesses in healthcare, finance, e-commerce, real estate, and technology—delivering AI solutions tailored to their goals."
  },
  {
    question: "HOW LONG DOES IT TAKE TO IMPLEMENT AN AI SOLUTION?",
    answer: "Most initial implementations take 4 to 8 weeks, depending on the complexity of the models and integration depth."
  },
  {
    question: "DO YOU OFFER END-TO-END AI CONSULTING?",
    answer: "Yes, we cover everything from discovery, architecture design, custom model development, integration, and ongoing support."
  },
  {
    question: "CAN SMALL BUSINESSES BENEFIT FROM AI CONSULTING?",
    answer: "Absolutely. We design scalable solutions that allow smaller teams to automate workflows and scale operations efficiently."
  },
  {
    question: "WHAT MAKES 4AT DIFFERENT FROM OTHER AGENCIES?",
    answer: "We focus strictly on practical, measurable AI implementations rather than theoretical consulting—shipping actual, working systems."
  }
];
