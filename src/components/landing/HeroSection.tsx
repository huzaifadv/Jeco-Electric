import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-primary overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/wood-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 mb-8">
          <span className="text-accent font-bold text-sm tracking-wide uppercase">
            ⚡ Trusted by Homeowners Across Tulsa Since 1994
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
          Leaders in Quality{" "}
          <span className="text-accent">Electrical Service</span>{" "}
          & Construction
        </h1>

        <p className="text-primary-foreground/70 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
          Serving Broken Arrow, Tulsa, Bixby, Jenks, and surrounding areas. We are dedicated to providing you the best electrical experience and expertise.
        </p>
        <p className="text-primary-foreground/50 text-base mb-10">
          Licensed (OK #094652) · 30+ Years Experience · Free Estimates
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold px-8 py-6 rounded-lg shadow-lg shadow-accent/20"
          >
            <a href="tel:9188941622">
              <Phone className="mr-2 h-5 w-5" />
              Call (918) 894-1622
            </a>
          </Button>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-muted text-foreground hover:bg-muted/80 text-lg font-bold px-8 py-6 rounded-lg"
          >
            Get Your Free Quote
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
