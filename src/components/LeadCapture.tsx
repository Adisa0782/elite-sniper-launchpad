import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const LeadCapture = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setEmail("");
    // You could add toast notification here
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-gradient-dark border-primary/20 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Not Ready Yet? Get 3 Free Winning Products Instantly.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join 10,000+ entrepreneurs and get our hand-picked winning products delivered to your inbox. 
                Start your research with products that are already converting.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 text-lg py-6 bg-card border-border/50"
                />
                <Button type="submit" variant="elite" size="lg" className="px-8 py-6 text-lg">
                  Send Me The Products
                </Button>
              </div>
            </form>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center">
                <span className="text-primary mr-2">✉️</span>
                No spam, ever
              </div>
              <div className="flex items-center justify-center">
                <span className="text-primary mr-2">🎯</span>
                Hand-picked winners
              </div>
              <div className="flex items-center justify-center">
                <span className="text-primary mr-2">📈</span>
                Proven to convert
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/20">
              <p className="text-sm text-muted-foreground mb-4">
                Ready to go Elite? Limited spots available this month.
              </p>
              <Button variant="glow" size="lg" className="text-lg px-8 py-4">
                🚀 Claim Your Elite Store Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadCapture;