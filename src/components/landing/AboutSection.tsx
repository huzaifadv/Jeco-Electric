import { } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-14">
          About <span className="text-accent">Bright Light Electric</span>
        </h2>

        {/* Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/electrician-hero.jpg"
              alt="Bright Light Electric professional electrician"
              className="w-full h-72 lg:h-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              We founded Bright Light Electric out of a pure passion for people. Our goals, our ambitions, our inspirations, all come together to form a truly amazing company that all of us are proud to be a part of.
            </p>
            <p>
              Since opening back in 2017, we have become masters at our craft. We go above and beyond your requests to keep you coming back for more.
            </p>
            <p>
              Through collaboration with industry-leading materials and the engagement of highly skilled and detail-oriented electricians, we consistently provide robust and enduring solutions for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
