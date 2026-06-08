import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export function Nav() {
  const [isDarkBg, setIsDarkBg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const headerPos = 60; // position of navbar on screen
      const sections = document.querySelectorAll("section, div[id]");
      let activeBgIsLight = false;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerPos && rect.bottom >= headerPos) {
          const id = sec.id;
          const isLightSec = id === "services" || id === "features-grid" || id === "client-voices";
          if (isLightSec) {
            activeBgIsLight = true;
          }
        }
      });
      setIsDarkBg(!activeBgIsLight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))]"
    >
      <div 
        className={`rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isDarkBg 
            ? "bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08]" 
            : "bg-black/[0.03] backdrop-blur-[20px] border border-black/[0.08]"
        }`}
      >
        <a 
          href="#" 
          className={`flex items-center gap-2.5 font-black tracking-tight uppercase text-base transition-colors duration-300 ${
            isDarkBg ? "text-white" : "text-black"
          }`}
        >
          <img src={logo} alt="4AT Logo" className="h-6 w-auto" />
          <span>4AT</span>
        </a>
        <nav 
          className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300 ${
            isDarkBg ? "text-zinc-400" : "text-zinc-650"
          }`}
        >
          <a href="#about" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>About</a>
          <a href="#services" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Services</a>
          <a href="#product" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Product</a>
          <a href="#academy" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Academy</a>
          <a href="#carrers" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Carrers</a>
          <a href="#contact" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Contact us</a>
        </nav>
        <a 
          href="#contact" 
          className={`text-sm rounded-full px-4 py-1.5 font-medium transition-all duration-300 ${
            isDarkBg 
              ? "bg-white text-black hover:shadow-[0_0_24px_rgba(255,255,255,0.4)]" 
              : "bg-black text-white hover:shadow-[0_0_24px_rgba(0,0,0,0.2)]"
          }`}
        >
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}
