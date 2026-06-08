"use client";

import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))]"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block size-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          NEXARA<span className="text-muted-foreground">.ai</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#product" className="hover:text-foreground transition-colors">Product</a>
          <a href="#academy" className="hover:text-foreground transition-colors">Academy</a>
          <a href="#carrers" className="hover:text-foreground transition-colors">Carrers</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact us</a>
        </nav>
        <a
          href="#contact"
          className="text-sm rounded-full bg-white text-black px-4 py-1.5 font-medium hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] transition-shadow"
        >
          Let&apos;s talk
        </a>
      </div>
    </motion.header>
  );
}
