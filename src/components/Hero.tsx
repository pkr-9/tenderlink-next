// app/components/Hero.tsx
"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-primary overflow-hidden py-8"
      aria-label="Hero section"
    >
      {/* Soft color accents (reduced size + opacity) */}
      <div className="absolute top-[-6rem] left-1/4 w-72 h-72 bg-primary-dark rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-[-6rem] right-1/4 w-72 h-72 bg-primary-dark rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <div className="space-y-6 text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight text-white">
              Find & Win
              <br />
              <span className="text-white/85">
                Government, Private & NGO
              </span>{" "}
              <span className="relative inline-block">
                <span>Tenders</span>
                <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-white/85 max-w-xl mx-auto lg:mx-0 normal-case">
              Empowering Indian enterprises with AI-matched opportunities,
              real-time intelligence, and elite bid consultancy.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#pricing"
                className="px-6 py-3 text-base sm:text-lg md:text-xl font-semibold rounded-xl bg-white text-primary shadow-sm motion-safe:transform motion-safe:transition motion-safe:duration-200 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-white/20"
                aria-label="Start 14 day free trial"
              >
                Start 14-Day Free Trial
              </a>

              <a
                href="#contact"
                className="px-5 py-3 text-base sm:text-lg md:text-xl font-semibold border rounded-xl border-white/20 text-white/90 bg-white/5 hover:bg-white/8 transition"
                aria-label="Request a callback"
              >
                Request Callback
              </a>
            </div>
          </div>

          {/* RIGHT — Dashboard Mock Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-surface/90 border border-primary-10 rounded-xl shadow-sm p-3 sm:p-4 md:p-6 max-w-2xl w-full">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src="/images/dashboard-mock.png"
                  alt="TenderLink Dashboard Preview"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
