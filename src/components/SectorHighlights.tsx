"use client";

import {
  HardHat,
  Monitor,
  HeartPulse,
  GraduationCap,
  Sprout,
  Zap,
  Building2,
  Truck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Configuration for sectors with Themes & Patterns adapted from HeroCarousel
const sectors = [
  {
    icon: HardHat,
    title: "Construction & Infra",
    desc: "Roads, bridges, urban development & civil works.",
    count: "12k+ Tenders",
    theme: "from-blue-600/90 to-indigo-900/90",
    pattern:
      "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
  },
  {
    icon: Monitor,
    title: "IT & Software",
    desc: "Digital transformation, hardware, & SaaS procurement.",
    count: "8.5k+ Tenders",
    theme: "from-blue-600/90 to-indigo-900/90",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
  },
  {
    icon: Zap,
    title: "Energy & Power",
    desc: "Renewable energy, grid distribution & electrical.",
    count: "5k+ Tenders",
    theme: "from-blue-600/90 to-indigo-900/90",
    pattern:
      "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)",
  },
  {
    icon: Building2,
    title: "Railways & Transport",
    desc: "Track maintenance, signaling & station redevelopment.",
    count: "3.2k+ Tenders",
    theme: "from-blue-600/90 to-indigo-900/90",
    pattern:
      "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Pharma",
    desc: "Medical devices, hospital supplies & lab services.",
    count: "6k+ Tenders",
    theme: "from-blue-600/90 to-indigo-900/90",
    pattern:
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    desc: "Institutional supplies, e-learning & skill development.",
    count: "2.1k+ Tenders",
    theme: "from-blue-600/90 to-indigo-900/90",
    pattern:
      "repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    desc: "Irrigation systems, fertilizers & farming machinery.",
    count: "4k+ Tenders",
    theme: "from-blue-600/90 to-indigo-900/90",
    pattern:
      "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.15) 0%, transparent 40%)",
  },
  {
    icon: Truck,
    title: "Logistics & Supply",
    desc: "Warehousing, freight services & fleet management.",
    count: "9k+ Tenders",
    theme: "from-blue-600/90 to-indigo-900/90",
    pattern:
      "linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%) -50px 0, linear-gradient(225deg, rgba(255,255,255,0.1) 25%, transparent 25%) -50px 0",
  },
];

export const SectorHighlights = () => {
  return (
    <section className="py-24 bg-white relative border-b border-[#1F1E5E]/10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header - Kept Clean & Professional */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-[#1F1E5E] uppercase tracking-tighter">
            Explore Opportunities <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F1E5E] to-[#1A184D]/60">
              By Industry
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            We cover 40+ sectors. Select your industry to view live contracts.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[95%] mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pb-12">
              {sectors.map((sector, index) => (
                // Adjusted basis to fit 3 in a row on Large screens (basis-1/3)
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 h-[400px]"
                >
                  <div className="h-full relative rounded-2xl overflow-hidden shadow-xl group border border-white/10 transition-transform duration-500 hover:-translate-y-2">
                    {/* 1. Background Gradient & Pattern (From HeroCarousel design) */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${sector.theme} transition-transform duration-700 group-hover:scale-105`}
                    />

                    <div
                      className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-40"
                      style={{ backgroundImage: sector.pattern }}
                    />

                    {/* 2. Glass Overlay Effect */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                    {/* 3. Content - Centered & Animated */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                      {/* Top: Icon & Category */}
                      <div className="flex items-start justify-between">
                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 shadow-inner group-hover:bg-white/20 transition-all duration-300">
                          <sector.icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border border-white/10">
                          {sector.count}
                        </span>
                      </div>

                      {/* Middle: Text Info */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-heading font-bold leading-tight drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">
                          {sector.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed font-light opacity-90 group-hover:opacity-100 transition-opacity">
                          {sector.desc}
                        </p>
                      </div>

                      {/* Bottom: Action Button */}
                      <div className="pt-4">
                        <Link
                          href={`/sectors/${sector.title
                            .toLowerCase()
                            .replace(/ & /g, "-")}`}
                          className="group/btn relative inline-flex items-center gap-2 overflow-hidden px-6 py-3 rounded-full bg-white/10 hover:bg-white text-sm font-bold text-white hover:text-[#1F1E5E] transition-all duration-300 border border-white/20 hover:border-white w-fit"
                        >
                          View Tenders
                          <ArrowRight className="w-4 h-4 opacity-70 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Arrows (Styled like Glass Buttons) */}
            <CarouselPrevious className="hidden md:flex -left-12 h-14 w-14 rounded-full border-none bg-[#1F1E5E]/5 text-[#1F1E5E] hover:bg-[#1F1E5E] hover:text-white transition-all shadow-sm" />
            <CarouselNext className="hidden md:flex -right-12 h-14 w-14 rounded-full border-none bg-[#1F1E5E]/5 text-[#1F1E5E] hover:bg-[#1F1E5E] hover:text-white transition-all shadow-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
