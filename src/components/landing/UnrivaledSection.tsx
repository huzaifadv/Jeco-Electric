import { Smile, Award, HomeIcon } from "lucide-react";

const points = [
  {
    icon: Smile,
    title: "Friendly & Empathetic",
    description:
      "We believe it is our responsibility to reduce your stress by being courteous and friendly, and fixing your problem as soon as possible.",
  },
  {
    icon: Award,
    title: "Skilled Professionals",
    description:
      "Every single member of our company is broadly experienced and fully certified. Our electricians keep their knowledge updated regarding new technologies.",
  },
  {
    icon: HomeIcon,
    title: "Respect for Your Property",
    description:
      "Whether our Electricians come to your home or office, we respect your property. After doing our job, we clean the space and leave no mess behind.",
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
          What Makes Our Electricians{" "}
          <span className="text-accent">Unrivaled</span>
        </h2>
        <p className="text-center text-primary-foreground/50 mb-14 max-w-lg mx-auto">
          We go above and beyond on every job
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
