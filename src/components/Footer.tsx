import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWebhookInput, setShowWebhookInput] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!webhookUrl) {
      setShowWebhookInput(true);
      toast({
        title: "Webhook Required",
        description: "Please enter your Zapier webhook URL to connect this form to your email service",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "BusinessToday Newsletter",
        }),
      });

      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter. Check your Zapier to confirm the integration worked.",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please check your webhook URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="bg-background/95 backdrop-blur-glass border-t border-border/50 text-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-neon">
                <span className="font-display font-bold text-lg text-primary-foreground">F</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground">
                FinanceWizz
              </h3>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md font-light leading-relaxed text-lg">
              Master your financial future with expert insights, market analysis, and investment strategies 
              designed to help you build lasting wealth.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-xl text-foreground">Stay Updated</h4>
              
              {showWebhookInput && (
                <div className="mb-4">
                  <Input 
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="Enter your Zapier webhook URL" 
                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground mb-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    Create a Zap with a webhook trigger to connect this form to your email service
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubscribe} className="flex gap-3 max-w-sm">
                <Input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
                >
                  {isLoading ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-xl text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#news" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base hover-scale story-link"
                >
                  Latest Articles
                </a>
              </li>
              <li>
                <a 
                  href="#competition" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base hover-scale story-link"
                >
                  Competitions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base hover-scale story-link"
                >
                  Market Analysis
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base hover-scale story-link"
                >
                  Investment Guides
                </a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-xl text-foreground">Finance Topics</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base hover-scale story-link"
                >
                  Personal Finance
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base hover-scale story-link"
                >
                  Investment Strategies
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base hover-scale story-link"
                >
                  Cryptocurrency
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base hover-scale story-link"
                >
                  Real Estate
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-base font-light">
            © 2025 FinanceWizz. All rights reserved.
          </p>
          <div className="flex space-x-8 text-base text-muted-foreground mt-4 md:mt-0">
            <a 
              href="#" 
              className="hover:text-primary transition-all duration-300 hover-scale story-link"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-all duration-300 hover-scale story-link"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-all duration-300 hover-scale story-link"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;