import { Lightbulb, Fan, UtensilsCrossed } from "lucide-react";

const items = [
  {
    icon: Lightbulb,
    title: "Recessed Lighting Install",
    description: "Modern recessed lighting to transform any room in your home.",
  },
  {
    icon: Fan,
    title: "Ceiling Fan Replacement",
    description: "Expert installation and replacement of ceiling fans for comfort and style.",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen & Space Updates",
    description: "Complete electrical updates to modernize your kitchen and living spaces.",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Update Your <span className="text-accent">Space</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
          Popular projects our customers love
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-5">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
