
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive exclusive offers and style updates.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 bg-fashion-charcoal text-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Stay in Style
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-fashion-rose"
            />
            <Button 
              type="submit" 
              className="bg-fashion-rose hover:bg-fashion-rose/90 text-white px-8"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-white/60 mt-4">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
          
          {/* Special Offer */}
          <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-2xl font-playfair font-semibold mb-2">
              Get 10% Off Your First Order
            </h3>
            <p className="text-white/80">
              New subscribers receive an exclusive discount code via email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
