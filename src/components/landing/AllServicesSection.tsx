import {
  FileCheck,
  Plug,
  Gauge,
  Lightbulb,
  Search,
  Building,
} from "lucide-react";

const allServices = [
  {
    icon: FileCheck,
    title: "Electrical Code Compliance",
    description:
      "Our experts strictly abide by all the national and local electrical codes. Whether changing a light bulb or fixing a circuit breaker, our trained technicians always do the job by the book.",
  },
  {
    icon: Plug,
    title: "Outlet Installation",
    description:
      "Need an outlet for your new TV location or a new USB outlet? JACO Electric is fully capable of installing, repairing and replacing electrical outlets.",
  },
  {
    icon: Gauge,
    title: "Upgrading Electrical Panels",
    description:
      "Electrical panels are the heart of your electrical system. Upgrading or changing them demands the hands of a skilled electrician — we provide that whenever you need.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description:
      "Task lighting, accent lighting, overhead, fluorescent, outdoor security, and decorative lighting — our electricians have years of experience for indoor and outdoor installations.",
  },
  {
    icon: Search,
    title: "Electrical Inspection & Repair",
    description:
      "We conduct on-demand inspections of your electrical systems. From simple fuse replacement to complex rewiring projects, our trained technicians handle it all.",
  },
  {
    icon: Building,
    title: "New Construction Electrical",
    description:
      "Electrical wiring and panel installation for newly constructed homes or offices. JACO Electric can fulfill all of your new building's electrical requirements.",
  },
];

export const AllServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Residential & Commercial{" "}
          <span className="text-accent">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Contact us if you encounter any of the following electrical issues in your home or office
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
