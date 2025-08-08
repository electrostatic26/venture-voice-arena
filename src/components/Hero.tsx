import { Button } from "@/components/ui/button";
import heroImage from "@/assets/futuristic-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-hero text-foreground py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img 
          src={heroImage} 
          alt="Futuristic Business" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight animate-slide-up text-foreground">
          Master Your
          <span className="block text-primary drop-shadow-lg">
            Financial Future
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-muted-foreground font-light animate-slide-up" style={{animationDelay: '0.2s'}}>
          Get the latest financial insights, market analysis, and investment strategies 
          to grow your wealth and secure your financial future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-10 py-4 font-medium"
            onClick={() => scrollToSection('news')}
          >
            Read Finance News
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-10 py-4 font-medium border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-neon transition-all duration-300"
            onClick={() => scrollToSection('competition')}
          >
            Join Competition
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;