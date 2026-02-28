import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 mb-8">
          <span className="text-accent font-bold text-sm tracking-wide uppercase">
            Limited Time — $50 Off Your First Service
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
          Leaders in Quality{" "}
          <span className="text-accent">Electrical Service</span>{" "}
          & Construction
        </h1>

        <p className="text-primary-foreground/60 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
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
            variant="outline"
            className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-lg"
          >
            Get Your Free Quote
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
