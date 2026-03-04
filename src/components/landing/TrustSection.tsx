import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sherry Newman",
    location: "Sand Springs, OK",
    text: "Stephan & Carl are wonderful. He has help out Kids Castle Daycare several times. Emergencies and Regular Maintenance. I would highly recommend him for any job. Fast, accurate, and dependable. A Sand Springs business with a great team!",
  },
  {
    name: "Danna Malone",
    location: "Oklahoma",
    text: "Stephen came to my rescue after another business cancelled after having an appointment for several days. Amazing, professional, great ethics. Thank you!!!!!",
  },
  {
    name: "Satisfied Customer",
    location: "Sand Springs, OK",
    text: "Bright Light Electric exceeded our expectations on every level. Their team is professional, knowledgeable, and always on time. Highly recommended!",
  },
];

export const TrustSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-4">
          What Our Clients <span className="text-accent">Say</span>
        </h2>
        <p className="text-center text-primary-foreground/50 mb-14">
          Real reviews from real customers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-none bg-primary-foreground/5 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-primary-foreground">{t.name}</p>
                  <p className="text-xs text-primary-foreground/50">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
