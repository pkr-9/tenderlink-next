"use client";

import { marketGapData } from "@/data/marketGapData";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function MarketGapPage() {
  return (
    <section className="relative section bg-surface overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            The <span className="text-primary/70">Gap</span> in the Market
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why traditional tendering is broken — and how TenderLink fixes it.
          </p>

          <div className="w-20 h-1 bg-primary/20 mx-auto mt-6" />
        </div>

        {/* TIMELINE LINE */}
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20" />

          {/* ITEMS */}
          {marketGapData.map((item, index) => (
            <div key={item.id} className="relative mb-16 last:mb-0">
              {/* Center Icon */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-14 h-14 bg-primary text-white items-center justify-center rounded-full shadow-glow z-10">
                <item.icon className="w-6 h-6" />
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-stretch">
                {/* PROBLEM — always LEFT */}
                <Card className="p-8 border border-red-200/60 bg-white shadow-sm border rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-600 rounded">
                      <X className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-heading font-bold uppercase tracking-widest text-red-600">
                      Problem
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-xl leading-relaxed">
                    {item.problem}
                  </p>
                </Card>

                {/* SOLUTION — always RIGHT */}
                <Card className="p-8 bg-primary text-white shadow-glow relative overflow-hidden border rounded-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-heading font-bold uppercase tracking-widest text-white/70">
                      TenderLink Solution
                    </span>
                  </div>

                  <p className="text-xl leading-relaxed mb-5 relative z-10">
                    {item.solution}
                  </p>

                  {/* Impact bullets */}
                  <ul className="space-y-2 text-sm text-white/80 relative z-10">
                    {item.impact.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-lg">
                        <Check className="w-4 h-4 mt-0.5 text-sky-300" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Watermark icon */}
                  <item.icon className="absolute bottom-3 right-3 w-24 h-24 text-white/5" />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
