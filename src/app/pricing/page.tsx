import { pricingData } from "@/data/pricingData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Phone, Clock, TrendingUp, Shield } from "lucide-react";

const PricingPage = () => {
  return (
    <section className="py-32 md:py-48 bg-surface">
      <div className="container mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Transparent <span className="text-primary">Pricing Plans</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple pricing designed to help businesses win more tenders.
          </p>
        </div>

        {/* ===== Conversion Context Bar ===== */}
        <div className="max-w-5xl mx-auto mb-14 grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <Clock className="h-7 w-7 text-primary" />
            <p className="font-semibold">Save 20+ hours per week</p>
            <span className="text-sm text-muted-foreground">
              Automated tender discovery & filtering
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <TrendingUp className="h-7 w-7 text-primary" />
            <p className="font-semibold">Proven ROI Growth</p>
            <span className="text-sm text-muted-foreground">
              Win more bids with real-time insights
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Shield className="h-7 w-7 text-primary" />
            <p className="font-semibold">14-Day Free Trial</p>
            <span className="text-sm text-muted-foreground">
              No credit card required
            </span>
          </div>
        </div>

        {/* ===== Pricing Cards ===== */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card relative overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary shadow-xl scale-[1.05] z-10"
                  : "border border-border"
              }`}
            >
              {/* Top Accent Line for Popular */}
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              )}

              <div className="p-8">
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    /{plan.period}
                  </span>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className={`w-full mb-8 ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  <a href="/contact">
                    {plan.popular ? "Start Free Trial" : "Contact Sales"}
                  </a>
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground">
                    What’s included:
                  </p>

                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="mt-0.5 p-0.5 rounded-full bg-primary/15 text-primary">
                          <Check className="h-3 w-3" />
                        </div>
                      ) : (
                        <div className="mt-0.5 p-0.5 rounded-full bg-muted text-muted-foreground">
                          <X className="h-3 w-3" />
                        </div>
                      )}

                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground line-through"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* ===== Enterprise CTA ===== */}
        <div className="mt-20 text-center bg-primary text-white p-10 rounded-2xl max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            Need a Custom Enterprise Solution?
          </h3>
          <p className="text-white/80 mb-6">
            API access, white-label platforms, or multi-team deployments.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="text-primary"
            asChild
          >
            <a href="tel:+917774911330">
              <Phone className="mr-2 h-4 w-4" />
              Talk to an Expert
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
