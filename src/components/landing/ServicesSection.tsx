import { Home, HardHat, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Service",
    description:
      "Whether it's a faulty plug, tripping breaker, new light or panel replacement — call us today and let us know how we can help.",
  },
  {
    icon: ShieldCheck,
    title: "Free Estimates",
    description:
      "We always offer free estimates and stick to them. Over 95% of our jobs are billed at the estimate cost.",
  },
  {
    icon: HardHat,
    title: "New Construction & Remodels",
    description:
      "Jaco Electric is your elite electrical contractor for all new construction and remodeling wiring.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Our <span className="text-accent">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Professional electrical solutions for every need
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card
              key={s.title}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card group hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors mb-6">
                  <s.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
