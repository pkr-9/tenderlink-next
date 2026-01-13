"use client";

import {
  PieChart,
  Users,
  Briefcase,
  DollarSign,
  Network,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    title: "Steady Revenue Flow",
    description:
      "Consistent projects ensure financial stability and long-term growth opportunities.",
    icon: PieChart,
    color: "bg-[#1F1E5E]",
    accent: "text-[#14B8A6]",
    span: "md:col-span-2",
  },
  {
    title: "Expand Client Base",
    description:
      "Win tenders to build credibility and attract new high-value clients.",
    icon: Users,
    color: "bg-[#2A296D]",
    accent: "text-[#6366F1]",
    span: "md:col-span-1",
  },
  {
    title: "Investor Interest",
    description: "Demonstrate market demand and traction to attract investors.",
    icon: Briefcase,
    color: "bg-[#24235F]",
    accent: "text-[#14B8A6]",
    span: "md:col-span-1",
  },
  {
    title: "Cost-Effective Growth",
    description:
      "Reduce marketing and sales costs with our efficient tender acquisition system.",
    icon: DollarSign,
    color: "bg-[#2F2E78]",
    accent: "text-[#6366F1]",
    span: "md:col-span-1",
  },
  {
    title: "Industry Connections",
    description:
      "Build valuable partnerships and long-term business relationships.",
    icon: Network,
    color: "bg-[#292868]",
    accent: "text-[#14B8A6]",
    span: "md:col-span-1",
  },
  {
    title: "Enhanced Credibility",
    description:
      "Winning government tenders establishes your reputation in the market.",
    icon: BadgeCheck,
    color: "bg-[#1C1B52]",
    accent: "text-[#6366F1]",
    span: "md:col-span-2",
  },
];

export function BenefitsBento() {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Benefits of Using <span className="text-primary">TenderLink</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-2xl max-w-2xl mx-auto">
            Why thousands of businesses trust our platform
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`
                ${item.color}
                ${item.span}
                rounded-2xl p-8 text-white
                relative overflow-hidden
                transform transition-all duration-500
                hover:shadow-[0_20px_40px_rgba(31,30,94,0.6)]
                shadow-[0_10px_25px_rgba(31,30,94,0.45)]
              `}
            >
              {/* Inner highlight for depth */}
              <div
                className="
                absolute inset-0 rounded-2xl 
                bg-gradient-to-b from-white/10 to-transparent
                opacity-60 pointer-events-none
              "
              />

              {/* Icon plate */}
              <div
                className={`
                relative z-10 mb-5
                w-14 h-14 flex items-center justify-center
                rounded-xl bg-white/10 ${item.accent}
                shadow-inner
              `}
              >
                <item.icon className="h-7 w-7" />
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-2xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="relative z-10 text-white/80 text-lg leading-relaxed">
                {item.description}
              </p>

              {/* Accent corner glow */}
              <div
                className={`
                absolute -bottom-6 -right-6 w-24 h-24 rounded-full 
                ${item.accent.replace("text-", "bg-")}
                opacity-20 blur-2xl
              `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
