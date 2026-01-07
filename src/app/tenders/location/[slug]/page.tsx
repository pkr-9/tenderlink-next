import { notFound } from "next/navigation";
import Link from "next/link";
import { locations } from "@/data/locationsData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, TrendingUp, Building2, ArrowRight } from "lucide-react";

// 1. Generate pages for all locations at build time
export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

// 2. Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) return { title: "Location Not Found" };

  return {
    title: `Government Tenders in ${location.name} | Latest ${location.name} Tenders`,
    description: `Find ${location.tenderCount}+ active tenders in ${
      location.name
    }. View opportunities from ${location.topDepartments.join(", ")} and more.`,
  };
}

// 3. The Page Component
export default async function LocationPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-10 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <MapPin className="h-4 w-4" />
            <span className="font-semibold">{location.name} Region</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Latest Tenders in{" "}
            <span className="gradient-text">{location.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {location.description}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 glass-card text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold mb-1">
              {location.tenderCount}
            </div>
            <div className="text-sm text-muted-foreground">Active Tenders</div>
          </Card>

          <Card className="p-6 glass-card text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <Building2 className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold mb-1">{location.spending}</div>
            <div className="text-sm text-muted-foreground">
              Est. Project Value
            </div>
          </Card>

          <Card className="p-6 glass-card text-center">
            <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold mb-1">
              {location.topDepartments.length}+
            </div>
            <div className="text-sm text-muted-foreground">
              Major Departments
            </div>
          </Card>
        </div>
      </div>

      {/* Top Departments List */}
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Top Procuring Agencies in {location.name}
        </h2>
        <div className="space-y-4">
          {location.topDepartments.map((dept, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-background border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-medium">{dept}</span>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/#contact">
                  View Tenders <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gradient-primary text-white" asChild>
            <Link href="/#contact">Get {location.name} Alerts Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
