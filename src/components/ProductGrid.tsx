
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
}

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Elegant Silk Blouse",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Black", "Beige"],
      isSale: true
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 125,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Black"],
      isNew: true
    },
    {
      id: 3,
      name: "Tailored Wool Coat",
      price: 245,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Navy", "Charcoal", "Camel"]
    },
    {
      id: 4,
      name: "Minimalist Tote Bag",
      price: 65,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Beige"]
    },
    {
      id: 5,
      name: "Cashmere Sweater",
      price: 165,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Cream", "Grey", "Navy"],
      isNew: true
    },
    {
      id: 6,
      name: "Oxford Dress Shirt",
      price: 78,
      originalPrice: 95,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Light Blue", "Pink"],
      isSale: true
    },
    {
      id: 7,
      name: "Leather Crossbody",
      price: 95,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Cognac"]
    },
    {
      id: 8,
      name: "Pleated Midi Skirt",
      price: 88,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Navy", "Burgundy"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    
    return categoryMatch && priceMatch && sizeMatch;
  });

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-fashion-charcoal mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium fashion pieces
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              selectedSizes={selectedSizes}
              onSizesChange={setSelectedSizes}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
