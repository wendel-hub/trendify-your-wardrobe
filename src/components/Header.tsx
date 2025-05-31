
import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [api, setApi] = useState<any>();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const isMobile = useIsMobile();

  const navItems = [
    { label: "NEW IN", path: "/new-arrivals" },
    { label: "BEST SELLERS", path: "/best-sellers" },
    { label: "DRESSES", path: "/women" },
    { label: "SWIMWEAR", path: "/women" },
    { label: "TOPS & BOTTOMS", path: "/women" },
    { label: "JUMPSUITS", path: "/women" },
    { label: "RESORTWEAR", path: "/women" },
    { label: "ACCESSORIES", path: "/accessories" },
    { label: "COLLECTIONS", path: "/shop" },
    { label: "SALE", path: "/sale" }
  ];

  // Auto-slide functionality for mobile
  useEffect(() => {
    if (!api || !isMobile) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isMobile]);

  if (isMobile) {
    return (
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Mobile header */}
          <div className="flex items-center justify-between h-16">
            {/* Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-fashion-charcoal hover:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Logo */}
            <Link to="/">
              <h1 className="text-xl font-light text-fashion-charcoal tracking-[0.2em]">
                TRENDIFY
              </h1>
            </Link>

            {/* Cart Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-fashion-charcoal hover:text-gray-600 relative"
              onClick={onCartClick}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-fashion-charcoal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Navigation Carousel */}
          <div className="py-3 border-t border-gray-100">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {navItems.map((item, index) => (
                  <CarouselItem key={item.label} className="pl-1 basis-1/3">
                    <Link
                      to={item.path}
                      className="block text-center"
                    >
                      <div className="text-xs font-light text-fashion-charcoal hover:text-gray-600 transition-colors duration-200 tracking-wider py-2 px-1">
                        {item.label}
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Discover link */}
            <div className="text-center mt-2">
              <Link to="/shop" className="text-xs font-light text-gray-500 hover:text-gray-700 tracking-wider">
                DISCOVER
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-sm font-light text-fashion-charcoal hover:text-gray-600 transition-colors duration-200 tracking-wider py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  to="/shop" 
                  className="text-sm font-light text-gray-500 hover:text-gray-700 tracking-wider py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DISCOVER
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    );
  }

  // Desktop view - keep existing layout
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/">
              <h1 className="text-3xl font-light text-fashion-charcoal tracking-[0.3em]">
                TRENDIFY
              </h1>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="text-fashion-charcoal hover:text-gray-600">
              <Search className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" className="text-fashion-charcoal hover:text-gray-600">
              <User className="w-5 h-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="text-fashion-charcoal hover:text-gray-600 relative"
              onClick={onCartClick}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-fashion-charcoal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4 border-t border-gray-100">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-light text-fashion-charcoal hover:text-gray-600 transition-colors duration-200 whitespace-nowrap tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Discover submenu */}
          <div className="text-center mt-4">
            <Link to="/shop" className="text-sm font-light text-gray-500 hover:text-gray-700 tracking-wider">
              DISCOVER
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
