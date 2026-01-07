import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { MarketGap } from "@/components/MarketGap";
import { SectorHighlights } from "@/components/SectorHighlights";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { FloatingIcons } from "@/components/FloatingIcons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <SectorHighlights />
      <Features />
      <MarketGap />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <FloatingIcons />
    </div>
  );
};

export default Index;
