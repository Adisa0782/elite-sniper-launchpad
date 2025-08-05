import HeroSection from "@/components/HeroSection";
import ValueStack from "@/components/ValueStack";
import WhyItWorks from "@/components/WhyItWorks";
import Testimonials from "@/components/Testimonials";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import LeadCapture from "@/components/LeadCapture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueStack />
      <WhyItWorks />
      <Testimonials />
      <GuaranteeSection />
      <PricingSection />
      <LeadCapture />
    </div>
  );
};

export default Index;
