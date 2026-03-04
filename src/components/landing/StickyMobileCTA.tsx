import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyMobileCTA = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10 p-3 flex gap-3">
      <Button
        asChild
        className="flex-1 bg-accent text-[#000] font-bold py-5"
      >
        <a href="tel:9182457555">
          <Phone className="mr-2 h-4 w-4" />
          Call Now
        </a>
      </Button>
      <Button
        onClick={scrollToForm}
        variant="outline"
        className="flex-1 border-primary-foreground/30 text-[#000] font-bold py-5"
      >
        <FileText className="mr-2 h-4 w-4" />
        Get Quote
      </Button>
    </div>
  );
};
