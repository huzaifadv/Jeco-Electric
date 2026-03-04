import {
  FileCheck,
  Plug,
  Gauge,
  Lightbulb,
  Ship,
  Droplets,
} from "lucide-react";

const allServices = [
  {
    icon: FileCheck,
    title: "Oil Field",
    description:
      "Specialized oil field electrical services tailored to meet the unique demands of the energy sector. Robust systems, troubleshooting, and maintenance.",
  },
  {
    icon: Ship,
    title: "Marine",
    description:
      "Comprehensive solutions for the unique electrical needs of the maritime industry — navigation systems, safety equipment, and more.",
  },
  {
    icon: Gauge,
    title: "Emergency Repairs",
    description:
      "Available 24/7 to address unexpected outages, faults, or other urgent issues. Swift troubleshooting with minimal downtime.",
  },
  {
    icon: Lightbulb,
    title: "Remodeling",
    description:
      "Modern lighting installations, smart home upgrades, and tailored electrical solutions for your renovation projects.",
  },
  {
    icon: Plug,
    title: "New Construction",
    description:
      "From meticulous wiring to state-of-the-art lighting installations — reliable, efficient, and code-compliant electrical systems.",
  },
  {
    icon: Droplets,
    title: "Free Estimates",
    description:
      "We always provide free estimates with no hidden fees. Get honest pricing from our skilled and experienced team.",
  },
];

export const AllServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          More{" "}
          <span className="text-accent">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Our diverse range of services encompasses commercial, residential, industrial, and specialized solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
