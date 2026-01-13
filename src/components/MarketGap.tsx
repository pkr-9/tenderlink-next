"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export const MarketGap = () => {
  const gaps = [
    {
      problem: "Lack of Awareness",
      problemDesc:
        "Businesses miss opportunities because tenders are scattered across hundreds of disconnected portals.",
      solution: "Centralized Intelligence",
      solutionDesc:
        "We aggregate 647,000+ tenders into one AI-powered searchable dashboard.",
    },
    {
      problem: "Manual Search Fatigue",
      problemDesc:
        "Checking multiple portals daily is inefficient, error-prone, and wastes man-hours.",
      solution: "Automated Alerts",
      solutionDesc:
        "Get real-time WhatsApp, Email, and SMS notifications instantly.",
    },
    {
      problem: "Eligibility Confusion",
      problemDesc:
        "Complex qualification rules cause businesses to waste time bidding on the wrong tenders.",
      solution: "Smart Assessment",
      solutionDesc:
        "AI analyzes your profile and instantly shows which bids you can win.",
    },
    {
      problem: "Limited Collaboration",
      problemDesc:
        "Small businesses struggle to find partners for large tenders.",
      solution: "Collaboration Hub",
      solutionDesc:
        "Connect with partners and form consortiums to bid on larger contracts.",
    },
  ];

  /* ===== Sequential Blue Shades ===== */
  const rowThemes = [
    {
      border: "border-[#1F1E5E]/30",
      solutionBg: "bg-[#1F1E5E]/5",
      solutionText: "text-[#1F1E5E]",
      icon: "text-[#1F1E5E]",
    },
    {
      border: "border-[#2F2FA2]/30",
      solutionBg: "bg-[#2F2FA2]/5",
      solutionText: "text-[#2F2FA2]",
      icon: "text-[#2F2FA2]",
    },
    {
      border: "border-[#4F46E5]/30",
      solutionBg: "bg-[#4F46E5]/5",
      solutionText: "text-[#4F46E5]",
      icon: "text-[#4F46E5]",
    },
    {
      border: "border-[#2563EB]/30",
      solutionBg: "bg-[#2563EB]/5",
      solutionText: "text-[#2563EB]",
      icon: "text-[#2563EB]",
    },
  ];

  return (
    <section id="market-gap" className="section bg-surface">
      <div className="container mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Bridging the Market Gap
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            The traditional tender process is broken. Here’s how TenderLink
            fixes it.
          </p>
          <div className="w-16 h-1 bg-primary/20 mx-auto mt-6" />
        </div>

        {/* ===== Horizontal Rows ===== */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {gaps.map((gap, index) => {
            const theme = rowThemes[index % rowThemes.length];

            return (
              <Card
                key={index}
                className={`
                  bg-surface border ${theme.border}
                  shadow-glow hover:shadow-xl
                  transition-all duration-300
                  rounded-2xl overflow-hidden
                `}
              >
                <div className="grid md:grid-cols-2">
                  {/* ===== Problem Column ===== */}
                  <div className="p-8 border-b md:border-b-0 md:border-r border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <XCircle className="h-5 w-5 text-red-500" />
                      <span className="text-md font-bold uppercase tracking-wider text-red-500">
                        Problem
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {gap.problem}
                    </h3>

                    <p className="text-md text-foreground/70 font-bold leading-relaxed">
                      {gap.problemDesc}
                    </p>
                  </div>

                  {/* ===== Solution Column ===== */}
                  <div className={`p-8 ${theme.solutionBg}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className={`h-5 w-5 ${theme.icon}`} />
                      <span
                        className={`text-md font-bold uppercase tracking-wider ${theme.solutionText}`}
                      >
                        Solution
                      </span>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-2 ${theme.solutionText}`}
                    >
                      {gap.solution}
                    </h3>

                    <p className="text-md text-foreground/70 font-bold leading-relaxed">
                      {gap.solutionDesc}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
