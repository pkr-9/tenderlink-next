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

/* ---------- Sector Data with single `categories` array (≈10 items each) ---------- */
const sectors = [
  {
    id: "construction",
    icon: HardHat,
    title: "Construction & Infra",
    count: "12k+ Tenders",
    tag: "High Volume",
    gradient: "linear-gradient(135deg,#1F1E5E 0%,#2F2FA2 100%)",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 12px)",
    categories: [
      { key: "roads", label: "Roads", count: "3.2k" },
      { key: "bridges", label: "Bridges", count: "2.1k" },
      { key: "urban", label: "Urban Dev", count: "1.5k" },
      { key: "metro", label: "Metro Projects", count: "980" },
      { key: "airports", label: "Airports", count: "740" },
      { key: "housing", label: "Housing", count: "1.1k" },
      { key: "tunnels", label: "Tunnels", count: "420" },
      { key: "coastal", label: "Coastal Works", count: "310" },
      { key: "drainage", label: "Drainage", count: "560" },
      { key: "public-buildings", label: "Public Buildings", count: "870" },
    ],
    sampleTenders: [
      { id: 1, title: "NH-48 Highway Expansion", value: "₹124 Cr" },
      { id: 2, title: "Smart City Drainage Project", value: "₹52 Cr" },
    ],
  },

  {
    id: "health",
    icon: HeartPulse,
    title: "Healthcare & Pharma",
    count: "6k+ Tenders",
    tag: "Critical",
    gradient: "linear-gradient(135deg,#2F2FA2 0%,#4F46E5 100%)",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 12px)",
    categories: [
      { key: "equipment", label: "Medical Equipment", count: "2.1k" },
      { key: "drugs", label: "Pharmaceuticals", count: "1.7k" },
      { key: "labs", label: "Lab Services", count: "1.1k" },
      { key: "ambulance", label: "Ambulance Services", count: "480" },
      { key: "hospital-build", label: "Hospital Construction", count: "380" },
      { key: "consumables", label: "Consumables", count: "920" },
      { key: "diagnostic", label: "Diagnostic Services", count: "610" },
      { key: "vaccines", label: "Vaccines", count: "350" },
      { key: "health-it", label: "IT in Healthcare", count: "240" },
    ],
    sampleTenders: [
      { id: 1, title: "AIIMS MRI Procurement", value: "₹42 Cr" },
      { id: 2, title: "State Vaccine Supply Contract", value: "₹68 Cr" },
    ],
  },

  {
    id: "it",
    icon: Monitor,
    title: "IT & Software",
    count: "8.5k+ Tenders",
    tag: "Trending",
    gradient: "linear-gradient(135deg,#4F46E5 0%,#2563EB 100%)",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 12px)",
    categories: [
      { key: "saas", label: "SaaS", count: "2.4k" },
      { key: "hardware", label: "Hardware", count: "1.8k" },
      { key: "cloud", label: "Cloud", count: "1.2k" },
      { key: "cyber", label: "Cybersecurity", count: "980" },
      { key: "ai", label: "AI / ML", count: "640" },
      { key: "data-centers", label: "Data Centers", count: "480" },
      { key: "networking", label: "Networking", count: "530" },
      { key: "managed", label: "Managed Services", count: "410" },
      { key: "support", label: "IT Support", count: "720" },
      { key: "mobile", label: "Mobile Apps", count: "360" },
    ],
    sampleTenders: [
      { id: 1, title: "Government ERP System Upgrade", value: "₹18 Cr" },
      { id: 2, title: "State Cloud Migration Project", value: "₹9 Cr" },
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
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 12px)",
    categories: [
      { key: "solar", label: "Solar", count: "1.9k" },
      { key: "wind", label: "Wind", count: "1.1k" },
      { key: "hydro", label: "Hydro", count: "640" },
      { key: "battery", label: "Battery Storage", count: "520" },
      { key: "grid", label: "Power Grid", count: "860" },
      { key: "transmission", label: "Transmission Lines", count: "420" },
      { key: "substations", label: "Substations", count: "380" },
      { key: "biomass", label: "Biomass", count: "210" },
      { key: "ev-charging", label: "EV Charging", count: "300" },
      { key: "energy-audit", label: "Energy Audits", count: "170" },
    ],
    sampleTenders: [
      { id: 1, title: "500MW Solar Plant Development", value: "₹210 Cr" },
      { id: 2, title: "National Grid Upgrade Contract", value: "₹95 Cr" },
    ],
  },

  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Supply",
    count: "9k+ Tenders",
    tag: "Popular",
    gradient: "linear-gradient(135deg,#06B6D4 0%,#14B8A6 100%)",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 12px)",
    categories: [
      { key: "freight", label: "Freight", count: "3.4k" },
      { key: "warehouse", label: "Warehousing", count: "2.2k" },
      { key: "fleet", label: "Fleet Mgmt", count: "1.3k" },
      { key: "cold", label: "Cold Chain", count: "860" },
      { key: "port", label: "Port Services", count: "420" },
      { key: "last-mile", label: "Last-Mile", count: "980" },
      { key: "courier", label: "Courier", count: "600" },
      { key: "packaging", label: "Packaging", count: "340" },
      { key: "inventory", label: "Inventory Software", count: "290" },
      { key: "terminal", label: "Terminal Ops", count: "210" },
    ],
    sampleTenders: [
      { id: 1, title: "Indian Rail Freight Handling", value: "₹74 Cr" },
      { id: 2, title: "State Warehouse Automation", value: "₹29 Cr" },
    ],
  },
];

// const sectors = [
//   {
//     id: "construction",
//     icon: HardHat,
//     title: "Construction & Infra",
//     count: "12k+ Tenders",
//     tag: "High Volume",
//     gradient: "linear-gradient(135deg,#ff7a18 0%,#af002d 100%)",
//     pattern:
//       "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 12px)",
//     categories: [
//       { key: "roads", label: "Roads", count: "3.2k" },
//       { key: "bridges", label: "Bridges", count: "2.1k" },
//       { key: "urban", label: "Urban Dev", count: "1.5k" },
//       { key: "metro", label: "Metro Projects", count: "980" },
//       { key: "airports", label: "Airports", count: "740" },
//       { key: "housing", label: "Housing", count: "1.1k" },
//       { key: "tunnels", label: "Tunnels", count: "420" },
//       { key: "coastal", label: "Coastal Works", count: "310" },
//       { key: "drainage", label: "Drainage", count: "560" },
//       { key: "public-buildings", label: "Public Buildings", count: "870" },
//     ],
//     sampleTenders: [
//       { id: 1, title: "NH-48 Highway Expansion", value: "₹124 Cr" },
//       { id: 2, title: "Smart City Drainage Project", value: "₹52 Cr" },
//     ],
//   },

//   {
//     id: "it",
//     icon: Monitor,
//     title: "IT & Software",
//     count: "8.5k+ Tenders",
//     tag: "Trending",
//     gradient: "linear-gradient(135deg,#4f46e5 0%,#06b6d4 100%)",
//     pattern:
//       "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 12px)",
//     categories: [
//       { key: "saas", label: "SaaS", count: "2.4k" },
//       { key: "hardware", label: "Hardware", count: "1.8k" },
//       { key: "cloud", label: "Cloud", count: "1.2k" },
//       { key: "cyber", label: "Cybersecurity", count: "980" },
//       { key: "ai", label: "AI / ML", count: "640" },
//       { key: "data-centers", label: "Data Centers", count: "480" },
//       { key: "networking", label: "Networking", count: "530" },
//       { key: "managed", label: "Managed Services", count: "410" },
//       { key: "support", label: "IT Support", count: "720" },
//       { key: "mobile", label: "Mobile Apps", count: "360" },
//     ],
//     sampleTenders: [
//       { id: 1, title: "Government ERP System Upgrade", value: "₹18 Cr" },
//       { id: 2, title: "State Cloud Migration Project", value: "₹9 Cr" },
//     ],
//   },

//   {
//     id: "energy",
//     icon: Zap,
//     title: "Energy & Power",
//     count: "5k+ Tenders",
//     tag: "Green Growth",
//     gradient: "linear-gradient(135deg,#22c55e 0%,#16a34a 100%)",
//     pattern:
//       "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 12px)",
//     categories: [
//       { key: "solar", label: "Solar", count: "1.9k" },
//       { key: "wind", label: "Wind", count: "1.1k" },
//       { key: "hydro", label: "Hydro", count: "640" },
//       { key: "battery", label: "Battery Storage", count: "520" },
//       { key: "grid", label: "Power Grid", count: "860" },
//       { key: "transmission", label: "Transmission Lines", count: "420" },
//       { key: "substations", label: "Substations", count: "380" },
//       { key: "biomass", label: "Biomass", count: "210" },
//       { key: "ev-charging", label: "EV Charging", count: "300" },
//       { key: "energy-audit", label: "Energy Audits", count: "170" },
//     ],
//     sampleTenders: [
//       { id: 1, title: "500MW Solar Plant Development", value: "₹210 Cr" },
//       { id: 2, title: "National Grid Upgrade Contract", value: "₹95 Cr" },
//     ],
//   },

//   {
//     id: "health",
//     icon: HeartPulse,
//     title: "Healthcare & Pharma",
//     count: "6k+ Tenders",
//     tag: "Critical",
//     gradient: "linear-gradient(135deg,#f97316 0%,#ef4444 100%)",
//     pattern:
//       "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 12px)",
//     categories: [
//       { key: "equipment", label: "Medical Equipment", count: "2.1k" },
//       { key: "drugs", label: "Pharmaceuticals", count: "1.7k" },
//       { key: "labs", label: "Lab Services", count: "1.1k" },
//       { key: "ambulance", label: "Ambulance Services", count: "480" },
//       { key: "hospital-build", label: "Hospital Construction", count: "380" },
//       { key: "consumables", label: "Consumables", count: "920" },
//       { key: "diagnostic", label: "Diagnostic Services", count: "610" },
//       { key: "vaccines", label: "Vaccines", count: "350" },
//       { key: "health-it", label: "IT in Healthcare", count: "240" },
//       // { key: "telemedicine", label: "Telemedicine", count: "180" },
//     ],
//     sampleTenders: [
//       { id: 1, title: "AIIMS MRI Procurement", value: "₹42 Cr" },
//       { id: 2, title: "State Vaccine Supply Contract", value: "₹68 Cr" },
//     ],
//   },

//   {
//     id: "logistics",
//     icon: Truck,
//     title: "Logistics & Supply",
//     count: "9k+ Tenders",
//     tag: "Popular",
//     gradient: "linear-gradient(135deg,#fb7185 0%,#f43f5e 100%)",
//     pattern:
//       "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 12px)",
//     categories: [
//       { key: "freight", label: "Freight", count: "3.4k" },
//       { key: "warehouse", label: "Warehousing", count: "2.2k" },
//       { key: "fleet", label: "Fleet Mgmt", count: "1.3k" },
//       { key: "cold", label: "Cold Chain", count: "860" },
//       { key: "port", label: "Port Services", count: "420" },
//       { key: "last-mile", label: "Last-Mile", count: "980" },
//       { key: "courier", label: "Courier", count: "600" },
//       { key: "packaging", label: "Packaging", count: "340" },
//       { key: "inventory", label: "Inventory Software", count: "290" },
//       { key: "terminal", label: "Terminal Ops", count: "210" },
//     ],
//     sampleTenders: [
//       { id: 1, title: "Indian Rail Freight Handling", value: "₹74 Cr" },
//       { id: 2, title: "State Warehouse Automation", value: "₹29 Cr" },
//     ],
//   },
// ];

/* ---------- Utility ---------- */
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/* ---------- Sector Card (uses single `categories`) ---------- */
function SectorCard({ sector }: { sector: (typeof sectors)[number] }) {
  const Icon = sector.icon;

  return (
    <article className="h-full rounded-2xl overflow-hidden relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: sector.gradient }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: sector.pattern }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm uppercase font-semibold text-white/80">
                {sector.tag}
              </p>
              <h3 className="text-xl font-bold">{sector.title}</h3>
            </div>
          </div>

          <span className="-mx-2 px-2 py-1 rounded-full bg-white/15 text-sm font-bold">
            {sector.count}
          </span>
        </div>

        {/* === CATEGORY CAPSULES (single `categories` list) === */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 py-2">
            {sector.categories.slice(0, 10).map((cat) => (
              <button
                key={cat.key}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[16px] font-medium whitespace-nowrap hover:bg-white/16 transition"
                aria-label={`${cat.label} — ${cat.count}`}
              >
                <span className="font-semibold text-white">{cat.label}</span>
                <span className="text-[14px] text-white/80">· {cat.count}</span>
              </button>
            ))}
          </div>

          {/* Sample tenders */}
          <div className="mt-3 space-y-1 text-sm text-white/90">
            {sector.sampleTenders.map((t) => (
              <p key={t.id}>
                {t.title} — <span className="font-semibold">{t.value}</span>
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 flex justify-between items-center">
          <Link
            href={`/sectors/${slug(sector.title)}`}
            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold"
          >
            View Tenders
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={`/sectors/${slug(sector.title)}#sample`}
            className="text-sm underline underline-offset-2"
          >
            Sample contracts
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Main Component ---------- */
export const SectorHighlights = () => {
  const autoplay = Autoplay({
    delay: 3500,
    stopOnMouseEnter: true,
    stopOnInteraction: true,
  });

  return (
    <section className="py-20 bg-surface border-b border-primary-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Explore Opportunities <br />
            <span className="gradient-text">By Industry</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-2xl">
            Discover major tender categories instantly. Browse deeper when
            needed.
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: true }} plugins={[autoplay]}>
          <CarouselContent className="-ml-4">
            {sectors.map((sector) => (
              <CarouselItem
                key={sector.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3 h-[400px] md:h-[460px] lg:h-[500px]"
              >
                <SectorCard sector={sector} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="-left-4 hidden md:flex items-center justify-center h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-all shadow"
            aria-label="Previous sector"
          >
            <ChevronLeft className="w-5 h-5" />
          </CarouselPrevious>
          <CarouselNext
            className="-right-4 hidden md:flex items-center justify-center h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-all shadow"
            aria-label="Next sector"
          >
            <ChevronRight className="w-5 h-5" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};
