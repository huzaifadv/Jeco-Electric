import { Heart, Scale, Trophy, Shield, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Our electrical specialists are truthful and forthright. When we promise to do something, we make sure it happens.",
  },
  {
    icon: Scale,
    title: "Respect for Rules & Regulations",
    description:
      "We abide by all national and local ordinances, regulations, and laws pertinent to the electrical fraternity.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "All repairs, installations, and electrical system designs are stringently in line with the highest quality standards.",
  },
  {
    icon: Shield,
    title: "Reputation & Safety",
    description:
      "We always strive to operate a well-reputed, respectable, safe and clean business that reflects the highest standards.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Service",
    description:
      "Without you there is no JACO Electric! Our number one concern is your happiness and safety. We work with you to determine and accomplish your needs.",
  },
];

export const CoreValuesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Our Core <span className="text-accent">Values</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          We do our job with effectiveness, cleanliness, competence, courteousness, and convenience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`text-center p-8 rounded-2xl ${
                i === values.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              } bg-secondary`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-5">
                <v.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
