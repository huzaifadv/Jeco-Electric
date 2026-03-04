import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Users, ShieldCheck, Wrench, Award, Heart, Target } from "lucide-react";

const teamMembers = [
  { name: "Stephen", role: "Contractor", image: "/images/team-stephen.png" },
  { name: "LeeAnn", role: "Office Manager", image: "/images/team-leeann.png" },
  { name: "Sara", role: "Receptionist", image: "/images/team-sara.png" },
  { name: "Carl", role: "Team Member", image: "/images/team-carl.png" },
  { name: "Murf", role: "Team Member", image: "/images/team-murf.png" },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            About <span className="text-accent">Bright Light Electric</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Prioritizing your satisfaction since 2017 — serving Sand Springs, Tulsa, and surrounding areas.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/electrician-hero.jpg"
                alt="Bright Light Electric team at work"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-3xl font-extrabold text-foreground">
                Our <span className="text-accent">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We founded Bright Light Electric out of a pure passion for people. Our goals, our ambitions, our inspirations, all come together to form a truly amazing company that all of us are proud to be a part of.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since opening back in 2017, we have become masters at our craft. We go above and beyond your requests to keep you coming back for more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through collaboration with industry-leading materials and the engagement of highly skilled and detail-oriented electricians, we consistently provide robust and enduring solutions for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Users, stat: "9+", label: "Years Experience" },
              { icon: ShieldCheck, stat: "100%", label: "Satisfaction" },
              { icon: Wrench, stat: "24/7", label: "Emergency Service" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 rounded-xl bg-card shadow-sm border border-border/50">
                <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-extrabold text-foreground">{item.stat}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
            Meet the <span className="text-accent">Team</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-40 h-52 mx-auto rounded-2xl overflow-hidden shadow-lg mb-4 border-4 border-accent/20 group-hover:border-accent/50 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-base font-bold text-foreground">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
            Our <span className="text-accent">Work</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/images/work-1.jpg",
              "/images/work-2.jpg",
              "/images/work-3.jpg",
              "/images/work-4.jpg",
              "/images/work-5.jpg",
              "/images/work-6.jpg",
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md aspect-[4/3]">
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center text-primary-foreground mb-12">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "Stephan & Carl are wonderful. He has helped out Kids Castle Daycare several times. Emergencies and Regular Maintenance. I would highly recommend him for any job. Fast, accurate, and dependable. A Sand Springs business with a great team!", name: "Sherry Newman" },
              { text: "Stephen came to my rescue after another business cancelled after having an appointment for several days. Amazing, professional, great ethics. Thank you!!!!!", name: "Danna Malone" },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                <p className="text-primary-foreground/80 text-sm leading-relaxed italic mb-4">"{t.text}"</p>
                <p className="text-accent font-bold text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
