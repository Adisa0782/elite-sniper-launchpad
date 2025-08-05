import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      icon: "🥉",
      price: "$99",
      description: "Elite Store Only",
      features: [
        "Premium Shopify Store Setup",
        "Professional Design & Branding",
        "Basic Product Research Guide",
        "Email Support",
        "7-day Setup Timeline"
      ],
      cta: "Get Basic Setup",
      popular: false,
      variant: "outline" as const
    },
    {
      name: "Pro",
      icon: "🥈",
      price: "$179",
      description: "Store + Winning Products",
      features: [
        "Everything in Basic",
        "3-5 Winning Products Installed",
        "Conversion-Optimized Copy",
        "Product Research Toolkit",
        "Priority Support",
        "48-hour Setup"
      ],
      cta: "Get Pro Setup",
      popular: true,
      variant: "elite" as const
    },
    {
      name: "VIP",
      icon: "🏆",
      price: "$400",
      description: "All + Ad Videos + Mentorship",
      features: [
        "Everything in Pro",
        "TikTok Ad Creatives (5 videos)",
        "Private Discord Access",
        "1-on-1 Strategy Call",
        "Live Chat Support",
        "24-hour VIP Setup",
        "30-day Success Guarantee"
      ],
      cta: "Get VIP Treatment",
      popular: false,
      variant: "premium" as const
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Your First $1,000/Day Store Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose your path to dropshipping success. All plans include our Elite Entrance Sniper™ methodology.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-semibold text-sm">💰 30-Day Money Back Guarantee</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'border-primary shadow-xl scale-105 bg-gradient-to-b from-card to-primary/5' : 'border-border/50 hover:border-primary/30'} bg-card/80 backdrop-blur-sm`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-2 rounded-full text-primary-foreground font-bold text-sm">
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">one-time</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.variant} 
                  className="w-full text-lg py-6"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Questions about which plan is right for you?
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            📞 Book a Free Consultation Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;