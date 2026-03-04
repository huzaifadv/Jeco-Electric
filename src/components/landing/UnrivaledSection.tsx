import { Smile, Award, HomeIcon } from "lucide-react";

const points = [
  {
    icon: Smile,
    title: "Passion for People",
    description:
      "We founded Bright Light Electric out of a pure passion for people. Our goals and ambitions come together to form a truly amazing company.",
  },
  {
    icon: Award,
    title: "Masters at Our Craft",
    description:
      "Since 2017, we have become masters at our craft. We go above and beyond your requests to keep you coming back for more.",
  },
  {
    icon: HomeIcon,
    title: "Enduring Solutions",
    description:
      "Through industry-leading materials and highly skilled electricians, we consistently provide robust and enduring solutions for all.",
  },
];

export const UnrivaledSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/electrician-hero.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-4">
          Why Choose{" "}
          <span className="text-accent">Bright Light Electric</span>
        </h2>
        <p className="text-center text-primary-foreground/50 mb-14 max-w-lg mx-auto">
          Unwavering commitment to quality since 2017
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p) => (
            <div key={p.title} className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 mb-5">
                <p.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{p.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
