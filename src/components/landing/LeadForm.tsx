import { Phone, Send, MapPin, Mail } from "lucide-react";
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
import { useState } from "react";

export const LeadForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you shortly with your price quote.",
    });
  };

  const inputClasses =
    "mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:ring-accent";

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-4">
          Get a <span className="text-accent">Price Quote</span>
        </h2>
        <p className="text-center text-primary-foreground/50 mb-14">
          Fill out the form or give us a call — we'll get back to you shortly
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary-foreground mb-6">Contact Info</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">Sand Springs Area</p>
                    <p className="text-sm text-primary-foreground/60">1031 W 4th St, Sand Springs, OK 74063</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">Email</p>
                    <a href="mailto:info@brightlightelectric.com" className="text-sm text-accent hover:underline">
                      info@brightlightelectric.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">Phone</p>
                    <a href="tel:9182457555" className="text-sm text-accent hover:underline font-bold">
                      (918) 245-7555
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <p className="text-accent font-bold text-sm mb-1">⚡ Free Estimates, Always</p>
              <p className="text-primary-foreground/60 text-xs">
                No hidden fees, no obligations. Get honest pricing from our skilled and experienced team of electricians.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">Thank You!</h3>
                <p className="text-primary-foreground/60 mb-6">
                  We'll reach out to you shortly with your price quote.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                  <a href="tel:9182457555">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (918) 245-7555
                  </a>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-primary-foreground/80">First Name</Label>
                    <Input id="firstName" required placeholder="John" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-primary-foreground/80">Last Name</Label>
                    <Input id="lastName" required placeholder="Smith" className={inputClasses} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-primary-foreground/80">Email</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-primary-foreground/80">Phone</Label>
                    <Input id="phone" type="tel" required placeholder="(918) 555-0123" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <Label className="text-primary-foreground/80">Select a Service</Label>
                  <Select>
                    <SelectTrigger className={inputClasses}>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="oilfield">Oil Field</SelectItem>
                      <SelectItem value="marine">Marine</SelectItem>
                      <SelectItem value="newconstruction">New Construction</SelectItem>
                      <SelectItem value="remodeling">Remodeling</SelectItem>
                      <SelectItem value="emergency">Emergency Repairs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="comments" className="text-primary-foreground/80">Give us more details of the job...</Label>
                  <Textarea
                    id="comments"
                    rows={4}
                    placeholder="Tell us about your project or electrical needs…"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold py-6 rounded-lg shadow-lg shadow-accent/20"
                >
                  Request a Quote
                </Button>

                <p className="text-center text-primary-foreground/40 text-xs">
                  Thank you! We will reach out to you shortly with your price quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
