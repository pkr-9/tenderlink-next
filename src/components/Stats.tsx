"use client";

import {
  TrendingUp,
  Award,
  Users,
  Building,
  Phone,
  Mail,
  Link,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

export const Stats = () => {
  const stats = [
    { icon: TrendingUp, value: "647,619+", label: "ACTIVE TENDERS" },
    { icon: Building, value: "2,500+", label: "GOVT DEPARTMENTS" },
    { icon: Award, value: "98%", label: "SUCCESS RATE" },
    { icon: Users, value: "12,500+", label: "HAPPY CLIENTS" },
  ];

  return (
    <section className="relative mt-20 z-20 pb-20 px-6">
      <div className="container mx-auto">
        {/* Stats Grid - Floats over the Hero/Body boundary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="corner-accent bg-white border border-[#1F1E5E]/10 p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group rounded-none"
            >
              <div className="mb-4 p-4 bg-[#1F1E5E]/5 rounded-full group-hover:bg-[#1F1E5E] transition-colors duration-300">
                <stat.icon className="h-6 w-6 text-[#1F1E5E] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-[#1F1E5E] mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] text-[#1F1E5E]/60 font-heading font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
