import { Shield, Star, DollarSign, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const badges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Star, label: "30+ Years Combined Experience" },
  { icon: DollarSign, label: "95% of Jobs Billed at Estimate" },
  { icon: CheckCircle, label: "Free Estimates, No Surprises" },
];

const testimonials = [
  {
    name: "Brian Palmer",
    text: "Jaco Electric did an outstanding job on our panel upgrade. Professional, on time, and fair pricing. Highly recommend!",
  },
  {
    name: "Linda Birchall",
    text: "They were fast, courteous, and cleaned up after themselves. Our new lighting looks amazing. Will definitely use again.",
  },
  {
    name: "Cheri Hutson",
    text: "Called with an emergency and they came out same day. Fixed the issue quickly and the price was exactly what they quoted. Five stars!",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12">
          Why Choose <span className="text-accent">Jaco Electric?</span>
        </h2>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center text-center gap-3 p-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                <b.icon className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm font-semibold text-foreground leading-snug">{b.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="border bg-secondary shadow-sm">
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <p className="text-sm font-bold text-foreground">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
