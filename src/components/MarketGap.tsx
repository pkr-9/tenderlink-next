"use client";

import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export const MarketGap = () => {
  const gaps = [
    {
      problem: "Lack of Awareness",
      problemDesc:
        "Businesses often miss out simply because they don't know opportunities exist. Tenders are scattered across hundreds of disconnected websites.",
      solution: "Centralized Intelligence",
      solutionDesc:
        "We consolidate 647,000+ tenders from government and private sources into one searchable, AI-powered dashboard.",
    },
    {
      problem: "Manual Search Fatigue",
      problemDesc:
        "Manually checking multiple portals daily is inefficient, error-prone, and costs valuable man-hours.",
      solution: "Automated Alerts",
      solutionDesc:
        "Set it and forget it. Receive real-time notifications via WhatsApp, Email, and SMS the moment a relevant tender drops.",
    },
    {
      problem: "Eligibility Confusion",
      problemDesc:
        "Complex qualification criteria vary by tender. Many businesses waste time bidding on projects they don't qualify for.",
      solution: "Smart Assessment Tool",
      solutionDesc:
        "Our AI instantly analyzes your profile against tender requirements to tell you exactly which bids you can win.",
    },
    {
      problem: "Limited Collaboration",
      problemDesc:
        "Small businesses often lack the resources to bid on large projects alone and struggle to find partners.",
      solution: "Collaboration Hub",
      solutionDesc:
        "Connect with complementary businesses to form consortiums and bid on larger, more lucrative contracts together.",
    },
  ];

  return (
    <section
      id="market-gap"
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F1E5E]/5 -skew-x-12 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#1F1E5E] uppercase tracking-tight">
            Bridging the <span className="text-[#1F1E5E]/70">Market Gap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            The traditional tender process is broken. Here is how we fixed it.
          </p>
          <div className="w-16 h-1 bg-[#1F1E5E]/20 mx-auto mt-8" />
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {gaps.map((gap, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="grid md:grid-cols-2 border border-[#1F1E5E]/10 rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                {/* Problem Side (White/Gray) */}
                <div className="p-8 md:p-10 bg-slate-50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#1F1E5E]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="h-6 w-6 text-red-500" />
                    <span className="font-heading font-bold text-sm uppercase tracking-widest text-red-500">
                      The Problem
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-[#1F1E5E]/80">
                    {gap.problem}
                  </h3>
                  <p className="text-[#1F1E5E]/60 leading-relaxed font-light">
                    {gap.problemDesc}
                  </p>
                </div>

                {/* Solution Side (Navy Blue) */}
                <div className="p-8 md:p-10 bg-[#1F1E5E] flex flex-col justify-center relative overflow-hidden group-hover:bg-[#1A184D] transition-colors">
                  {/* Decorative Texture */}
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <CheckCircle2 className="h-32 w-32 text-white -mr-10 -mt-10" />
                  </div>

                  {/* Desktop Center Connector Arrow */}
                  <div className="hidden md:flex absolute top-1/2 -left-4 w-8 h-8 bg-white border border-[#1F1E5E]/10 items-center justify-center rounded-full z-20 shadow-sm">
                    <ArrowRight className="h-4 w-4 text-[#1F1E5E]" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                      <span className="font-heading font-bold text-sm uppercase tracking-widest text-white/50">
                        Our Solution
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3 text-white">
                      {gap.solution}
                    </h3>
                    <p className="text-white/80 leading-relaxed font-light">
                      {gap.solutionDesc}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
