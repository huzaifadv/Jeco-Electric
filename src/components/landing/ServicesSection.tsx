import { Home, HardHat, ShieldCheck, Building, Factory, Zap, Ship, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Residential",
    description:
      "From meticulous installations to prompt repairs, we prioritize the safety and efficiency of your home's electrical systems.",
  },
  {
    icon: Building,
    title: "Commercial",
    description:
      "Tailored solutions to meet the unique demands of commercial spaces — safety, compliance, and energy efficiency.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Robust power distribution systems and advanced automation solutions for manufacturing and production environments.",
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
          We are committed to delivering exceptional work and consistently pursuing excellence in service
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

        <div className="text-center mt-10">
          <Link to="/services" className="text-accent font-bold hover:underline">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};
