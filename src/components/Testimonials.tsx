import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This setup made my first sales within 48 hours. The store design and product selection were spot on!",
      author: "Sarah M.",
      result: "First sale in 48 hours",
      avatar: "👩‍💼"
    },
    {
      quote: "Everything was done. I just ran the ads and started making money. No technical headaches, just results.",
      author: "Mike T.",
      result: "$3,200 first month",
      avatar: "👨‍💻"
    },
    {
      quote: "The Elite Sniper system is exactly what I needed. Professional setup without the months of learning curve.",
      author: "Jessica L.",
      result: "5-figure month achieved",
      avatar: "👩‍🚀"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Real Results from Real People
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of successful entrepreneurs who chose the Elite path to dropshipping success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-accent text-xl mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <blockquote className="text-lg text-foreground italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-primary font-semibold text-sm">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-bold mr-2">📈</span>
            <span className="text-primary font-semibold">500+ Successful Stores Launched</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;