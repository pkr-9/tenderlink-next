import { pricingData } from "@/data/pricingData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Phone } from "lucide-react";

const PricingPage = () => {
  return (
    <section className="py-32 md:py-48">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Transparent <span className="gradient-text">Pricing Plans</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in the right tools for your business. All plans include 24/7
            access to our web portal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "border-2 border-primary shadow-xl scale-105 z-10"
                  : "border border-border bg-card/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-primary" />
              )}

              <div className="p-8">
                {plan.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 h-10">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    /{plan.period}
                  </span>
                </div>

                <Button
                  asChild
                  className={`w-full mb-8 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                  size="lg"
                >
                  <a href="/contact">Contact Sales</a>
                </Button>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground">
                    What's included:
                  </p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="mt-0.5 p-0.5 rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30">
                          <Check className="h-3 w-3" />
                        </div>
                      ) : (
                        <div className="mt-0.5 p-0.5 rounded-full bg-red-100 text-red-500 dark:bg-red-900/30">
                          <X className="h-3 w-3" />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground line-through decoration-muted-foreground/50"
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

        <div className="mt-20 text-center bg-muted/30 p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Need a Custom Enterprise Solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            For large organizations needing API access, white-label solutions,
            or multi-user accounts for 50+ members.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+917774911330">
              <Phone className="mr-2 h-4 w-4" /> Talk to an Expert
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
