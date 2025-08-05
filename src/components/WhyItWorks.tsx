import comparisonImage from "@/assets/comparison-chart.jpg";

const WhyItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Why It Works (Sniper Advantage)
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl text-muted-foreground italic mb-8 leading-relaxed">
              "Most people waste weeks building the wrong store…<br />
              Elite Entrance Sniper™ is different — it's powered by real product intelligence, conversion data, and elite design."
            </blockquote>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Comparison Visual */}
          <div className="relative">
            <img 
              src={comparisonImage} 
              alt="Generic Store vs Elite Sniper Setup Comparison" 
              className="w-full h-auto rounded-2xl shadow-2xl border border-border"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Comparison Points */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="border-l-4 border-red-500 pl-6 bg-red-500/5 p-4 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-400 mb-2">❌ Generic Fiverr Store</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Template designs everyone uses</li>
                  <li>• Random product selection</li>
                  <li>• No conversion optimization</li>
                  <li>• Zero ongoing support</li>
                  <li>• Weeks of trial and error</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-primary pl-6 bg-primary/5 p-4 rounded-r-lg">
                <h3 className="text-xl font-bold text-primary mb-2">✅ Elite Sniper Setup</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Custom, conversion-tested designs</li>
                  <li>• Data-driven product intelligence</li>
                  <li>• Proven sales funnels included</li>
                  <li>• Elite community & mentorship</li>
                  <li>• Launch in 24-48 hours</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-primary p-6 rounded-xl text-primary-foreground">
              <h4 className="text-xl font-bold mb-3">🎯 The Sniper Difference</h4>
              <p className="text-lg">
                While others spray and pray, we use precision targeting with proven products, 
                battle-tested designs, and data-backed strategies that actually convert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;