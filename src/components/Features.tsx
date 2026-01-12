"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Bookmark, Star } from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface FeaturesProps {
  heading?: React.ReactNode;
  subheading?: string;
  className?: string;
}

/**
 * Small helper: truncate text safely (used when service.points missing)
 */
const truncate = (text: string | undefined, len = 120) =>
  text && text.length > len ? text.slice(0, len - 1) + "…" : text || "";

/**
 * FeatureCard component — robust (defensive) access to service fields.
 *
 * Expected `service` shape (minimal):
 * {
 *   icon: React.ComponentType,
 *   title: string,
 *   summary: string,
 *   points?: string[],         // optional bullet points / features
 *   badges?: string[],         // small label badges (e.g., "24/7", "Govt", "Free trial")
 *   metrics?: { label: string, value: string }[], // small KPI pills
 *   featured?: boolean,        // whether to show a ribbon
 *   href?: string,             // optional custom href (default /services/<slug>)
 * }
 */
function FeatureCard({
  slug,
  service,
  index,
}: {
  slug: string;
  service: any;
  index: number;
}) {
  const Icon = service.icon ?? (() => null);
  const [saved, setSaved] = useState(false);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  // accessible href fallback
  const href = service.href ?? `/services/${slug}`;

  // Points: try service.points array; fallback to splitting summary into bullets
  const points: string[] =
    service.points?.slice(0, 3) ||
    (service.summary
      ? service.summary
          .split(/[\.\n]/)
          .filter(Boolean)
          .slice(0, 3)
      : []);

  return (
    <Link
      href={href}
      className="block h-full group focus:outline-none"
      aria-label={`${service.title} — ${
        service.summary ? truncate(service.summary, 140) : ""
      }`}
    >
      <Card
        className="glass-card h-full flex flex-col relative overflow-hidden"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {/* Corner/Featured ribbon */}
        {service.featured && (
          <div
            aria-hidden
            className="absolute top-4 left-0 -translate-x-1/2 px-2 py-1 rounded-full text-[12px] font-semibold uppercase tracking-wider bg-gradient-to-r from-yellow-300 to-amber-400 text-slate-900 shadow-sm"
            style={{ transform: "translateX(-20%) rotate(-15deg)" }}
          >
            Featured
          </div>
        )}

        {/* Top row: icon, badges, save */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Icon circle (gradient) */}
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg"
              style={{
                background:
                  service.accentGradient ??
                  "linear-gradient(135deg,#06b6d4,#4f46e5)",
                boxShadow: "0 6px 18px rgba(15,23,42,0.12)",
              }}
            >
              <Icon className="w-6 h-6 text-white" aria-hidden />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight text-slate-900">
                {service.title}
              </h3>
              <div className="flex gap-2 mt-1 flex-wrap">
                {(service.badges ?? []).slice(0, 2).map((b: string) => (
                  <span
                    key={b}
                    className="text-[11px] uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-semibold"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Save button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSaved((s) => !s);
              // TODO: hook analytics or persistence here
            }}
            aria-pressed={saved}
            aria-label={saved ? "Saved" : "Save service"}
            className="ml-auto p-2 rounded-md bg-white/90 text-slate-900 hover:bg-white shadow-sm focus:ring-2 focus:ring-primary"
            title={saved ? "Saved" : "Save"}
          >
            <Bookmark className={`w-4 h-4 ${saved ? "text-primary" : ""}`} />
          </button>
        </div>

        {/* Body: bullets + metric row */}
        <div className="mt-4 flex-1">
          {/* bullet points (progressive disclosure) */}
          {points && points.length > 0 ? (
            <ul className="space-y-2 text-md text-slate-700 mb-4 list-inside">
              {points.slice(0, 3).map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <Star className="w-4 h-4 mt-1 text-primary/90 flex-shrink-0" />
                  <span className="leading-snug normal-case">{p.trim()}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-700 mb-4 normal-case">
              {truncate(service.summary, 140)}
            </p>
          )}

          {/* Metrics / micro copy */}
          <div className="flex flex-wrap gap-2">
            {(service.metrics ?? []).slice(0, 3).map((m: any, idx: number) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-semibold"
                aria-hidden
              >
                <span className="text-sm text-slate-600">{m.label}</span>
                <span className="text-md">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA area */}
        <div className="mt-6 flex items-center justify-between gap-4">
          {/* Learn more indicator (card itself is link) */}
          <span className="inline-flex items-center gap-3">
            <span className="text-[12px] font-bold uppercase tracking-widest text-slate-700">
              Learn More
            </span>
            <ArrowRight className="w-4 h-4 text-slate-700 group-hover:translate-x-1 transition-transform duration-200" />
          </span>

          {/* Secondary actions as buttons (NOT links) */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.preventDefault(); // prevent parent Link navigation
                e.stopPropagation();
                window.location.href = `/services/${slug}/demo`;
              }}
              className="text-md text-primary underline underline-offset-2"
            >
              Request Demo
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = `/services/${slug}`;
              }}
              className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-md font-semibold"
            >
              Open
            </button>
          </div>
        </div>
      </Card>
    </Link>
  );
}

/* Utility used in FeatureCard (small helper) */
function hrefFallback(slug: string) {
  return `/services/${slug}`;
}

/* ---------- Main enhanced Features component ---------- */
export const Features = ({
  heading = (
    <>
      Why Choose <span className="text-primary">TenderLink</span>
    </>
  ),
  subheading = "Everything you need to find, bid, and win government and private tenders",
  className = "",
}: FeaturesProps) => {
  // Defensive: ensure servicesData is an object map
  const servicesEntries = Object.entries(servicesData ?? {});

  return (
    <section
      id="features-services"
      className={`px-6 py-24 bg-surface border-b border-primary-10 ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary uppercase tracking-tight">
            {heading}
          </h2>

          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            {subheading}
          </p>

          <div className="w-16 h-1 bg-primary-10 mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesEntries.map(([slug, service], index) => (
            <FeatureCard
              key={slug}
              slug={slug}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
