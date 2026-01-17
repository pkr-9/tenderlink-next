"use client";

import React from "react";
import {
  HardHat,
  Monitor,
  HeartPulse,
  Zap,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Landmark,
  Sprout,
  Factory,
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

const sectors = [
  {
    id: "it",
    icon: Monitor,
    title: "IT & Software",
    count: "8.5k+ Tenders",
    tag: "Trending",
    gradient: "linear-gradient(135deg,#4F46E5 0%,#2563EB 100%)",
    pattern:
      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
    categories: [
      "Web Development",
      "Mobile Apps",
      "SEO Services",
      "Data Entry",
      "Computer AMC",
      "IT Support",
      "Website Redesign",
      "Digital Marketing",
      "Network Installation",
      "CCTV Surveillance",
      "Software Licensing",
      "Biometric Systems",
      "Hardware Supply",
      "Server Mgmt",
      "ERP Implementation",
      "Custom Software",
      "Cloud Migration",
      "Cybersecurity",
      "Blockchain",
      "Data Centers",
    ],
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction",
    count: "12k+ Tenders",
    tag: "High Volume",
    gradient: "linear-gradient(135deg,#1F1E5E 0%,#2F2FA2 100%)",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 12px)",
    categories: [
      "Painting Works",
      "Road Repair",
      "Plumbing",
      "Electrical Repairs",
      "Fencing",
      "Landscaping",
      "Waterproofing",
      "School Renovation",
      "Boundary Walls",
      "Interior Design",
      "Canal Lining",
      "Rural Roads",
      "Drainage Systems",
      "Water Tanks",
      "Public Buildings",
      "Bridges",
      "Highways",
      "Metro Rail",
      "Tunnels",
    ],
  },
  {
    id: "finance",
    icon: Landmark,
    title: "Banking & Finance",
    count: "4k+ Tenders",
    tag: "High Value",
    gradient: "linear-gradient(135deg,#0F766E 0%,#14B8A6 100%)",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 12px)",
    categories: [
      "Auditing Services",
      "Tax Consultancy",
      "Insurance Services",
      "Accounting",
      "Payroll Mgmt",
      "Background Checks",
      "Debt Recovery",
      "Cash Van Services",
      "ATM Maintenance",
      "Banking Software",
      "Forensic Audit",
      "Actuarial Services",
      "Investment Advisory",
      "Core Banking Solutions",
      "Fintech Integration",
    ],
  },
  {
    id: "agriculture",
    icon: Sprout,
    title: "Agriculture",
    count: "3.2k+ Tenders",
    tag: "Essential",
    gradient: "linear-gradient(135deg,#166534 0%,#22C55E 100%)",
    pattern: "radial-gradient(rgba(255,255,255,0.1) 8%, transparent 8%)",
    categories: [
      "Seeds Supply",
      "Fencing Wire",
      "Fertilizers",
      "Pesticide Spraying",
      "Tractor Hiring",
      "Land Levelling",
      "Tree Plantation",
      "Nursery Mgmt",
      "Irrigation Pipes",
      "Pump Sets",
      "Greenhouse Setup",
      "Soil Testing",
      "Cold Storage",
      "Drip Irrigation",
      "Organic Certification",
      "Food Processing Units",
      "Dairy Equipment",
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    count: "7k+ Tenders",
    tag: "Industrial",
    gradient: "linear-gradient(135deg,#7C2D12 0%,#EA580C 100%)",
    pattern:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 10px)",
    categories: [
      "School Uniforms",
      "Office Furniture",
      "Hand Tools",
      "Stationery",
      "Safety Shoes",
      "Signage Boards",
      "Textiles",
      "PVC Pipes",
      "Steel Racks",
      "Spare Parts",
      "Machinery Supply",
      "Lab Equipment",
      "Prefab Shelters",
      "Defense Components",
      "Industrial Pumps",
      "Conveyor Belts",
      "Heavy Fabrications",
      "Transformers",
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics",
    count: "9k+ Tenders",
    tag: "Popular",
    gradient: "linear-gradient(135deg,#06B6D4 0%,#14B8A6 100%)",
    pattern:
      "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
    categories: [
      "Car Hiring",
      "Jeep/Taxi Rental",
      "Courier Services",
      "Office Shifting",
      "Manpower Supply",
      "Water Tanker",
      "Bus Contracts",
      "Waste Disposal",
      "Loading/Unloading",
      "Packaging",
      "Fleet Mgmt",
      "Warehousing",
      "Cold Chain",
      "Inventory Software",
      "Freight Forwarding",
      "Port Handling",
    ],
  },
  {
    id: "health",
    icon: HeartPulse,
    title: "Healthcare",
    count: "6k+ Tenders",
    tag: "Critical",
    gradient: "linear-gradient(135deg,#DC2626 0%,#991B1B 100%)",
    pattern: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
    categories: [
      "Gloves & Masks",
      "Laundry",
      "Cleaning",
      "Food Supply",
      "Generic Medicines",
      "Surgicals",
      "Ambulance Hiring",
      "Lab Reagents",
      "Diagnostic Kits",
      "Bed Linen",
      "Furniture",
      "Bio-Waste Mgmt",
      "X-Ray Machines",
      "Medical AMC",
      "Oxygen Plants",
      "MRI Scanners",
    ],
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Power",
    count: "5k+ Tenders",
    tag: "Green Growth",
    gradient: "linear-gradient(135deg,#2563EB 0%,#06B6D4 100%)",
    pattern:
      "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.05) 20px)",
    categories: [
      "Street Lights",
      "Generator AMC",
      "LED Supply",
      "Cabling",
      "Solar Heaters",
      "Meter Reading",
      "Earthing",
      "Rooftop Solar",
      "Transformer Repair",
      "Substations",
      "Energy Audits",
      "EV Charging",
      "Battery Storage",
      "Transmission",
      "Solar Parks",
      "Hydro Plants",
    ],
  },
];

/* ---------- Utility ---------- */
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/* ---------- Sector Card ---------- */
function SectorCard({ sector }: { sector: (typeof sectors)[number] }) {
  const Icon = sector.icon;

  return (
    <article className="h-full rounded-3xl overflow-hidden relative shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group border border-white/10 flex flex-col">
      {/* Backgrounds */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: sector.gradient }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: sector.pattern, backgroundSize: "20px 20px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col p-7">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-inner">
              <Icon className="w-7 h-7 text-white drop-shadow-md" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-white/70 mb-1">
                {sector.tag}
              </p>
              <h3 className="text-2xl font-bold text-white tracking-tight leading-none">
                {sector.title}
              </h3>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/10">
            {sector.count}
          </span>
        </div>

        {/* === FIXED CATEGORIES === */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 content-start">
            {sector.categories.slice(0, 15).map((cat, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 border border-white/5 text-[13px] font-medium text-white/90 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default"
              >
                {cat}
              </span>
            ))}
            {/* "More..." Button automatically appended */}
            <Link
              href={`/sectors/${slug(sector.title)}`}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/20 border border-white/10 text-[13px] font-bold text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-colors cursor-pointer"
            >
              More...
            </Link>
          </div>
        </div>

        {/* Footer Area - Just the Button now */}
        <div className="mt-8">
          <Link
            href={`/sectors/${slug(sector.title)}`}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-6 py-4 text-sm font-bold uppercase tracking-wide hover:bg-slate-50 transition-colors shadow-lg"
          >
            Explore {sector.title} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Main Component ---------- */
export const SectorHighlights = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const autoplay = React.useMemo(() => {
    if (!isVisible) return null;
    return Autoplay({
      delay: 4000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="section bg-surface border-b border-primary-10 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Discover Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Find Tenders by <span className="gradient-text">Sector</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            From local maintenance contracts to massive infrastructure projects.
            <br className="hidden md:block" />
            We categorize them for your convenience.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={autoplay ? [autoplay] : []}
          className="w-full max-w-[1400px] mx-auto"
        >
          <CarouselContent className="-ml-6">
            {sectors.map((sector) => (
              // Reduced height to 420px
              <CarouselItem
                key={sector.id}
                className="pl-6 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 h-[420px]"
              >
                <SectorCard sector={sector} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="static transform-none translate-y-0 h-14 w-14 rounded-full border-2 border-primary/10 hover:bg-primary hover:text-white transition-all" />
            <CarouselNext className="static transform-none translate-y-0 h-14 w-14 rounded-full border-2 border-primary/10 hover:bg-primary hover:text-white transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
