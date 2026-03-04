const galleryItems = [
  {
    image: "/images/work-1.jpg",
    title: "Outdoor Lighting & Doorbell",
  },
  {
    image: "/images/work-2.jpg",
    title: "Garage Lighting",
  },
  {
    image: "/images/work-3.jpg",
    title: "Commercial Track Lighting",
  },
  {
    image: "/images/work-4.jpg",
    title: "Pole Light Installation",
  },
  {
    image: "/images/work-5.jpg",
    title: "Commercial Interior Lighting",
  },
  {
    image: "/images/work-6.jpg",
    title: "Kitchen Ceiling Light",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Our <span className="text-accent">Work</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Recent projects by our team
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary-foreground font-bold text-sm">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
