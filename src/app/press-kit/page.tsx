// src/pages/PressKitPage.tsx

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Image as ImageIcon, Link } from "lucide-react";

const PressKitPage = () => {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Media & <span className="gradient-text">Press Kit</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For all media inquiries and to access our brand assets, please use
            the resources below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Media Contact */}
          <Card
            className="glass-card p-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Media Inquiries
            </h2>
            <p className="text-muted-foreground mb-6">
              For interviews, press releases, or other media-related questions,
              please contact our media team.
            </p>
            <Button asChild size="lg">
              <a href="mailto:info@tenderlink.tech?subject=Media Inquiry">
                <Mail className="h-4 w-4 mr-2" />
                Contact Media Team
              </a>
            </Button>
          </Card>

          {/* Brand Assets */}
          <Card
            className="glass-card p-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Brand Assets
            </h2>
            <p className="text-muted-foreground mb-6">
              Download our official logos and brand guidelines. Please do not
              alter our logos in any way.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex-1">
                <a href="/TenderLink-Logo-Pack.zip" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Logos (.zip)
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1">
                <Link to="#">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  View Guidelines
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PressKitPage;
