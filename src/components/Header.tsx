import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-glass text-foreground shadow-glass backdrop-blur-glass border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-neon animate-glow-pulse">
              <span className="font-display font-bold text-lg text-primary-foreground">B</span>
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              BusinessToday
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('news')}
              className="relative font-medium hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection('competition')}
              className="relative font-medium hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Competition
            </button>
            <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-neon transition-all duration-300">
              Subscribe
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;