import { Users, ShieldCheck, Wrench } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          About <span className="text-accent">Jaco Electric</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Over 30 years of combined electrical experience
        </p>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            With over 30 years combined electrical experience, our Electricians are the most professional and trusted you will find. We respect your home and treat it like you would. We provide guaranteed satisfaction on all work completed by Jaco Electric.
          </p>
          <p>
            JACO Electric offers servicing, replacement, repair, and installation for all residential electrical needs. We proudly say that we have skilled, qualified and friendly staff. To us there is no job that is too small or too big. We are fully trained and committed to offering you a comprehensive range of electrical services.
          </p>
          <p>
            When we arrive for the service call, the first thing we do is conduct a comprehensive inspection and analysis of the problem. We provide our professional recommendation for a solution. Then our experienced experts will assist you in the evaluation of the choices you have and complete the job with precision.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {[
            { icon: Users, stat: "30+", label: "Years Combined Experience" },
            { icon: ShieldCheck, stat: "95%", label: "Jobs Billed at Estimate" },
            { icon: Wrench, stat: "100%", label: "Satisfaction Guaranteed" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center p-6 rounded-2xl bg-secondary"
            >
              <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-extrabold text-foreground">{item.stat}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
