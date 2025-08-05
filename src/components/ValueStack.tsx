import { Card, CardContent } from "@/components/ui/card";

const ValueStack = () => {
  const features = [
    {
      icon: "🏪",
      title: "Premium Shopify Store",
      description: "Professional, conversion-optimized store design"
    },
    {
      icon: "🎯",
      title: "3-5 Winning Products Installed",
      description: "Hand-picked products with proven sales potential"
    },
    {
      icon: "🎨",
      title: "Logo & Branding",
      description: "Complete brand identity and visual assets"
    },
    {
      icon: "✍️",
      title: "Conversion-Boosting Copywriting",
      description: "High-converting product descriptions and sales copy"
    },
    {
      icon: "🔍",
      title: "Product Research Toolkit",
      description: "Advanced tools to find winning products"
    },
    {
      icon: "📱",
      title: "TikTok Ad Creatives",
      description: "Ready-to-use video content for advertising"
    },
    {
      icon: "💬",
      title: "Private Discord Access",
      description: "Exclusive community and ongoing support"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Everything You Need to Start — Done for You.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Skip the guesswork and launch with a complete, battle-tested system that's already generating results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-bold mr-2">💡</span>
            <span className="text-primary font-semibold">Complete setup in 24-48 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;