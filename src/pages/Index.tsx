import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { UnrivaledSection } from "@/components/landing/UnrivaledSection";
import { AllServicesSection } from "@/components/landing/AllServicesSection";
import { CoreValuesSection } from "@/components/landing/CoreValuesSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { GallerySection } from "@/components/landing/GallerySection";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <UnrivaledSection />
      <GallerySection />
      <AllServicesSection />
      <TrustSection />
      <CoreValuesSection />
      <LeadForm />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
