const galleryItems = [
  {
    image: "/images/recessed-lighting.jpg",
    title: "Recessed Lighting Install",
  },
  {
    image: "/images/ceiling-fan.jpg",
    title: "Ceiling Fan Replacement",
  },
  {
    image: "/images/kitchen-remodel.jpg",
    title: "Kitchen Electrical Update",
  },
  {
    image: "/images/modern-home.jpg",
    title: "Modern Home Wiring",
  },
  {
    image: "/images/living-room.jpg",
    title: "Living Room Lighting",
  },
  {
    image: "/images/new-construction.jpg",
    title: "New Construction",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Update Your <span className="text-accent">Space</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Popular projects our customers love
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
