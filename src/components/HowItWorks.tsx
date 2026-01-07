"use client";

import { Card } from "@/components/ui/card";
import {
  UserPlus,
  Target,
  FileCheck,
  Trophy,
  ChevronRight,
} from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register Business",
      description:
        "Create your professional profile with business capabilities and category preferences.",
    },
    {
      icon: Target,
      title: "Get Matched",
      description:
        "Our AI algorithm instantly filters and matches you with relevant government tenders.",
    },
    {
      icon: FileCheck,
      title: "Prepare Bid",
      description:
        "Access expert consultancy tools to create compliant, winning bid packages.",
    },
    {
      icon: Trophy,
      title: "Submit & Win",
      description:
        "Finalize submission through our secure portal and track your success in real-time.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="px-6 py-24 bg-white relative overflow-hidden"
    >
      {/* Background Grid Pattern (Technical Feel) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1F1E5E 1px, transparent 1px), linear-gradient(90deg, #1F1E5E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#1F1E5E] uppercase tracking-tighter">
            How <span className="text-[#1F1E5E]/70">TenderLink</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A systematic 4-step process to secure government contracts.
          </p>
          <div className="w-12 h-1 bg-[#1F1E5E]/20 mx-auto mt-6" />
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) - Solid Navy Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-[#1F1E5E]/10 -z-10">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#1F1E5E]/30 to-transparent animate-pulse" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number Indicator - Floating above card */}
                <div className="mx-auto mb-6 w-12 h-12 bg-[#1F1E5E] text-white flex items-center justify-center font-heading font-bold text-lg shadow-lg z-20 relative transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#1A184D] border-4 border-white">
                  0{index + 1}
                </div>

                <Card className="rounded-none bg-white border border-[#1F1E5E]/10 p-8 h-full flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#1F1E5E] transition-all duration-300 relative overflow-hidden">
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#1F1E5E]/20 transition-all duration-300 group-hover:border-[#1F1E5E]" />

                  <div className="mb-6 p-4 rounded-full bg-[#1F1E5E]/5 text-[#1F1E5E] group-hover:bg-[#1F1E5E] group-hover:text-white transition-all duration-500">
                    <step.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-3 text-[#1F1E5E] uppercase tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-[#1F1E5E]/60 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>

                  {/* Mobile Arrow Indicator (Hidden on Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 text-[#1F1E5E]/20">
                      <ChevronRight className="h-6 w-6 rotate-90" />
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
