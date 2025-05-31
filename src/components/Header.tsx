
import { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const navItems = ["NEW IN", "BEST SELLERS", "DRESSES", "SWIMWEAR", "TOPS & BOTTOMS", "JUMPSUITS", "RESORTWEAR", "ACCESSORIES", "COLLECTIONS", "SALE"];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1">
            <h1 className="text-3xl font-light text-fashion-charcoal tracking-[0.3em]">
              TRENDIFY
            </h1>
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
              <a
                key={item}
                href="#"
                className="text-sm font-light text-fashion-charcoal hover:text-gray-600 transition-colors duration-200 whitespace-nowrap tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Discover submenu */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm font-light text-gray-500 hover:text-gray-700 tracking-wider">
              DISCOVER
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
