
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Mail, Ruler, Palette, X } from "lucide-react";

const CustomDesignSection = () => {
  const [selectedFabric, setSelectedFabric] = useState("");
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hips: "",
    height: "",
    weight: ""
  });
  const [showVisualization, setShowVisualization] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const fabrics = [
    { id: "silk", name: "Premium Silk", color: "#E8DCC0", texture: "Smooth & Luxurious" },
    { id: "cotton", name: "Organic Cotton", color: "#F5F5DC", texture: "Soft & Breathable" },
    { id: "linen", name: "European Linen", color: "#FAF0E6", texture: "Cool & Crisp" },
    { id: "chiffon", name: "Flowing Chiffon", color: "#FFF8DC", texture: "Light & Airy" },
    { id: "velvet", name: "Luxury Velvet", color: "#DDA0DD", texture: "Rich & Plush" },
    { id: "satin", name: "Smooth Satin", color: "#F0E68C", texture: "Sleek & Shiny" }
  ];

  const handleMeasurementChange = (field: string, value: string) => {
    setMeasurements(prev => ({ ...prev, [field]: value }));
  };

  const generateVisualization = () => {
    if (!selectedFabric || !measurements.bust || !measurements.waist || !measurements.hips) {
      toast({
        title: "Missing Information",
        description: "Please select a fabric and enter your measurements",
      });
      return;
    }
    setShowVisualization(true);
    toast({
      title: "Visualization Generated!",
      description: "See how the fabric will look on your body type",
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours about your custom design",
      });
      setContactForm({ name: "", email: "", message: "" });
    }
  };

  const selectedFabricData = fabrics.find(f => f.id === selectedFabric);

  return (
    <section className="py-20 px-4 bg-fashion-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-light tracking-wider mb-4 text-gray-600 uppercase">Discover</p>
          <h2 className="text-4xl md:text-5xl font-light text-fashion-charcoal mb-6 tracking-wider">
            CUSTOM CREATIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Design your perfect piece with our bespoke service. Choose fabrics, input measurements, and visualize your creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Fabric Selection */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader className="text-center">
              <Palette className="w-8 h-8 mx-auto mb-4 text-fashion-rose" />
              <CardTitle className="font-light tracking-wider">SELECT FABRIC</CardTitle>
              <CardDescription>Choose your preferred material</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {fabrics.map((fabric) => (
                  <div
                    key={fabric.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedFabric === fabric.id 
                        ? 'border-fashion-rose bg-fashion-rose/5' 
                        : 'border-gray-200 hover:border-fashion-rose/50'
                    }`}
                    onClick={() => setSelectedFabric(fabric.id)}
                  >
                    <div 
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: fabric.color }}
                    ></div>
                    <p className="text-sm font-medium">{fabric.name}</p>
                    <p className="text-xs text-gray-500">{fabric.texture}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Measurements */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader className="text-center">
              <Ruler className="w-8 h-8 mx-auto mb-4 text-fashion-rose" />
              <CardTitle className="font-light tracking-wider">MEASUREMENTS</CardTitle>
              <CardDescription>Enter your body measurements in inches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="bust" className="text-sm font-light">Bust</Label>
                <Input
                  id="bust"
                  placeholder="e.g., 34"
                  value={measurements.bust}
                  onChange={(e) => handleMeasurementChange("bust", e.target.value)}
                  className="border-gray-200 focus:border-fashion-rose"
                />
              </div>
              <div>
                <Label htmlFor="waist" className="text-sm font-light">Waist</Label>
                <Input
                  id="waist"
                  placeholder="e.g., 28"
                  value={measurements.waist}
                  onChange={(e) => handleMeasurementChange("waist", e.target.value)}
                  className="border-gray-200 focus:border-fashion-rose"
                />
              </div>
              <div>
                <Label htmlFor="hips" className="text-sm font-light">Hips</Label>
                <Input
                  id="hips"
                  placeholder="e.g., 36"
                  value={measurements.hips}
                  onChange={(e) => handleMeasurementChange("hips", e.target.value)}
                  className="border-gray-200 focus:border-fashion-rose"
                />
              </div>
              <div>
                <Label htmlFor="height" className="text-sm font-light">Height (inches)</Label>
                <Input
                  id="height"
                  placeholder="e.g., 65"
                  value={measurements.height}
                  onChange={(e) => handleMeasurementChange("height", e.target.value)}
                  className="border-gray-200 focus:border-fashion-rose"
                />
              </div>
              
              <Button 
                onClick={generateVisualization}
                className="w-full bg-fashion-charcoal hover:bg-fashion-charcoal/90 text-white font-light tracking-wider"
              >
                VISUALIZE DESIGN
              </Button>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-fashion-rose" />
              <CardTitle className="font-light tracking-wider">BOOK CUSTOM DESIGN</CardTitle>
              <CardDescription>Tell us about your vision</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  className="border-gray-200 focus:border-fashion-rose"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  className="border-gray-200 focus:border-fashion-rose"
                />
                <Textarea
                  placeholder="Tell us about your design vision..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  className="border-gray-200 focus:border-fashion-rose"
                  rows={3}
                />
                <Button 
                  type="submit"
                  className="w-full bg-fashion-rose hover:bg-fashion-rose/90 text-white font-light tracking-wider"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Visualization Popup */}
        <Dialog open={showVisualization} onOpenChange={setShowVisualization}>
          <DialogContent className="max-w-md mx-auto bg-white rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-center font-light tracking-wider text-xl mb-4">
                YOUR CUSTOM DESIGN
              </DialogTitle>
              <DialogClose className="absolute right-4 top-4">
                <X className="h-4 w-4" />
              </DialogClose>
            </DialogHeader>
            
            <div className="text-center p-6">
              <div className="relative mx-auto w-48 h-64 bg-gradient-to-b from-sky-100 to-sky-200 rounded-lg overflow-hidden mb-6">
                {/* Mannequin Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative animate-pulse">
                    {/* Head */}
                    <div className="w-8 h-8 bg-pink-200 rounded-full mx-auto mb-2"></div>
                    
                    {/* Body/Dress */}
                    <div className="relative">
                      {/* Dress shape */}
                      <div 
                        className="w-16 h-32 mx-auto rounded-b-full animate-fade-in"
                        style={{ 
                          backgroundColor: selectedFabricData?.color || "#E8DCC0",
                          boxShadow: "inset 0 4px 8px rgba(0,0,0,0.1)"
                        }}
                      >
                        {/* Fabric texture overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-b-full"></div>
                        
                        {/* Dress details */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/30 rounded"></div>
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white/20 rounded"></div>
                      </div>
                      
                      {/* Arms */}
                      <div className="absolute top-2 -left-2 w-3 h-8 bg-pink-200 rounded-full transform rotate-12"></div>
                      <div className="absolute top-2 -right-2 w-3 h-8 bg-pink-200 rounded-full transform -rotate-12"></div>
                      
                      {/* Legs */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <div className="w-2 h-8 bg-pink-200 rounded-full"></div>
                        <div className="w-2 h-8 bg-pink-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating fabric swatches animation */}
                <div className="absolute top-4 right-4 animate-bounce">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: selectedFabricData?.color }}
                  ></div>
                </div>
                <div className="absolute bottom-4 left-4 animate-pulse">
                  <div 
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: selectedFabricData?.color }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-lg">{selectedFabricData?.name}</h3>
                <p className="text-sm text-gray-600">{selectedFabricData?.texture}</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Measurements: {measurements.bust}" × {measurements.waist}" × {measurements.hips}"</p>
                  {measurements.height && <p>Height: {measurements.height}"</p>}
                </div>
              </div>
              
              <Button 
                onClick={() => setShowVisualization(false)}
                className="w-full mt-6 bg-fashion-charcoal hover:bg-fashion-charcoal/90 text-white font-light tracking-wider"
              >
                CLOSE PREVIEW
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CustomDesignSection;
