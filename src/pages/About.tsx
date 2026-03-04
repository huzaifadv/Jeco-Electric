import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Users, ShieldCheck, Wrench, Award, Heart, Target } from "lucide-react";

const teamMembers = [
  { name: "Tyson Jacobs", role: "Owner / Master Electrician", image: "/images/electrician-hero.jpg" },
  { name: "Team Member", role: "Lead Electrician", image: "/images/electrician-work.jpg" },
  { name: "Team Member", role: "Service Technician", image: "/images/electrical-panel.jpg" },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            About <span className="text-accent">Jaco Electric</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Leaders in quality electrical service and construction — serving the Tulsa metro area with pride since 1994.
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
                alt="Jaco Electric professional electrician at work"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-3xl font-extrabold text-foreground">
                Our <span className="text-accent">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                With over 30 years combined electrical experience, our Electricians are the most professional and trusted you will find. We respect your home and treat it like you would.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                JACO Electric offers servicing, replacement, repair, and installation for all residential electrical needs. We have skilled, qualified and friendly staff. To us there is no job that is too small or too big.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When we arrive for the service call, the first thing we do is conduct a comprehensive inspection and analysis of the problem. We provide our professional recommendation, then complete the job with precision.
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
              { icon: Users, stat: "30+", label: "Years Experience" },
              { icon: ShieldCheck, stat: "95%", label: "Billed at Estimate" },
              { icon: Wrench, stat: "100%", label: "Satisfaction" },
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

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
            Our <span className="text-accent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Quality First", desc: "We use industry-leading materials and techniques to deliver work that stands the test of time." },
              { icon: Heart, title: "Customer Care", desc: "Your satisfaction is our #1 priority. We treat your home with the same respect as our own." },
              { icon: Target, title: "Precision", desc: "Every job gets a thorough inspection and our professional recommendation before we begin." },
            ].map((v) => (
              <div key={v.title} className="text-center p-8 rounded-2xl bg-secondary">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4">
                  <v.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
            Meet the <span className="text-accent">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg mb-4 border-4 border-accent/20 group-hover:border-accent/50 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "Jaco Electric did an amazing job on our home rewiring. Professional, clean, and on time. Highly recommend!", name: "Sarah M." },
              { text: "Best electrician in the Tulsa area. Fair pricing, great communication, and quality work every time.", name: "Mike R." },
              { text: "They showed up when they said they would and finished the job perfectly. No surprises on the bill either!", name: "Jennifer K." },
              { text: "We've used Jaco Electric for multiple projects now. Always reliable, always professional. Our go-to electrician!", name: "David T." },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-secondary border border-border/50">
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">"{t.text}"</p>
                <p className="text-foreground font-bold text-sm">— {t.name}</p>
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
