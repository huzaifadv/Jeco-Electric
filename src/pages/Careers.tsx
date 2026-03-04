import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Briefcase, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Competitive pay & benefits",
  "Ongoing training & development",
  "Supportive team environment",
  "Growth opportunities",
  "Work-life balance",
  "Stable, year-round work",
];

const Careers = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Application Received!", description: "We'll review your application and get back to you soon." });
  };

  const inputClasses = "mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:ring-accent";

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Join Our <span className="text-accent">Team</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            We're always looking for skilled, motivated electricians to join the Bright Light Electric family.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
            Why <span className="text-accent">Bright Light Electric?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <Briefcase className="h-10 w-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-primary-foreground mb-2">
              Apply <span className="text-accent">Now</span>
            </h2>
            <p className="text-primary-foreground/60">
              Fill out the form below and we'll be in touch
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <Send className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Application Submitted!</h3>
              <p className="text-primary-foreground/60">We'll review your application and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-primary-foreground/80">First Name</Label>
                  <Input required placeholder="John" className={inputClasses} />
                </div>
                <div>
                  <Label className="text-primary-foreground/80">Last Name</Label>
                  <Input required placeholder="Smith" className={inputClasses} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-primary-foreground/80">Email</Label>
                  <Input type="email" required placeholder="john@example.com" className={inputClasses} />
                </div>
                <div>
                  <Label className="text-primary-foreground/80">Phone</Label>
                  <Input type="tel" required placeholder="(918) 555-0123" className={inputClasses} />
                </div>
              </div>
              <div>
                <Label className="text-primary-foreground/80">Experience & Skills</Label>
                <Textarea rows={4} placeholder="Tell us about your electrical experience, certifications, and skills..." className={`${inputClasses} resize-none`} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold py-6 rounded-lg shadow-lg shadow-accent/20">
                Submit Application
              </Button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
