import { Home, HardHat, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Service",
    description: "Repairs, breakers, outlets, lighting, and whole-home rewiring.",
  },
  {
    icon: HardHat,
    title: "New Construction & Remodels",
    description: "Full electrical wiring for new builds and renovation projects.",
  },
  {
    icon: ShieldCheck,
    title: "Panel Upgrades & Inspections",
    description: "Code compliance, safety inspections, and panel replacements.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12">
          What We <span className="text-accent">Do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card
              key={s.title}
              className="border-none shadow-md hover:shadow-lg transition-shadow bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 mb-5">
                  <s.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
