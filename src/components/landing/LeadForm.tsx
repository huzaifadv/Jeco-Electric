import { useState } from "react";
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

  const inputClasses =
    "mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:ring-accent";

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-4">
          Get a <span className="text-accent">Quote</span>
        </h2>
        <p className="text-center text-primary-foreground/50 mb-14">
          Fill out the form or give us a call — we'll get back to you fast
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
                    <p className="text-sm font-semibold text-primary-foreground">Tulsa Area</p>
                    <p className="text-sm text-primary-foreground/60">PO Box 2751, Broken Arrow, OK 74013</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">Email</p>
                    <a href="mailto:tyson.jacobs@jacoelec.com" className="text-sm text-accent hover:underline">
                      tyson.jacobs@jacoelec.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">Phone</p>
                    <a href="tel:9188941622" className="text-sm text-accent hover:underline font-bold">
                      (918) 894-1622
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <p className="text-accent font-bold text-sm mb-1">⚡ $50 Off First Service</p>
              <p className="text-primary-foreground/60 text-xs">
                Mention this offer when you call or submit the form. Limited time only.
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
                  <Label className="text-primary-foreground/80">Preferred Contact Method</Label>
                  <Select>
                    <SelectTrigger className={inputClasses}>
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="text">Text Message</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="comments" className="text-primary-foreground/80">Comments</Label>
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
                  We respond within 1 hour during business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
