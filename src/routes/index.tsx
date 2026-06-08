import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OurVision } from "@/components/OurVision";
import { Services } from "@/components/Services";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Results } from "@/components/Results";
import { Process } from "@/components/Process";
import { Clients } from "@/components/Clients";
import { ResultsTimeline } from "@/components/ResultsTimeline";
import { ClientVoices } from "@/components/ClientVoices";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4AT — AI-Driven Digital Experiences" },
      { name: "description", content: "Premium AI consulting studio helping ambitious teams simplify workflows and ship intelligent products." },
      { property: "og:title", content: "4AT — AI-Driven Digital Experiences" },
      { property: "og:description", content: "Premium AI consulting studio helping ambitious teams simplify workflows and ship intelligent products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-30 z-0" />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <OurVision />
        <Services />
        <Results />
        <Process />
        <Clients />
        <FeaturesGrid />
        <ResultsTimeline />
        <ClientVoices />
        <BlogSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
