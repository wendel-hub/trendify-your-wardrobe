
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/contexts/CartContext";
import { supabase } from "@/lib/supabase";
import { Product } from "@/components/ProductGrid";

const Accessories = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("accessories");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'accessories');

      if (error) throw error;

      const formattedProducts: Product[] = data.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.original_price,
        image: product.image_url,
        category: product.category,
        sizes: Array.isArray(product.sizes) ? product.sizes : [product.sizes],
        colors: Array.isArray(product.colors) ? product.colors : [product.colors],
        isNew: product.is_new,
        isSale: product.is_sale
      }));

      setProducts(formattedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    
    return priceMatch && sizeMatch;
  });

  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-inter">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-fashion-charcoal mb-4">
                Accessories Collection
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete your look with our carefully curated accessories
              </p>
            </div>

            {loading ? (
              <div className="text-center py-20">
                <p className="text-lg text-gray-600">Loading products...</p>
              </div>
            ) : (
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
            )}
          </div>
        </section>

        <Footer />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Accessories;
