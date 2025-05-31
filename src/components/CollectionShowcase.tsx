
const CollectionShowcase = () => {
  const collections = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "SUNSET COLLECTION"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "FLOWING FABRICS"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "MINIMAL ELEGANCE"
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "NEUTRAL TONES"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-light tracking-wider mb-4 text-gray-600 uppercase">Discover</p>
          <h2 className="text-4xl md:text-5xl font-light text-fashion-charcoal mb-6 tracking-wider">
            BORN OF THE WIND
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {collections.map((collection, index) => (
            <div key={index} className="relative group overflow-hidden aspect-[3/4]">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-lg font-light tracking-wider">
                  {collection.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
