"use client";

import { howItWorksData } from "@/data/howItWorksData";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";

export default function HowItWorksPage() {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-full">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            How <span className="gradient-text">TenderLink</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From discovery to delivery, our process is simple, transparent, and
            effective.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* LEFT — Timeline */}
          <div className="lg:col-span-2">
            {howItWorksData.map((item, index) => (
              <div key={index} className="flex gap-6 mb-16 last:mb-0 group">
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  {index !== howItWorksData.length - 1 && (
                    <div className="w-0.5 flex-grow bg-border mt-4 mb-2" />
                  )}
                </div>

                {/* Content */}
                <Card className="flex-1 p-8 glass-card hover:shadow-lg transition">
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xl mb-6">
                    {item.description}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 border-t pt-4">
                    {item.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-md text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-teal-500" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* RIGHT — Sticky CTA */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <Card className="p-8 bg-primary text-white shadow-glow">
                <h4 className="text-xl font-heading font-bold mb-3">
                  Need help setting up your profile?
                </h4>
                <p className="text-white/80 mb-6 text-lg">
                  Our experts will configure your TenderLink profile so you
                  start receiving perfect tenders instantly.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-md font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>

                <p className="text-md text-white/70 mt-4">
                  Free profile setup assistance included in all plans.
                </p>
              </Card>
              <div className="mt-0">
                <TrustStrip
                  title="Recognized under Startup India & DPIIT"
                  logos={[
                    { src: "/logos/startup-india.png", alt: "Startup India" },
                    { src: "/logos/dpiit.png", alt: "DPIIT" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
