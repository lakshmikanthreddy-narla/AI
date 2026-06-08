"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discover", d: "We audit your data, ops and goals to surface real AI leverage." },
  { n: "02", t: "Design", d: "We prototype models and workflows that map to revenue, not vanity." },
  { n: "03", t: "Build", d: "Production-grade engineering: scalable, observable, secure." },
  { n: "04", t: "Deploy", d: "Ship to your stack with zero downtime and full handover." },
  { n: "05", t: "Evolve", d: "Continuous tuning so your AI compounds over time." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            — Process
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
            A method that scales with you.
          </h2>
        </Reveal>

        <div className="relative pl-16 md:pl-24">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-5 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent origin-top"
          />
          <div className="space-y-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-16 md:-left-24 top-1 size-10 md:size-12 rounded-full glass grid place-items-center text-xs font-semibold bg-black">
                  {s.n}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-muted-foreground max-w-xl">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
