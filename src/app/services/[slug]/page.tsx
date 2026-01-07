import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, HelpCircle, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesData } from "@/data/servicesData";

// 1. GENERATE STATIC PARAMS (Crucial for SEO)
// This tells Next.js to pre-build these pages at build time.
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// 2. DYNAMIC METADATA (Crucial for SEO)
// This sets the <title> and <meta description> automatically for each service.
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // In Next.js 15+, params is a Promise. We await it to be safe.
  const { slug } = await params;
  const data = servicesData[slug as keyof typeof servicesData];

  if (!data) return { title: "Service Not Found" };

  return {
    title: `${data.title} | TenderLink Services`,
    description: data.summary,
  };
}

// 3. THE PAGE COMPONENT
export default async function ServiceDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  // Safe data lookup
  const data = servicesData[slug as keyof typeof servicesData];

  // If slug doesn't exist in data, show 404 page
  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className={`relative py-20 md:py-32 overflow-hidden ${
          data.heroImage || "bg-blue-600"
        }`}
      >
        {/* Note: Ensure data.heroImage contains valid Tailwind classes or add a fallback */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex p-4 rounded-full bg-background shadow-lg mb-6">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {data.description}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-glow"
              >
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {data.statistics && (
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto divide-x">
              {data.statistics.map((stat, i: number) => (
                <div key={i} className="text-center px-4">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pain Points Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Why do businesses need <br />
                <span className="gradient-text">{data.title}?</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                The tender process is complex and competitive. Without the right
                tools and support, businesses often face:
              </p>
              <ul className="space-y-4">
                {data.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-red-100 text-red-600">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <Card
                  key={i}
                  className="p-4 border-l-4 border-l-primary hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold mb-1 text-primary">
                    {feature.split(":")[0]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.split(":")[1]}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {data.requiredDocuments && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Required Documents
              </h2>
              <Card className="p-8 border-dashed border-2">
                <ul className="grid md:grid-cols-2 gap-4">
                  {data.requiredDocuments.map((doc: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-teal-500" />
                      <span className="text-foreground/80">{doc}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              A simple, transparent process to get you results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />
            {data.process.map((step, i) => (
              <div
                key={i}
                className="relative text-center bg-background p-4 rounded-xl"
              >
                <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center border-4 border-background shadow-lg mb-6 text-2xl font-bold text-primary">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {data.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background border rounded-lg mb-4 px-4"
              >
                <AccordionTrigger className="hover:no-underline font-medium">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="h-5 w-5 text-primary/60" />
                    {faq.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-primary text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-[1px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to optimize your procurement process?
              </h2>
              <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
                Get started with {data.title} today and experience the
                TenderLink advantage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-primary font-bold"
                >
                  <Link href="tel:+917774911330">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/20"
                >
                  <Link href="#contact">Request Callback</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
