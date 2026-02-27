import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const LeadForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 1 hour during business hours.",
    });
  };

  return (
    <section id="lead-form" className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-2">
          Claim Your <span className="text-accent">$50 Discount</span>
        </h2>
        <p className="text-center text-primary-foreground/60 mb-8">
          Get a free, no-obligation quote today
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">Thank You!</h3>
            <p className="text-primary-foreground/70 mb-6">
              We'll contact you shortly. For immediate service:
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              <a href="tel:9188941622">
                <Phone className="mr-2 h-5 w-5" />
                Call (918) 894-1622
              </a>
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-primary-foreground/80">Full Name</Label>
              <Input id="name" required placeholder="John Smith" className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
            </div>

            <div>
              <Label htmlFor="phone" className="text-primary-foreground/80">Phone Number</Label>
              <Input id="phone" type="tel" required placeholder="(918) 555-0123" className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
            </div>

            <div>
              <Label htmlFor="email" className="text-primary-foreground/80">Email</Label>
              <Input id="email" type="email" required placeholder="john@example.com" className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
            </div>

            <div>
              <Label className="text-primary-foreground/80">Service Needed</Label>
              <Select required>
                <SelectTrigger className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Repairs</SelectItem>
                  <SelectItem value="construction">New Construction / Remodel</SelectItem>
                  <SelectItem value="panel">Panel Upgrade</SelectItem>
                  <SelectItem value="inspection">Electrical Inspection</SelectItem>
                  <SelectItem value="lighting">Lighting Installation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="details" className="text-primary-foreground/80">Brief Description <span className="text-primary-foreground/40">(optional)</span></Label>
              <Textarea id="details" rows={3} placeholder="Tell us about your project…" className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none" />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold py-6 rounded-lg shadow-lg shadow-accent/25"
            >
              Request My Free Quote
            </Button>

            <p className="text-center text-primary-foreground/50 text-xs">
              Or call us now:{" "}
              <a href="tel:9188941622" className="text-accent underline font-semibold">
                (918) 894-1622
              </a>
              <br />
              We respond within 1 hour during business hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
