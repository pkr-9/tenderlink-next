import { glossary } from "@/data/glossaryData";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Procurement Glossary | TenderLink Resources",
  description:
    "Understand common tender terms like EMD, BoQ, DSC, and L1 with our comprehensive procurement glossary.",
};

export default function GlossaryPage() {
  return (
    <div className="min-h-screen py-24 md:py-48 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Procurement <span className="gradient-text">Glossary</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Deciphering the complex language of government tenders.
          </p>
        </div>

        <div
          className="grid gap-6 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          {glossary.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-primary mb-2">
                {item.term}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.definition}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
