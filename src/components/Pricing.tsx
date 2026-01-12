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
      cta: "Start Free Trial",
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
      className="py-24 bg-surface border-t border-primary/10"
    >
      <div className="container mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Simple <span className="text-primary/70">Subscription Plans</span>
          </h2>

          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your business scale and unlock real-time
            tender intelligence.
          </p>

          <div className="w-16 h-1 bg-primary/20 mx-auto mt-6" />
        </div>

        {/* ===== Cards ===== */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`
                bg-surface border border-primary/10 rounded-2xl
                shadow-glow hover:shadow-xl transition-all duration-300
                flex flex-col p-8
                ${plan.popular ? "border-primary shadow-2xl scale-[1.04]" : ""}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="self-center mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  {plan.name}
                </h3>

                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {plan.price}
                </div>

                <p className="text-md font-semibold text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {feature.included ? (
                        <Check className="h-4 w-4" strokeWidth={3} />
                      ) : (
                        <X className="h-4 w-4" />
                      )}
                    </div>

                    <span
                      className={`text-md ${
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground line-through"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`
                  w-full rounded-xl text-md font-semibold
                  ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }
                `}
              >
                <a href="#contact">{plan.cta}</a>
              </Button>
            </Card>
          ))}
        </div>

        {/* ===== Trust Badge ===== */}
        <div className="mt-14 flex justify-center items-center gap-3 text-muted-foreground">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold uppercase tracking-wider">
            Secure Payment & GST Invoicing
          </span>
        </div>
      </div>
    </section>
  );
};
