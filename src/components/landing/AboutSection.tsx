import { Users, ShieldCheck, Wrench } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-14">
          About <span className="text-accent">Jaco Electric</span>
        </h2>

        {/* Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/electrician-hero.jpg"
              alt="Jaco Electric professional electrician"
              className="w-full h-72 lg:h-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              With over 30 years combined electrical experience, our Electricians are the most professional and trusted you will find. We respect your home and treat it like you would.
            </p>
            <p>
              JACO Electric offers servicing, replacement, repair, and installation for all residential electrical needs. We have skilled, qualified and friendly staff. To us there is no job that is too small or too big.
            </p>
            <p>
              When we arrive for the service call, the first thing we do is conduct a comprehensive inspection and analysis of the problem. We provide our professional recommendation, then complete the job with precision.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid md:grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { icon: Users, stat: "30+", label: "Years Experience" },
            { icon: ShieldCheck, stat: "95%", label: "Billed at Estimate" },
            { icon: Wrench, stat: "100%", label: "Satisfaction" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center p-5 rounded-xl bg-card shadow-sm border border-border/50"
            >
              <item.icon className="h-7 w-7 text-accent mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-foreground">{item.stat}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
