import { howItWorksData } from "@/data/howItWorksData";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <section className="py-24 md:py-48">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            How <span className="gradient-text">TenderLink</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From discovery to delivery, our process is designed to be simple,
            transparent, and effective.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {howItWorksData.map((item, index) => (
            <div key={index} className="flex gap-6 mb-16 last:mb-0 group">
              {/* Number Column */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                {index !== howItWorksData.length - 1 && (
                  <div className="w-0.5 flex-grow bg-border mt-4 mb-2 group-hover:bg-primary/50 transition-colors" />
                )}
              </div>

              {/* Content Column */}
              <Card className="flex-1 p-8 glass-card hover:shadow-lg transition-all duration-300 -mt-2">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {item.description}
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {item.details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
