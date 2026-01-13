"use client";

import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      image: "👨‍💼",
      rating: 5,
      text: "TenderLink transformed our business! We've won 5 government contracts in just 3 months. The AI matching is incredible.",
    },
    {
      name: "Priya Sharma",
      company: "Green Energy Co",
      image: "👩‍💼",
      rating: 5,
      text: "The bid support team is outstanding. They helped us navigate complex documentation and win our first ₹10 Cr tender.",
    },
    {
      name: "Amit Patel",
      company: "Construction Services",
      image: "👨‍🔧",
      rating: 5,
      text: "Real-time alerts ensure we never miss an opportunity. The platform is user-friendly and the support is excellent.",
    },
    {
      name: "Sunita Reddy",
      company: "Medical Supplies Ltd",
      image: "👩‍⚕️",
      rating: 5,
      text: "GeM registration was so smooth with TenderLink. Now we're regularly bidding on healthcare tenders with great success.",
    },
    {
      name: "Vikram Singh",
      company: "IT Services Group",
      image: "👨‍💻",
      rating: 5,
      text: "The analytics and insights help us focus on tenders we're likely to win. Our success rate has improved by 40%.",
    },
    {
      name: "Meera Gupta",
      company: "Educational Solutions",
      image: "👩‍🏫",
      rating: 5,
      text: "Excellent platform for finding education sector tenders. The documentation support saved us countless hours.",
    },
  ];

  /* ===== Same Monotonic Blue Sequence ===== */
  const cardThemes = [
    {
      border: "border-[#1F1E5E]/25",
      accent: "text-[#1F1E5E]",
      softBg: "bg-[#1F1E5E]/5",
      glow: "hover:shadow-[#1F1E5E]/20",
    },
    {
      border: "border-[#2F2FA2]/25",
      accent: "text-[#2F2FA2]",
      softBg: "bg-[#2F2FA2]/5",
      glow: "hover:shadow-[#2F2FA2]/20",
    },
    {
      border: "border-[#4F46E5]/25",
      accent: "text-[#4F46E5]",
      softBg: "bg-[#4F46E5]/5",
      glow: "hover:shadow-[#4F46E5]/20",
    },
    {
      border: "border-[#2563EB]/25",
      accent: "text-[#2563EB]",
      softBg: "bg-[#2563EB]/5",
      glow: "hover:shadow-[#2563EB]/20",
    },
  ];

  return (
    <section className="section px-6 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            What Our <span className="text-primary/70">Clients Say</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of businesses winning tenders with TenderLink.
          </p>
          <div className="w-16 h-1 bg-primary/20 mx-auto mt-6" />
        </div>

        {/* ===== Testimonials Grid ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const theme = cardThemes[index % cardThemes.length];

            return (
              <Card
                key={index}
                className={`
                  bg-surface border ${theme.border}
                  p-8 rounded-2xl
                  shadow-glow hover:shadow-xl
                  transition-all duration-300
                  flex flex-col relative
                  ${theme.glow}
                `}
              >
                {/* Quote watermark */}
                <div className={`absolute top-4 right-5 ${theme.accent}/10`}>
                  <Quote className="h-14 w-14 rotate-180" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 fill-current ${theme.accent}`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground text-lg italic leading-relaxed mb-6 flex-grow">
                  “{testimonial.text}”
                </p>

                {/* User */}
                <div className="flex items-center gap-4 pt-5 border-t border-primary/10">
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center text-xl ${theme.softBg} ${theme.accent}`}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <div className={`text-md font-bold ${theme.accent}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
