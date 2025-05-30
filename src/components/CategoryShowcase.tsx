
const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      title: "Women's Collection",
      subtitle: "Elegant & Modern",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#women"
    },
    {
      id: 2,
      title: "Men's Collection",
      subtitle: "Sharp & Sophisticated",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#men"
    },
    {
      id: 3,
      title: "Accessories",
      subtitle: "Complete Your Look",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#accessories"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-fashion-charcoal mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for the modern individual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-square md:aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-playfair font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-white/90 text-lg mb-4">
                  {category.subtitle}
                </p>
                <a
                  href={category.link}
                  className="inline-flex items-center text-white font-medium group-hover:text-fashion-rose transition-colors duration-300"
                >
                  Explore Collection
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
