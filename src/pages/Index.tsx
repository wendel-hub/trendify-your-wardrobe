
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CollectionShowcase from "@/components/CollectionShowcase";
import CustomDesignSection from "@/components/CustomDesignSection";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-inter">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <CollectionShowcase />
        <CustomDesignSection />
        <ProductGrid />
        <Newsletter />
        <Footer />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
