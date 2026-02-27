import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { LeadForm } from "@/components/landing/LeadForm";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <LeadForm />
      <StickyMobileCTA />
      <footer className="bg-primary py-6 text-center">
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Jaco Electric LLC · Oklahoma License #094652 · Broken Arrow, OK
        </p>
      </footer>
    </main>
  );
};

export default Index;
