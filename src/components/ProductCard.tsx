
import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Product } from "./ProductGrid";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-fashion-sage text-white px-2 py-1 text-xs font-medium rounded">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-fashion-rose text-white px-2 py-1 text-xs font-medium rounded">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-200"
          onClick={handleWishlistToggle}
        >
          <Heart 
            className={`w-4 h-4 transition-colors duration-200 ${
              isWishlisted ? "fill-fashion-rose text-fashion-rose" : "text-gray-600"
            }`} 
          />
        </Button>

        {/* Quick Add to Cart - appears on hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-fashion-charcoal hover:bg-fashion-charcoal/90 text-white"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-fashion-charcoal mb-2 group-hover:text-fashion-rose transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-semibold text-fashion-charcoal">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Size Selection */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <div className="flex gap-2">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm border rounded transition-colors duration-200 ${
                  selectedSize === size
                    ? "border-fashion-charcoal bg-fashion-charcoal text-white"
                    : "border-gray-300 hover:border-fashion-charcoal"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Colors
          </label>
          <div className="flex gap-2">
            {product.colors.map(color => (
              <div
                key={color}
                className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-fashion-charcoal transition-colors duration-200 cursor-pointer"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                  color.toLowerCase() === 'black' ? '#000000' :
                                  color.toLowerCase() === 'beige' ? '#F5F5DC' :
                                  color.toLowerCase() === 'blue' ? '#0066CC' :
                                  color.toLowerCase() === 'navy' ? '#000080' :
                                  color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#808080' :
                                  color.toLowerCase() === 'cream' ? '#FFFDD0' :
                                  color.toLowerCase() === 'brown' ? '#8B4513' :
                                  color.toLowerCase() === 'cognac' ? '#9F4A00' :
                                  color.toLowerCase() === 'burgundy' ? '#800020' :
                                  color.toLowerCase() === 'charcoal' ? '#36454F' :
                                  color.toLowerCase() === 'camel' ? '#C19A6B' :
                                  color.toLowerCase() === 'pink' ? '#FFC0CB' :
                                  color.toLowerCase() === 'light blue' ? '#ADD8E6' :
                                  '#CCCCCC'
                }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
