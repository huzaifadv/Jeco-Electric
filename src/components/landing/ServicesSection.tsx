import { Home, HardHat, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    image: "/images/electrical-panel.jpg",
    title: "Residential Service",
    description:
      "Whether it's a faulty plug, tripping breaker, new light or panel replacement — call us today and let us know how we can help.",
  },
  {
    icon: ShieldCheck,
    image: "/images/electrician-work.jpg",
    title: "Free Estimates",
    description:
      "We always offer free estimates and stick to them. Over 95% of our jobs are billed at the estimate cost.",
  },
  {
    icon: HardHat,
    image: "/images/new-construction.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 -mt-12 mb-4 relative z-10 border-4 border-card">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
