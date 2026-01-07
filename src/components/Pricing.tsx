"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ShieldCheck } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Gold",
      price: "₹51,000",
      period: "subscription",
      description: "Essential tender coverage for growing businesses.",
      features: [
        { name: "Website Access", included: true },
        { name: "WhatsApp Alerts", included: true },
        { name: "Call Support", included: true },
        { name: "Mobile App Access", included: false },
        { name: "Call Alerts", included: false },
        { name: "Collaboration", included: false },
        { name: "11x Bidding Assistance", included: false },
      ],
      cta: "Contact Sales",
      popular: false,
    },
    {
      name: "Platinum",
      price: "₹79,000",
      period: "subscription",
      description: "Priority support and enhanced visibility.",
      features: [
        { name: "Website Access", included: true },
        { name: "WhatsApp Alerts", included: true },
        { name: "Call Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Call Alerts", included: true },
        { name: "Collaboration", included: true },
        { name: "11x Bidding Assistance", included: false },
      ],
      cta: "Contact Sales",
      popular: true,
    },
    {
      name: "Diamond",
      price: "₹1,10,000",
      period: "subscription",
      description: "Ultimate coverage for large-scale operations.",
      features: [
        { name: "Website Access", included: true },
        { name: "WhatsApp Alerts", included: true },
        { name: "Call Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Call Alerts", included: true },
        { name: "Collaboration", included: true },
        { name: "11x Bidding Assistance", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-slate-50 relative border-t border-[#1F1E5E]/5"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#1F1E5E] uppercase tracking-tighter">
            Premium{" "}
            <span className="text-[#1F1E5E]/70">Subscription Plans</span>
          </h2>
          <p className="text-lg text-[#1F1E5E]/60 max-w-2xl mx-auto font-light">
            Choose a plan that fits your business scale. Unlock 11x Bidding
            Assistance and real-time alerts.
          </p>
          <div className="w-16 h-1 bg-[#1F1E5E]/10 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-10 relative rounded-none flex flex-col h-full transition-all duration-300 animate-slide-up ${
                plan.popular
                  ? "bg-[#1F1E5E] text-white shadow-2xl scale-105 z-10 border-none"
                  : "bg-white text-[#1F1E5E] border border-[#1F1E5E]/10 hover:border-[#1F1E5E]/30 hover:shadow-xl corner-accent"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* "Best Value" Ribbon for Popular Plan */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-[#1F1E5E] text-[10px] font-bold uppercase tracking-widest px-6 py-1 shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-10">
                <h3
                  className={`text-2xl font-heading font-bold mb-4 uppercase tracking-wider ${
                    plan.popular ? "text-white" : "text-[#1F1E5E]"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span
                    className={`text-4xl font-heading font-bold ${
                      plan.popular ? "text-white" : "text-[#1F1E5E]"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm font-light ${
                    plan.popular ? "text-white/70" : "text-[#1F1E5E]/60"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-5 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    {/* Check/X Icons - Colors adapt to card background */}
                    <div
                      className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-none border ${
                        feature.included
                          ? plan.popular
                            ? "bg-white text-[#1F1E5E] border-white"
                            : "bg-[#1F1E5E] text-white border-[#1F1E5E]"
                          : "border-transparent"
                      }`}
                    >
                      {feature.included ? (
                        <Check className="h-3 w-3" strokeWidth={4} />
                      ) : (
                        <X
                          className={`h-4 w-4 ${
                            plan.popular ? "text-white/20" : "text-[#1F1E5E]/20"
                          }`}
                        />
                      )}
                    </div>

                    <span
                      className={`text-sm font-medium tracking-wide ${
                        feature.included
                          ? plan.popular
                            ? "text-white"
                            : "text-[#1F1E5E]"
                          : plan.popular
                          ? "text-white/30 line-through"
                          : "text-[#1F1E5E]/30 line-through"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-none h-14 text-xs uppercase tracking-widest font-bold border transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-[#1F1E5E] hover:bg-white/90 border-transparent"
                    : "bg-transparent text-[#1F1E5E] border-[#1F1E5E]/20 hover:bg-[#1F1E5E] hover:text-white hover:border-[#1F1E5E]"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <a href="#contact">{plan.cta}</a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Trust Badge at bottom */}
        <div className="mt-16 flex justify-center items-center gap-3 opacity-60">
          <ShieldCheck className="w-5 h-5 text-[#1F1E5E]" />
          <span className="text-sm font-bold uppercase tracking-widest text-[#1F1E5E]">
            Secure Payment & GST Invoicing
          </span>
        </div>
      </div>
    </section>
  );
};
