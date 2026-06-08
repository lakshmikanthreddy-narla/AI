import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OurVision } from "@/components/OurVision";
import { Showcase } from "@/components/Showcase";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-30 z-0" />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <OurVision />
        <Showcase />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
