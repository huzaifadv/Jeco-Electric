import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Brian Palmer",
    location: "Bixby, OK",
    text: "Excellent communication and quality of work! They have done multiple projects for me and I wouldn't think about using anyone else.",
    image: "/images/electrical-panel.jpg",
  },
  {
    name: "Linda Birchall",
    location: "Tulsa, OK",
    text: "Electricians were professional & knowledgeable. Arrive on time & worked quickly & were polite. We will use Jaco again.",
    image: "/images/recessed-lighting.jpg",
  },
  {
    name: "Cheri Hutson",
    location: "Coweta, OK",
    text: "These guys were fantastic to work with! They are prompted, respond immediately to questions and did a great job on my new home. I will continue to use them on all my new house builds in the future! I highly recommend them!",
    image: "/images/new-construction.jpg",
  },
];

export const TrustSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-4">
          What People <span className="text-accent">Say</span>
        </h2>
        <p className="text-center text-primary-foreground/50 mb-14">
          Real reviews from real customers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-none bg-primary-foreground/5 backdrop-blur-sm shadow-lg overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src={t.image}
                  alt={`Project for ${t.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
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
