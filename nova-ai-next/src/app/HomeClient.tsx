"use client";

import { useEffect, useState } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OurVision } from "@/components/OurVision";
import { Services } from "@/components/Services";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Results } from "@/components/Results";
import { Academy } from "@/components/Academy";
import { Consulting } from "@/components/Consulting";
import { Process } from "@/components/Process";
import { Clients } from "@/components/Clients";
import { ResultsTimeline } from "@/components/ResultsTimeline";
import { ClientVoices } from "@/components/ClientVoices";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomeClient() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerPos = window.innerHeight / 2; // Midpoint of viewport
      const sections = document.querySelectorAll("section, div[id]");
      let activeBgIsLight = false;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerPos && rect.bottom >= headerPos) {
          const id = sec.id;
          const isLightSec = id === "services" || id === "journey" || id === "work" || id === "features-grid" || id === "client-voices" || id === "blog";
          if (isLightSec) {
            activeBgIsLight = true;
          }
        }
      });
      setIsLight(activeBgIsLight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-1000 ease-in-out ${isLight ? "bg-[#f5f5f3] text-black" : "text-white"}`}
      style={!isLight ? { background: "linear-gradient(135deg, #0D1227 0%, #161D34 40%, #24304F 70%, #2F4F80 100%)" } : {}}
    >
      <SmoothScroll />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-30 z-0" />

      {/* Background Orb Globs */}
      {!isLight && (
        <div className="orbs">
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="orb orb3" />
        </div>
      )}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <OurVision />
        <Services />
        <Results />
        <ResultsTimeline />
        <Consulting />
        <Academy />
        <Process />
        <Clients />
        <ClientVoices />
        <FeaturesGrid />
        <BlogSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
