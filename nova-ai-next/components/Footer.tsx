import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { GlowLine } from "./GlowLine";

export function Footer() {
  return (
    <footer className="relative px-6 pt-16 pb-8">
      <GlowLine className="absolute top-0" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold">
              <span className="inline-block size-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              NEXARA<span className="text-muted-foreground">.ai</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm">
              AI engineering studio building intelligence for ambitious teams.
            </p>
          </div>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 rounded-full glass grid place-items-center hover:bg-white hover:text-black transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
          <span>© 2026 Nexara AI Studio</span>
          <span>Crafted in LA · Shipped worldwide</span>
        </div>
      </div>
    </footer>
  );
}
