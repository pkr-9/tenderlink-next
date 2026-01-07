"use client";

import { marketGapData } from "@/data/marketGapData";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const MarketGapPage = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1F1E5E 1px, transparent 1px), linear-gradient(90deg, #1F1E5E 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-[#1F1E5E] uppercase tracking-tighter">
            The <span className="text-[#1F1E5E]/70">Gap</span> in the Market
          </h1>
          <p className="text-xl text-[#1F1E5E]/60 max-w-3xl mx-auto font-light leading-relaxed">
            Why traditional tendering is broken, and how TenderLink fixes it. We
            identify the critical inefficiencies that hold businesses back.
          </p>
          <div className="w-24 h-1 bg-[#1F1E5E]/20 mx-auto mt-8" />
        </div>

        <div className="max-w-6xl mx-auto">
          {marketGapData.map((item, index) => (
            <div key={item.id} className="relative mb-20 last:mb-0 group">
              {/* Connector Line (Desktop) - Stops before the last item's bottom */}
              {index !== marketGapData.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-16 bottom-[-80px] w-px bg-[#1F1E5E]/10 -ml-[0.5px] z-0" />
              )}

              <div
                className={`flex flex-col md:flex-row gap-8 md:gap-20 items-stretch ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Central Icon Node (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 items-center justify-center w-16 h-16 bg-[#1F1E5E] text-white z-10 shadow-xl border-[6px] border-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45">
                  <item.icon className="h-6 w-6 group-hover:-rotate-45 transition-transform duration-500" />
                </div>

                {/* Mobile Icon Header */}
                <div className="md:hidden flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-[#1F1E5E] text-white flex items-center justify-center shadow-lg">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>

                {/* PROBLEM CARD (White) */}
                <Card className="flex-1 p-8 md:p-10 rounded-none bg-white border border-[#1F1E5E]/10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-center">
                  {/* Red Accent Line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500/20" />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-8 h-8 bg-red-50 text-red-500 rounded-none border border-red-100">
                      <X className="h-4 w-4" />
                    </div>
                    <span className="font-heading font-bold text-xs uppercase tracking-widest text-red-500">
                      The Problem
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-4 text-[#1F1E5E] uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#1F1E5E]/70 leading-relaxed font-light text-lg">
                    {item.problem}
                  </p>
                </Card>

                {/* SOLUTION CARD (Navy Blue) */}
                <Card className="flex-1 p-8 md:p-10 rounded-none bg-[#1F1E5E] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-center group/card">
                  {/* Decorative Texture */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />

                  <div className="flex items-center gap-3 mb-5 relative z-10">
                    <div className="flex items-center justify-center w-8 h-8 bg-white/10 text-white rounded-none border border-white/20">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="font-heading font-bold text-xs uppercase tracking-widest text-white/60">
                      The Solution
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-4 text-white uppercase tracking-wide relative z-10">
                    TenderLink Advantage
                  </h3>
                  <p className="text-white/80 leading-relaxed font-light text-lg relative z-10">
                    {item.solution}
                  </p>

                  {/* Watermark Icon */}
                  <item.icon className="absolute bottom-4 right-4 h-32 w-32 text-white/5 rotate-12 transition-transform duration-700 group-hover/card:rotate-0" />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketGapPage;
