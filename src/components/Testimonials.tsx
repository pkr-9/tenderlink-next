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

  return (
    <section className="px-6 py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl border-x border-[#1F1E5E]/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#1F1E5E] uppercase tracking-tighter">
            What Our <span className="text-[#1F1E5E]/70">Clients Say</span>
          </h2>
          <p className="text-lg text-[#1F1E5E]/60 max-w-2xl mx-auto font-light">
            Join thousands of satisfied businesses winning tenders with
            TenderLink.
          </p>
          <div className="w-16 h-1 bg-[#1F1E5E]/20 mx-auto mt-8" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group bg-white border border-[#1F1E5E]/10 p-8 hover:shadow-2xl hover:border-[#1F1E5E]/30 transition-all duration-500 rounded-none relative flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative Quote Icon (Watermark) */}
              <div className="absolute top-4 right-6 text-[#1F1E5E]/5 group-hover:text-[#1F1E5E]/10 transition-colors duration-500">
                <Quote className="h-16 w-16 rotate-180" />
              </div>

              {/* Rating Stars - Using Navy Blue for strict theme adherence */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#1F1E5E] text-[#1F1E5E]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#1F1E5E]/80 mb-8 italic font-serif text-lg leading-relaxed flex-grow relative z-10">
                "{testimonial.text}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#1F1E5E]/10 mt-auto">
                <div className="h-12 w-12 rounded-full bg-[#1F1E5E]/5 flex items-center justify-center border border-[#1F1E5E]/10 text-2xl grayscale group-hover:grayscale-0 transition-all duration-500">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-heading font-bold text-[#1F1E5E] uppercase tracking-wide text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[#1F1E5E]/60 font-light tracking-wider uppercase">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
