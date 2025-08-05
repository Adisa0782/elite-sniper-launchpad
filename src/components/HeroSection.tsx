import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dropshipping.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwZmY5ZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">💎 ELITE ENTRANCE SNIPER™</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
              Launch Your Dropshipping Empire with Elite Precision.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Elite Entrance Sniper™ gives you the exact system, tools, and setup to dominate your first $1,000/day store — even if you're starting from scratch.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <span className="text-primary mr-2">✅</span>
                <span className="text-sm font-medium">Store design included</span>
              </div>
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <span className="text-primary mr-2">✅</span>
                <span className="text-sm font-medium">Winning products handpicked</span>
              </div>
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <span className="text-primary mr-2">✅</span>
                <span className="text-sm font-medium">AI tools and full setup</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="elite" size="lg" className="text-lg px-8 py-4">
                🚀 Get Started Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Claim Your Elite Setup
              </Button>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Elite Dropshipping Dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-primary/20 animate-float"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 scale-105 animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;