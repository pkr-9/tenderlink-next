import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogData";

// 1. GENERATE STATIC PARAMS (SEO Magic)
// Pre-renders every blog post as a static HTML file at build time.
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. DYNAMIC METADATA
// Sets the title tag to the specific blog post title
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | TenderLink Blog`,
    description: post.excerpt,
  };
}

// 3. PAGE COMPONENT
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up">
            {/* Post Header */}
            <div>
              <span className="text-sm font-medium text-primary">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold my-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>by {post.author || "Admin"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>

            {/* Post Body - Rendering HTML content safely */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>

          {/* Sidebar CTA Card (Unchanged logic, just Next.js Link updates) */}
          <div
            className="lg:col-span-1 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Card className="glass-card p-6 sticky top-28">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Never miss a tender
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Get AI-matched tenders sent straight to your inbox with our
                14-day free trial.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 shadow-glow mb-3"
              >
                <Link href="/#pricing">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/#contact">
                  <Mail className="h-4 w-4 mr-2" /> Contact Sales
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
