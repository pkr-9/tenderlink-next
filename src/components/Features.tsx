"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface FeaturesProps {
  heading?: React.ReactNode;
  subheading?: string;
  className?: string;
}

export const Features = ({
  heading = (
    <>
      Why Choose <span className="text-[#1F1E5E]">TenderLink</span>
    </>
  ),
  subheading = "Everything you need to find, bid, and win government and private tenders",
  className = "",
}: FeaturesProps) => {
  return (
    <section
      id="features-services"
      className={`px-6 py-24 bg-white ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header - Dark Text on White Background */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#1F1E5E] uppercase tracking-tight">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {subheading}
          </p>
          <div className="w-16 h-1 bg-[#1F1E5E]/20 mx-auto mt-8" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(servicesData).map(([slug, service], index) => {
            const Icon = service.icon;
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="block h-full group"
              >
                <Card
                  // Card is now Navy Blue (#1F1E5E) with White Text
                  // "corner-accent-white" would be a custom class if needed, but here we use borders
                  className="bg-[#1F1E5E] border border-[#1A184D] p-8 h-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group-hover:border-[#1F1E5E] relative overflow-hidden flex flex-col rounded-none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative Chiseled Corner Detail (Light) */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30" />

                  {/* Icon Box - Slightly darker blue block with White Icon */}
                  <div className="mb-8 p-4 w-fit bg-[#1A184D] border border-white/10 text-white transition-transform duration-500 group-hover:scale-105 shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-4 text-white uppercase tracking-wider">
                    {service.title}
                  </h3>

                  <p className="text-white/70 mb-8 text-sm leading-relaxed flex-grow font-light">
                    {service.summary}
                  </p>

                  {/* Button - Outline White */}
                  <div className="mt-auto w-full py-4 px-5 border border-white/20 bg-transparent text-white group-hover:bg-white group-hover:text-[#1F1E5E] group-hover:border-white transition-all duration-300 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Learn More
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
