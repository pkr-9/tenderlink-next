import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogData"; // Import from new data file

// SEO Metadata for the list page
export const metadata = {
  title: "TenderLink Blog | Insights & Bidding Tips",
  description:
    "Latest insights, tips, and updates on India's tender ecosystem, GeM, and MSME.",
};

export default function BlogListPage() {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            TenderLink <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, tips, and updates on India's tender ecosystem, GeM, and
            MSME.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="glass-card p-6 flex flex-col justify-between animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <span className="text-sm font-medium text-primary">
                  {post.category}
                </span>
                <h2 className="text-xl font-heading font-semibold my-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
                <Button asChild variant="ghost" size="sm">
                  {/* UPDATE: Use next/link instead of react-router-dom */}
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
