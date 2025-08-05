import { Card, CardContent } from "@/components/ui/card";
import trustIcons from "@/assets/trust-icons.jpg";

const GuaranteeSection = () => {
  const trustFeatures = [
    {
      icon: "🔒",
      title: "Secure Checkout",
      description: "Your payment and data are 100% protected"
    },
    {
      icon: "🚀",
      title: "Proven Methods",
      description: "Strategies tested on 500+ successful stores"
    },
    {
      icon: "📞",
      title: "Real Support",
      description: "Direct access to our expert team"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Guarantee */}
          <div className="bg-gradient-primary p-8 rounded-2xl mb-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              🛡 100% Satisfaction Guarantee
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              If you don't love your Elite Sniper setup, we'll work until you do — or refund you. 
              Your success is our reputation.
            </p>
          </div>
          
          {/* Trust Icons */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {trustFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
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
          
          {/* Additional Trust Elements */}
          <div className="bg-card/50 border border-border/50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Why You Can Trust Us</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    500+ successful stores launched
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    24/7 support team available
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    Proven track record since 2020
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    Elite Discord community included
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <img 
                  src={trustIcons} 
                  alt="Trust and Security Icons" 
                  className="w-full h-auto rounded-lg opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;