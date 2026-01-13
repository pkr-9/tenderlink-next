// src/app/services/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { servicesData } from "@/data/servicesData";
import { Star, Search, Phone, Download } from "lucide-react";

/**
 * Services page
 *
 * - Client-side page so we can manage search + filters + interactions.
 * - Reuses existing components where appropriate (Pricing, Testimonials, FAQ, Contact).
 *
 * Make sure servicesData contains fields used below:
 * - title, summary, badges, featured, icon, description, process[], statistics[], requiredDocuments[]
 *
 * Styling uses Tailwind utilities consistent with repo.
 */

/* --------------------- Helper types --------------------- */
type Service = any;

/* --------------------- KPI HERO --------------------- */
function KPIHero() {
  // derive a couple of KPIs from servicesData (fallback hardcoded)
  const totalServices = Object.keys(servicesData ?? {}).length || 0;
  const dailyAlerts = "50,000+";
  const accuracy = "99.8%";

  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Our <span className="gradient-text">Services</span>
        </h1>

        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-6">
          A complete suite to discover, prepare, and submit tenders — coupled
          with expert support and compliance checks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-primary/10">
            <span className="font-semibold">{totalServices}</span>
            <span className="text-md text-muted-foreground">Services</span>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-primary/10">
            <span className="font-semibold">{dailyAlerts}</span>
            <span className="text-md text-muted-foreground">Daily Alerts</span>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-primary/10">
            <span className="font-semibold">{accuracy}</span>
            <span className="text-md text-muted-foreground">
              Match Accuracy
            </span>
          </div>

          <Link href="/pricing" className="inline-block">
            <button className="ml-0 sm:ml-6 px-6 py-3 rounded-lg bg-gradient-primary text-white font-semibold">
              See Plans
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------- Filters toolbar (client) --------------------- */
function FiltersToolbar({
  onSearch,
  onTagToggle,
  activeTags,
  allTags,
}: {
  onSearch: (s: string) => void;
  onTagToggle: (t: string) => void;
  activeTags: string[];
  allTags: string[];
}) {
  const [q, setQ] = useState("");

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="flex items-center gap-2 flex-1">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder="Search services (e.g., alerts, AI matching, documentation)"
            className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary placeholder:text-md"
            aria-label="Search services"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              setQ("");
              onSearch("");
            }}
            className="px-4 py-2 rounded-lg border"
          >
            Clear
          </button>

          <Link href="/contact" className="inline-block">
            <button className="px-4 py-2 rounded-lg bg-primary text-white">
              Talk to an Expert
            </button>
          </Link>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {allTags.map((t) => {
          const active = activeTags.includes(t);
          return (
            <button
              key={t}
              onClick={() => onTagToggle(t)}
              className={`px-3 py-1 rounded-full text-md ${
                active
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground border"
              }`}
              aria-pressed={active}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------- Service Card (compact) --------------------- */

function ServiceCard({ slug, service }: { slug: string; service: any }) {
  const Icon = service.icon ?? (() => null);

  return (
    <article className="group h-full">
      <div className="glass-card h-full flex flex-col p-6 relative hover:shadow-xl transition">
        {/* Invisible link overlay (entire card clickable) */}
        <Link
          href={service.href ?? `/services/${slug}`}
          className="absolute inset-0 z-10"
          aria-label={`Open ${service.title}`}
        />

        {/* Featured Star Icon (top-right) */}
        {service.featured && (
          <div className="absolute top-4 right-4 z-20">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
          </div>
        )}

        {/* Header */}
        <div className="flex items-center gap-4 mb-4 relative z-20">
          <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-heading font-bold">{service.title}</h3>
        </div>

        {/* Summary */}
        <p className="text-md text-muted-foreground flex-1 relative z-20">
          {service.summary}
        </p>

        {/* Learn more text */}
        <div className="mt-4 text-sky-700 font-semibold text-md relative z-20">
          Learn More →
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex justify-between items-center relative z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = `/services/${slug}/demo`;
            }}
            className="text-md text-sky-700 underline"
          >
            Request Demo
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = `/services/${slug}`;
            }}
            className="px-3 py-1 rounded-full bg-sky-600 text-white text-md"
          >
            Open
          </button>
        </div>
      </div>
    </article>
  );
}

/* --------------------- Spotlight deep-dive --------------------- */
function SpotlightSection({ slug, s }: { slug: string; s: Service }) {
  const Icon = s.icon ?? (() => null);
  const stats = s.statistics ?? [];

  return (
    <section className="py-12 bg-surface border-t">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-heading font-bold">{s.title}</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              {s.description}
            </p>

            {s.process && (
              <>
                <h4 className="font-semibold text-lg mb-2">How it works</h4>
                <ol className="list-decimal pl-5 space-y-2 text-lg text-slate-700 mb-4">
                  {s.process.map((p: any, i: number) => (
                    <li key={i}>
                      <strong>{p.title}:</strong> {p.desc}
                    </li>
                  ))}
                </ol>
              </>
            )}

            <div className="flex gap-3 mt-4">
              <Link
                href={`/services/${slug}`}
                className="inline-block px-5 py-2 bg-primary text-white border border-primary rounded-xl"
              >
                Learn More
              </Link>

              <Link
                href={`/services/${slug}/demo`}
                className="inline-block px-5 py-2 border rounded-xl text-primary"
              >
                Request Demo
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3">
              {stats.slice(0, 3).map((st: any, idx: number) => (
                <div
                  key={idx}
                  className="p-4 bg-white border rounded-xl flex flex-col items-center justify-center text-center"
                >
                  <div className="text-lg font-bold">{st.value}</div>
                  <div className="text-md text-muted-foreground">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {s.requiredDocuments && (
              <div className="mt-6">
                <h5 className="font-semibold text-lg mb-2">
                  Required documents
                </h5>
                <ul className="list-disc pl-5 text-lg text-slate-700">
                  {s.requiredDocuments.map((d: string, i: number) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------- Case studies (static placeholders) --------------------- */
function CaseStudiesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-6xl text-center mb-8">
        <h2 className="text-3xl font-heading font-bold">
          Selected Case Studies
        </h2>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Real outcomes from our clients.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold text-lg">SME: Reduced bidding time</h4>
            <p className="text-md text-muted-foreground">
              Saved 60% time in tender discovery; won first contract within 45
              days.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold text-lg">
              Enterprise: Increased hit-rate
            </h4>
            <p className="text-md text-muted-foreground">
              Improved bid success from 6% → 18% through AI matching.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold text-lg">
              Govt Contractor: Compliance
            </h4>
            <p className="text-md text-muted-foreground">
              Automated document checks reduced rejections by 45%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------- Sticky sidebar (resources + CTA) --------------------- */
function StickySidebar() {
  return (
    <div className="sticky top-24 space-y-4">
      <div className="p-6 bg-primary text-white rounded-xl shadow-glow">
        <h4 className="font-heading font-bold mb-2">Need help deciding?</h4>
        <p className="text-md mb-4">
          Talk to our tender experts for a free account review.
        </p>
        <a
          href="tel:+917774911330"
          className="inline-block px-4 py-2 bg-white text-primary rounded-md font-semibold"
        >
          <Phone className="inline-block w-4 h-4 mr-2" /> Call Now
        </a>
      </div>

      <div className="p-4 border rounded-lg">
        <h5 className="font-semibold mb-2">Popular resources</h5>
        <ul className="text-md space-y-2">
          <li>
            <Link href="/resources/glossary" className="text-primary underline">
              Procurement Glossary
            </Link>
          </li>
          <li>
            <a
              href="/TenderLink-Checklist.pdf"
              className="text-primary underline"
            >
              <Download className="inline w-4 h-4 mr-1" /> Bid Preparation
              Checklist (PDF)
            </a>
          </li>
          <li>
            <Link href="/pricing" className="text-primary underline">
              Compare Plans
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* --------------------- Main Services Page --------------------- */
export default function ServicesPage() {
  const entries = Object.entries(servicesData ?? {});

  // derive tags from servicesData (flattened)
  const allTagsSet = new Set<string>();
  entries.forEach(([_, s]) => {
    (s?.tags ?? []).forEach((t: string) => allTagsSet.add(t));
    // also include badges as tags optionally
    (s?.badges ?? []).forEach((b: string) => allTagsSet.add(b));
  });
  const allTags = Array.from(allTagsSet);

  // filter state
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  // Filter logic
  const filtered = useMemo(() => {
    let arr = entries.map(([slug, s]) => ({ slug, s }));

    if (query?.trim()) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(({ s }) => {
        return (
          (s.title ?? "").toLowerCase().includes(q) ||
          (s.summary ?? "").toLowerCase().includes(q) ||
          (s.description ?? "").toLowerCase().includes(q) ||
          (Object.values(s).join(" ") ?? "").toLowerCase().includes(q)
        );
      });
    }

    if (activeTags.length > 0) {
      arr = arr.filter(({ s }) => {
        const tags = new Set([...(s.tags ?? []), ...(s.badges ?? [])]);
        return activeTags.every((t) => tags.has(t));
      });
    }

    if (onlyFeatured) {
      arr = arr.filter(({ s }) => s?.featured ?? false);
    }

    return arr;
  }, [entries, query, activeTags, onlyFeatured]);

  // spotlight (2 featured or first two)
  const spotlightEntries =
    entries.filter(([, s]) => s.featured).slice(0, 2) || entries.slice(0, 2);

  // JSON-LD for ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: entries.map(([slug], i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://yourdomain.com/services/${slug}`,
    })),
  };

  function toggleTag(t: string) {
    setActiveTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  return (
    <div className="min-h-screen section">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <KPIHero />
      <TrustStrip title="Supporting India’s Government Tender & Procurement Infrastructure" />

      {/* Grid + Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* LEFT (main content) */}
            <div className="lg:col-span-3">
              <FiltersToolbar
                onSearch={(s) => setQuery(s)}
                onTagToggle={(t) => toggleTag(t)}
                activeTags={activeTags}
                allTags={allTags.length ? allTags : ["Alerts", "AI", "Docs"]}
              />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={onlyFeatured}
                      onChange={() => setOnlyFeatured((v) => !v)}
                    />
                    <span className="text-sm">Only featured</span>
                  </label>
                </div>

                <div className="text-sm text-muted-foreground">
                  Showing <strong>{filtered.length}</strong> results
                </div>
              </div>

              {/* Services grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map(({ slug, s }: any) => (
                  <ServiceCard key={slug} slug={slug} service={s} />
                ))}
              </div>
            </div>

            {/* RIGHT (sticky sidebar) */}
            <aside className="lg:col-span-1">
              <StickySidebar />
            </aside>
          </div>
        </div>
      </section>

      {/* Spotlight deep-dive */}
      {spotlightEntries.map(([slug, s]: any) => (
        <SpotlightSection key={slug} slug={slug} s={s} />
      ))}

      {/* Case studies */}
      <CaseStudiesSection />

      {/* Pricing snapshot */}
      <section className="py-12 bg-surface border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-6">
            Plans & Pricing
          </h2>
          <p className="text-muted-foreground text-lg text-center mb-8">
            Choose a plan to match your scale.
          </p>

          <Pricing />
        </div>
      </section>

      {/* Testimonials + FAQ + Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Testimonials />
          <div className="mt-12">
            <FAQ />
          </div>

          <div className="mt-12">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
}
