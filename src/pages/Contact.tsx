import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { LeadForm } from "@/components/landing/LeadForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Ready to get started? Reach out for a free estimate or give us a call.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, label: "Phone", value: "(918) 245-7555", href: "tel:9182457555" },
              { icon: Mail, label: "Email", value: "info@brightlightelectric.com", href: "mailto:info@brightlightelectric.com" },
              { icon: MapPin, label: "Address", value: "1031 W 4th St, Sand Springs, OK 74063", href: undefined },
              { icon: Clock, label: "Hours", value: "Mon-Fri: 7AM - 6PM", href: undefined },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 rounded-2xl bg-secondary border border-border/50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">{item.label}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-accent hover:underline break-all">{item.value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <LeadForm />

      <Footer />
    </main>
  );
};

export default Contact;
