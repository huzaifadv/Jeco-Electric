import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { LeadForm } from "@/components/landing/LeadForm";
import {
  Home, Building, Factory, Zap, Hammer, Ship, HardHat, Droplets
} from "lucide-react";

const serviceCategories = [
  {
    icon: Home,
    title: "Residential",
    description: "Discover unparalleled residential electrical services with our expert team at Bright Light Electric. From meticulous installations to prompt repairs, we prioritize the safety and efficiency of your home's electrical systems. Our skilled technicians use top-notch materials and cutting-edge techniques to ensure seamless solutions tailored to your needs. Trust us to illuminate your home with excellence and reliability.",
  },
  {
    icon: Building,
    title: "Commercial",
    description: "Elevate your business with our comprehensive commercial electrical services at Bright Light Electric. Our dedicated team specializes in providing tailored solutions to meet the unique demands of commercial spaces. From efficient electrical installations to strategic system upgrades, we prioritize safety, compliance, and energy efficiency. Count on us to power your business with precision and reliability.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Empower your industrial operations with the expertise of Bright Light Electric. Our industrial electrical services are designed to meet the dynamic needs of manufacturing and production environments. From robust power distribution systems to advanced automation solutions, we specialize in enhancing efficiency, reliability, and safety for your industrial facilities.",
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description: "When electrical emergencies strike, Bright Light Electric is your reliable partner for swift and effective solutions. Our emergency electrical services are available 24/7 to address unexpected outages, faults, or other urgent issues. Our responsive team of skilled technicians is ready to troubleshoot, diagnose, and rectify electrical problems promptly.",
  },
  {
    icon: Hammer,
    title: "Remodeling",
    description: "Transform your space with confidence using our remodeling electrical services at Bright Light Electric. Whether you're updating a room or undertaking a comprehensive renovation, our skilled team is here to provide tailored electrical solutions. From modern lighting installations to smart home upgrades, we specialize in enhancing the functionality and aesthetics of your remodeled spaces.",
  },
  {
    icon: Droplets,
    title: "Oil Field",
    description: "Fuel the heart of your oil field operations with the specialized expertise of Bright Light Electric. Our oil field electrical services are tailored to meet the unique demands of the energy sector. From designing and implementing robust electrical systems to troubleshooting and maintaining critical equipment, we are committed to enhancing reliability and efficiency.",
  },
  {
    icon: Ship,
    title: "Marine",
    description: "Set sail with confidence, knowing that Bright Light Electric is your trusted partner for marine electrical services. We specialize in providing comprehensive solutions for the unique electrical needs of the maritime industry. From expert installations and maintenance to troubleshooting and repairs, our skilled technicians ensure peak performance.",
  },
  {
    icon: HardHat,
    title: "New Construction",
    description: "Embark on your construction journey with the assurance of superior electrical solutions from Bright Light Electric. Our new construction electrical services are crafted to seamlessly integrate cutting-edge technology and industry expertise into your building projects. From meticulous wiring to state-of-the-art lighting installations.",
  },
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
            Through collaboration with industry-leading materials and the engagement of highly skilled and detail-oriented team members, we consistently provide robust and enduring solutions for all.
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
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

      {/* Quote Form */}
      <LeadForm />

      <Footer />
    </main>
  );
};

export default Services;
