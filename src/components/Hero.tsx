"use client";

import { Phone, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      // Primary Background (Navy Blue): #1F1E5E
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#1F1E5E]"
    >
      {/* Decorative Background - Carbon Fibre Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      {/* Decorative Corner Accents (Glows) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1A184D] rounded-full blur-[150px] opacity-60 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1A184D] rounded-full blur-[150px] opacity-60 mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 animate-slide-up">
          {/* <div className="inline-block">
            <span className="px-6 py-2 border border-white/20 bg-[#1A184D]/50 backdrop-blur-sm text-[11px] font-heading font-bold uppercase tracking-[0.3em] text-white/90 shadow-lg">
              India's Premier Procurement Intelligence
            </span>
          </div> */}

          {/* Main Headline - Inline Serif Style */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] uppercase tracking-tight text-white drop-shadow-xl">
            Find & Win <br />
            <span className="text-white/80">Government</span>{" "}
            <span className="relative inline-block">
              Tenders
              {/* Underline Accent */}
              <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
            Empowering Indian enterprises with AI-matched opportunities,
            real-time intelligence, and elite bid consultancy.
          </p>

          {/* Contact Strip - Styled for White Background */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-10 border border-[#1F1E5E]/10 shadow-lg corner-accent">
              <div className="flex items-center gap-5">
                <div className="p-3 border border-primary-foreground/20">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex flex-col text-white/70">
                  <span className="text-[9px] uppercase tracking-widest font-bold mb-1">
                    Priority Line
                  </span>
                  <span className="text-lg font-heading font-bold">
                    +91-7774 911330
                  </span>
                </div>
              </div>
              <div className="hidden md:block w-px h-10 bg-[#1F1E5E]/10" />

              <div className="flex items-center gap-5">
                <div className="p-3 border border-primary-foreground/20">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex flex-col text-white/70">
                  <span className="text-[9px] uppercase tracking-widest font-bold mb-1">
                    Direct Inquiry
                  </span>
                  <span className="text-lg font-heading font-bold">
                    Contact@tenderinfo.in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
