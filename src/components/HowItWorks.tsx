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

  /* ===== Monotonic Blue Progression ===== */
  const stepThemes = [
    {
      bg: "bg-[#1F1E5E]",
      softBg: "bg-[#1F1E5E]/10",
      text: "text-[#1F1E5E]",
      borderGlow: "hover:shadow-[#1F1E5E]/30",
    },
    {
      bg: "bg-[#2F2FA2]",
      softBg: "bg-[#2F2FA2]/10",
      text: "text-[#2F2FA2]",
      borderGlow: "hover:shadow-[#2F2FA2]/30",
    },
    {
      bg: "bg-[#4F46E5]",
      softBg: "bg-[#4F46E5]/10",
      text: "text-[#4F46E5]",
      borderGlow: "hover:shadow-[#4F46E5]/30",
    },
    {
      bg: "bg-[#2563EB]",
      softBg: "bg-[#2563EB]/10",
      text: "text-[#2563EB]",
      borderGlow: "hover:shadow-[#2563EB]/30",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="px-6 py-24 bg-surface relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* ===== Header ===== */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary uppercase tracking-tighter">
            How <span className="text-primary/70">TenderLink</span> Works
          </h2>

          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            A simple 4-step process to secure government contracts.
          </p>

          <div className="w-12 h-1 bg-primary/20 mx-auto mt-6" />
        </div>

        {/* ===== Steps Grid ===== */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-primary/10 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const theme = stepThemes[index % stepThemes.length];

              return (
                <div
                  key={index}
                  className="group relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step Number */}
                  <div
                    className={`
                      mx-auto mb-6 w-12 h-12 
                      flex items-center justify-center 
                      font-heading font-bold text-lg text-white 
                      rounded-xl shadow-glow 
                      border-4 border-surface
                      transition-transform duration-300 group-hover:scale-110
                      ${theme.bg}
                    `}
                  >
                    0{index + 1}
                  </div>

                  {/* Step Card */}
                  <Card
                    className={`
                      bg-surface border border-primary/10 
                      p-8 h-full flex flex-col items-center text-center 
                      rounded-2xl shadow-sm 
                      hover:border-primary/40 
                      transition-all duration-300 
                      ${theme.borderGlow}
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                        mb-6 p-4 rounded-full 
                        ${theme.softBg} ${theme.text}
                        transition-all duration-300 
                        group-hover:${theme.bg}
                      `}
                    >
                      <step.icon className="h-7 w-7" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl font-heading font-bold mb-3 ${theme.text}`}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Mobile Arrow */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden mt-6 text-primary/30">
                        <ChevronRight className="h-6 w-6 rotate-90" />
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
