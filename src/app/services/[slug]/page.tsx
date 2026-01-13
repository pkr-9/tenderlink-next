import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HelpCircle, Phone, Clock, Users } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { servicesData } from "@/data/servicesData";

/* ---------------- Static Params ---------------- */
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

/* ---------------- Metadata ---------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ Required in Next 16
  const data = servicesData[slug as keyof typeof servicesData];

  if (!data) return { title: "Service Not Found" };

  return {
    title: `${data.title} | TenderLink Services`,
    description: data.summary,
  };
}

/* ---------------- Page ---------------- */
export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ Required in Next 16
  const data = servicesData[slug as keyof typeof servicesData];

  if (!data) notFound();

  const Icon = data.icon ?? (() => null);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className={`relative section ${data.heroImage}`}>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex p-4 bg-white rounded-full shadow mb-6">
            <Icon className="h-10 w-10 text-sky-700" />
          </div>

          <h1 className="text-4xl font-heading font-bold mb-4">{data.title}</h1>

          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            {data.description}
          </p>

          <div className="flex justify-center gap-4">
            <Button className="text-lg bg-gradient-to-r from-sky-600 to-blue-600 text-white">
              <Link href="#contact">Get Started</Link>
            </Button>

            <Button variant="outline" className="text-lg">
              <Link href="#how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex justify-center flex-wrap gap-3">
            {data.trustBadges?.map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-md"
              >
                <Users className="w-4 h-4" /> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 -mt-10 bg-white border-b">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 max-w-5xl">
          {data.statistics?.map((s, i) => (
            <div key={i} className="p-4 rounded-lg bg-white border shadow-sm">
              <div className="text-2xl font-bold text-sky-700">{s.value}</div>
              <div className="text-md text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Why {data.title}?
            </h2>

            <ul className="space-y-3">
              {data.painPoints?.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-lg">
                  <Clock className="w-5 h-5 text-sky-600 mt-1" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">Deliverables</h3>
            <ul className="text-md text-muted-foreground space-y-2">
              {data.deliverables?.map((d, i) => (
                <li key={i}>• {d}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {data.process?.map((step, i) => (
              <div
                key={i}
                className="p-6 bg-white border rounded-lg text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-sky-600 text-white flex items-center justify-center mb-4 font-bold">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-semibold">{step.title}</h4>
                <p className="text-md text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            FAQs
          </h2>

          <Accordion type="single" collapsible>
            {data.faqs?.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>
                  <span className="flex gap-2 items-center text-lg">
                    <HelpCircle className="w-5 h-5 text-sky-600" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-10 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground text-xl mb-6">
              Talk to our tender experts and get a custom plan.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-sky-700 text-white text-md">
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Button>
              <Button variant="outline" className="text-md">
                <Link href={`/services/${slug}/demo`}>Schedule Demo</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
