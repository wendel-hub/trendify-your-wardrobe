import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  const images = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  if (isMobile) {
    return (
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Top Banner */}
        <div className="bg-amber-600 text-white text-center py-3 z-20">
          <p className="text-xs font-medium tracking-wider px-4">
            COMPLIMENTARY SHIPPING ON ORDERS OVER $300
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="flex-1 relative">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {/* First Image Slide */}
              <CarouselItem>
                <div 
                  className="h-screen bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('${images[0]}')`
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </CarouselItem>

              {/* Center Panel - Main Content */}
              <CarouselItem>
                <div className="h-screen bg-gradient-to-b from-sky-200 to-sky-300 flex flex-col items-center justify-center relative px-8">
                  <div className="text-center text-white">
                    <p className="text-xs font-light tracking-wider mb-2 uppercase">Discover</p>
                    <p className="text-xs font-light tracking-wider mb-6 uppercase">New In</p>
                    <h1 className="text-2xl font-light mb-8 tracking-wider">
                      DESIGNED FOR THE SUN
                    </h1>
                    <Link to="/shop">
                      <Button 
                        size="lg" 
                        className="bg-white text-fashion-charcoal hover:bg-gray-100 transition-all duration-300 font-light px-8 py-3 tracking-wider uppercase text-sm"
                      >
                        Shop
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Decorative birds */}
                  <div className="absolute top-1/4 right-1/4 text-white/60">
                    <svg width="15" height="12" viewBox="0 0 20 15" fill="currentColor">
                      <path d="M10 0C8 2 6 4 4 6c2 2 4 4 6 6 2-2 4-4 6-6-2-2-4-4-6-6z"/>
                    </svg>
                  </div>
                  <div className="absolute top-1/3 left-1/4 text-white/40">
                    <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor">
                      <path d="M7.5 0C6 1.5 4.5 3 3 4.5c1.5 1.5 3 3 4.5 4.5 1.5-1.5 3-3 4.5-4.5C10.5 3 9 1.5 7.5 0z"/>
                    </svg>
                  </div>
                </div>
              </CarouselItem>

              {/* Third Image Slide */}
              <CarouselItem>
                <div 
                  className="h-screen bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('${images[1]}')`
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>
    );
  }

  // Desktop view - keep existing three-panel layout
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
