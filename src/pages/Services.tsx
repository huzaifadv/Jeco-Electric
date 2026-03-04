import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { LeadForm } from "@/components/landing/LeadForm";
import {
  Home, Building, Factory, Zap, Hammer, Droplets, Ship, HardHat,
  FileCheck, Plug, Gauge, Lightbulb, Search, Building as Building2
} from "lucide-react";

const serviceCategories = [
  {
    icon: Home,
    title: "Residential",
    description: "Complete residential electrical services from installations to repairs. We prioritize the safety and efficiency of your home's electrical systems with top-notch materials and expert techniques.",
  },
  {
    icon: Building,
    title: "Commercial",
    description: "Tailored solutions for commercial spaces — from efficient electrical installations to strategic system upgrades. We prioritize safety, compliance, and energy efficiency for your business.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Robust power distribution systems and advanced automation solutions for manufacturing environments. We handle complex electrical challenges to keep your operations running seamlessly.",
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description: "Available 24/7 to address unexpected outages and urgent electrical issues. Our responsive team troubleshoots and resolves problems promptly, minimizing downtime.",
  },
  {
    icon: Hammer,
    title: "Remodeling",
    description: "Modern lighting installations, smart home upgrades, and complete electrical solutions for your renovation projects. Every component is seamlessly integrated.",
  },
  {
    icon: HardHat,
    title: "New Construction",
    description: "From meticulous wiring to state-of-the-art lighting installations, we equip new construction projects with reliable, efficient, and code-compliant electrical systems.",
  },
];

const detailedServices = [
  { icon: FileCheck, title: "Electrical Code Compliance", description: "Our experts strictly abide by all national and local electrical codes. Whether changing a light bulb or fixing a circuit breaker, our trained technicians always do the job by the book." },
  { icon: Plug, title: "Outlet Installation", description: "Need an outlet for your new TV location or a new USB outlet? We're fully capable of installing, repairing and replacing electrical outlets." },
  { icon: Gauge, title: "Upgrading Electrical Panels", description: "Electrical panels are the heart of your electrical system. Upgrading or changing them demands the hands of a skilled electrician — we provide that whenever you need." },
  { icon: Lightbulb, title: "Lighting Installation", description: "Task lighting, accent lighting, overhead, fluorescent, outdoor security, and decorative lighting — our electricians have years of experience for all installations." },
  { icon: Search, title: "Electrical Inspection & Repair", description: "We conduct on-demand inspections of your electrical systems. From simple fuse replacement to complex rewiring projects, our trained technicians handle it all." },
  { icon: Building2, title: "New Construction Electrical", description: "Electrical wiring and panel installation for newly constructed homes or offices. We can fulfill all of your new building's electrical requirements." },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Through industry-leading materials and highly skilled electricians, we consistently provide robust and enduring electrical solutions.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-16">
            {serviceCategories.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={index % 2 === 0 ? "/images/electrician-work.jpg" : "/images/electrical-panel.jpg"}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-4">
            All <span className="text-accent">Services</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Contact us if you encounter any of the following electrical issues
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
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

export default Services;
