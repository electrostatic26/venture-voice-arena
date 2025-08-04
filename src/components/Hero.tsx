import { Button } from "@/components/ui/button";
import heroImage from "@/assets/business-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Business Hero" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Stay Ahead in
          <span className="block text-primary-glow">Business Today</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Get the latest business insights, market analysis, and competition updates 
          that matter to your success.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Read Latest News
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Join Competition
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;