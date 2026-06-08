"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import type { InputHTMLAttributes } from "react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            — Contact
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1]">
            Let&apos;s build the next <br />
            <span className="text-muted-foreground">intelligent thing.</span>
          </h2>
        </Reveal>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="glass rounded-3xl p-8 md:p-10 mt-16 text-left space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" placeholder="Ada Lovelace" />
            <Field label="Email" placeholder="ada@company.com" type="email" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="mt-2 w-full bg-transparent border-b border-border focus:border-white outline-none py-3 text-lg transition-colors placeholder:text-muted-foreground/40 resize-none focus:shadow-[0_1px_0_0_rgba(255,255,255,0.6)]"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center bg-white text-black rounded-md overflow-hidden hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all mt-4"
          >
            <span className="px-6 py-3.5 font-medium">Send message</span>
            <span className="bg-black text-white p-3.5 group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="size-4" />
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-white outline-none py-3 text-lg transition-colors placeholder:text-muted-foreground/40 focus:shadow-[0_1px_0_0_rgba(255,255,255,0.6)]"
      />
    </div>
  );
}
