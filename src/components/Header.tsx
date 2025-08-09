import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-glass text-foreground shadow-glass backdrop-blur-glass border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-neon animate-glow-pulse">
              <span className="font-display font-bold text-lg text-primary-foreground">F</span>
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              FinanceWizz
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => {
                navigate('/finance-topics');
                window.scrollTo(0, 0);
              }}
              className="relative font-medium hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Articles
            </button>
            <button 
              onClick={() => {
                navigate('/competition');
                window.scrollTo(0, 0);
              }}
              className="relative font-medium hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Competition
            </button>
            <button 
              onClick={() => {
                navigate('/special-needs-finance');
                window.scrollTo(0, 0);
              }}
              className="relative font-medium hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Special Needs
            </button>
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-sm">
                  <User className="h-4 w-4" />
                  <span className="text-muted-foreground">{user.email}</span>
                </div>
                <Button 
                  onClick={signOut}
                  variant="outline" 
                  size="sm" 
                  className="bg-background/50 border-border hover:bg-accent/20"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => navigate('/auth')}
                variant="default" 
                size="sm" 
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
              >
                Sign In
              </Button>
            )}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-glass border-border/50">
              <div className="flex flex-col space-y-6 mt-8">
                <button 
                  onClick={() => {
                    navigate('/finance-topics');
                    window.scrollTo(0, 0);
                    setIsOpen(false);
                  }}
                  className="text-left text-lg font-medium hover:text-primary transition-all duration-300 py-2"
                >
                  Articles
                </button>
                <button 
                  onClick={() => {
                    navigate('/competition');
                    window.scrollTo(0, 0);
                    setIsOpen(false);
                  }}
                  className="text-left text-lg font-medium hover:text-primary transition-all duration-300 py-2"
                >
                  Competition
                </button>
                <button 
                  onClick={() => {
                    navigate('/special-needs-finance');
                    window.scrollTo(0, 0);
                    setIsOpen(false);
                  }}
                  className="text-left text-lg font-medium hover:text-primary transition-all duration-300 py-2"
                >
                  Special Needs
                </button>
                
                <div className="border-t border-border/50 pt-6">
                  {user ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span className="text-muted-foreground text-sm">{user.email}</span>
                      </div>
                      <Button 
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                        variant="outline" 
                        className="w-full bg-background/50 border-border hover:bg-accent/20"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => {
                        navigate('/auth');
                        setIsOpen(false);
                      }}
                      className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300"
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;