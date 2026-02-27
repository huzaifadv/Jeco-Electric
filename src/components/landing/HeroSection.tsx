import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Subtle diagonal accent stripe */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center max-w-3xl">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">
            Limited Time — $50 Off Your First Service
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
          Tulsa's Most Trusted{" "}
          <span className="text-accent">Electricians</span>
        </h1>

        <p className="text-primary-foreground/70 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Licensed (OK #094652) · 30+ Years Experience · Free Estimates
          <br />
          <span className="text-sm">Serving Broken Arrow, Tulsa, Bixby, Jenks & Surrounding Areas</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold px-8 py-6 rounded-lg shadow-lg shadow-accent/25"
          >
            <a href="tel:9188941622">
              <Phone className="mr-2 h-5 w-5" />
              Call (918) 894-1622
            </a>
          </Button>

          <Button
            onClick={scrollToForm}
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-lg"
          >
            Get Your Free Quote
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
