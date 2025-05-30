
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
  selectedSizes: string[];
  onSizesChange: (sizes: string[]) => void;
}

const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedSizes,
  onSizesChange
}: ProductFiltersProps) => {
  const categories = [
    { id: "all", label: "All Products" },
    { id: "women", label: "Women" },
    { id: "men", label: "Men" },
    { id: "accessories", label: "Accessories" }
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "One Size"];

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      onSizesChange([...selectedSizes, size]);
    } else {
      onSizesChange(selectedSizes.filter(s => s !== size));
    }
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-playfair">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map(category => (
              <label key={category.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={selectedCategory === category.id}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 transition-colors duration-200 ${
                  selectedCategory === category.id 
                    ? "border-fashion-charcoal bg-fashion-charcoal" 
                    : "border-gray-300"
                }`}>
                  {selectedCategory === category.id && (
                    <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                  )}
                </div>
                <span className="text-sm text-gray-700">{category.label}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-playfair">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={onPriceRangeChange}
              max={500}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-playfair">Sizes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sizes.map(size => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox
                  id={size}
                  checked={selectedSizes.includes(size)}
                  onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                />
                <label htmlFor={size} className="text-sm text-gray-700 cursor-pointer">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <button
        onClick={() => {
          onCategoryChange("all");
          onPriceRangeChange([0, 500]);
          onSizesChange([]);
        }}
        className="w-full text-sm text-fashion-charcoal hover:text-fashion-rose transition-colors duration-200 border border-fashion-sand hover:border-fashion-rose rounded-lg py-2"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default ProductFilters;
