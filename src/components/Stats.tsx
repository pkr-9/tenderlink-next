// app/components/Stats.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Award, Users, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

/** helper to format numbers with commas */
function formatNumber(n: number) {
  return n.toLocaleString("en-IN");
}

/** parse data like "647,619+" to integer (for animation) */
function parseStatValue(value: string) {
  // strip non-digit chars
  const digits = value.replace(/[^\d]/g, "");
  return parseInt(digits || "0", 10);
}

/** hook: count up to target, respecting reduced motion */
function useCountUp(targetValue: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const mq =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq && mq.matches) {
      setValue(targetValue);
      return;
    }
    let start = performance.now();
    let rafId = 0;
    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const current = Math.floor(t * targetValue);
      setValue(current);
      if (t < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [targetValue, duration]);
  return value;
}

export const Stats = () => {
  const stats = [
    { icon: TrendingUp, value: "647,619+", label: "Active tenders" },
    { icon: Building, value: "2,500+", label: "Govt departments" },
    { icon: Award, value: "98%", label: "Success rate" },
    { icon: Users, value: "12,500+", label: "Happy clients" },
  ];

  return (
    <section
      className="relative mt-16 z-20 pb-16 px-6"
      aria-label="Key statistics"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const target = parseStatValue(stat.value);
            const displayValue = useCountUp(target, 1100 + index * 120);
            // decide suffix (%, +) by extracting non-digit portion
            const suffix = stat.value.replace(/[0-9,\s]/g, "");
            return (
              <Card
                key={index}
                className="glass-card p-6 flex items-center gap-8"
              >
                <div className="mb-3 p-3 bg-primary-10 rounded-full">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>

                <div>
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
                    <span aria-hidden="true">
                      {formatNumber(displayValue)}
                      {suffix}
                    </span>
                    {/* for screen readers show full original text */}
                    <span className="sr-only">{stat.value}</span>
                  </div>

                  <div className="text-sm text-primary-70 font-semibold tracking-wide uppercase">
                    {stat.label}
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
