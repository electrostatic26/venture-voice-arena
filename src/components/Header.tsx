import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-hero text-primary-foreground shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">B</span>
            </div>
            <h1 className="text-2xl font-bold">BusinessToday</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('news')}
              className="hover:text-primary-glow transition-colors"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection('competition')}
              className="hover:text-primary-glow transition-colors"
            >
              Competition
            </button>
            <Button variant="secondary" size="sm">
              Subscribe
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;