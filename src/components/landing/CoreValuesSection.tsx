import { Heart, Scale, Trophy, Shield, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for People",
    description:
      "We founded Bright Light Electric out of a pure passion for people. Every project reflects our care for our customers and community.",
  },
  {
    icon: Scale,
    title: "Commitment to Quality",
    description:
      "Since 2017, our unwavering commitment to quality has been central to our operations. We use only industry-leading materials.",
  },
  {
    icon: Trophy,
    title: "Excellence in Service",
    description:
      "We are committed to delivering exceptional work and consistently pursuing excellence to foster enduring relationships.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We strictly abide by all national and local electrical codes. Safety is never compromised on any project we undertake.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description:
      "Prioritizing your satisfaction remains at the forefront of our mission. We go above and beyond to keep you coming back.",
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
          What drives us to deliver the best electrical solutions every time
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
