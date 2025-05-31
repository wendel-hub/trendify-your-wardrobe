
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Top Banner */}
      <div className="absolute top-0 left-0 right-0 bg-amber-600 text-white text-center py-3 z-20">
        <p className="text-sm font-medium tracking-wider">
          COMPLIMENTARY SHIPPING ON ORDERS OVER $300
        </p>
      </div>

      {/* Three Panel Layout */}
      <div className="flex w-full h-screen mt-12">
        {/* Left Panel */}
        <div 
          className="w-1/3 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Center Panel - Main Content */}
        <div className="w-1/3 bg-gradient-to-b from-sky-200 to-sky-300 flex flex-col items-center justify-center relative">
          <div className="text-center text-white px-8">
            <p className="text-sm font-light tracking-wider mb-4 uppercase">Discover</p>
            <p className="text-sm font-light tracking-wider mb-8 uppercase">New In</p>
            <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wider">
              DESIGNED FOR THE SUN
            </h1>
            <Link to="/shop">
              <Button 
                size="lg" 
                className="bg-white text-fashion-charcoal hover:bg-gray-100 transition-all duration-300 font-light px-12 py-4 tracking-wider uppercase"
              >
                Shop
              </Button>
            </Link>
          </div>
          
          {/* Decorative birds */}
          <div className="absolute top-1/4 right-1/4 text-white/60">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="currentColor">
              <path d="M10 0C8 2 6 4 4 6c2 2 4 4 6 6 2-2 4-4 6-6-2-2-4-4-6-6z"/>
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/4 text-white/40">
            <svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor">
              <path d="M7.5 0C6 1.5 4.5 3 3 4.5c1.5 1.5 3 3 4.5 4.5 1.5-1.5 3-3 4.5-4.5C10.5 3 9 1.5 7.5 0z"/>
            </svg>
          </div>
        </div>

        {/* Right Panel */}
        <div 
          className="w-1/3 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
