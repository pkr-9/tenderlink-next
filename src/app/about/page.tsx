// src/pages/AboutUsPage.tsx

import { Building, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutUsPage = () => {
  return (
    <section className="py-32 md:py-48">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">TenderLink</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a team of procurement experts and technologists dedicated to
            simplifying India's tender ecosystem.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card
            className="glass-card p-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-start gap-4">
              <div className="icon-badge">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-2">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To empower businesses of all sizes to find, bid, and win
                  tenders with confidence. We level the playing field by
                  providing powerful tools, real-time data, and expert support.
                </p>
              </div>
            </div>
          </Card>
          <Card
            className="glass-card p-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-start gap-4">
              <div className="icon-badge">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-2">
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  To be India's most trusted and intelligent tender information
                  platform, creating a transparent and efficient procurement
                  landscape for everyone.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Meet the Team Section */}
        <div
          className="text-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of industry veterans and tech innovators.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Placeholder for team members [cite: 195] */}
          {[
            { name: "John Doe", title: "CEO & Founder", emoji: "👨‍💼" },
            { name: "Jane Smith", title: "Head of Technology", emoji: "👩‍💻" },
            { name: "Raj Patel", title: "Procurement Expert", emoji: "👨‍🔧" },
            { name: "Priya Kaur", title: "Client Relations", emoji: "👩‍💼" },
          ].map((member, index) => (
            <Card
              key={index}
              className="glass-card p-4 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="text-5xl mb-3">{member.emoji}</div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
