
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Ruler, Palette } from "lucide-react";

const CustomDesignSection = () => {
  const [selectedFabric, setSelectedFabric] = useState("");
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hips: "",
    height: "",
    weight: ""
  });
  const [showAnimation, setShowAnimation] = useState(false);
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
    setShowAnimation(true);
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

          {/* Visualization & Contact */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-fashion-rose" />
              <CardTitle className="font-light tracking-wider">VISUALIZATION</CardTitle>
              <CardDescription>See how your design will look</CardDescription>
            </CardHeader>
            <CardContent>
              {showAnimation ? (
                <div className="mb-6">
                  <div className="relative bg-gradient-to-b from-sky-100 to-sky-200 rounded-lg p-8 text-center">
                    <div className="animate-fade-in">
                      <div className="w-24 h-32 mx-auto bg-white rounded-full relative overflow-hidden shadow-lg">
                        <div 
                          className="absolute inset-2 rounded-full"
                          style={{ 
                            backgroundColor: fabrics.find(f => f.id === selectedFabric)?.color,
                            opacity: 0.8
                          }}
                        ></div>
                        <div className="absolute inset-4 border-2 border-white rounded-full"></div>
                      </div>
                      <p className="text-sm mt-4 text-gray-600">Your body type with selected fabric</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6 p-8 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-500 text-sm">Select fabric and enter measurements to see visualization</p>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <h3 className="font-light tracking-wider text-center mb-4">BOOK CUSTOM DESIGN</h3>
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
      </div>
    </section>
  );
};

export default CustomDesignSection;
