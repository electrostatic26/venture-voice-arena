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
    <footer className="bg-gradient-primary text-foreground relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute top-0 left-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-glass backdrop-blur-glass rounded-xl flex items-center justify-center shadow-neon border border-border/30">
                <span className="font-display font-bold text-lg text-primary">B</span>
              </div>
            <h3 className="text-3xl font-display font-bold text-black">
              BusinessToday
            </h3>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md font-light leading-relaxed">
              Your trusted source for business news, market insights, and competition opportunities. 
              Stay ahead in today's dynamic digital business environment.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg">Stay Updated</h4>
              
              {showWebhookInput && (
                <div className="mb-4">
                  <Input 
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="Enter your Zapier webhook URL" 
                    className="bg-gradient-glass backdrop-blur-glass border-border/50 text-foreground placeholder:text-muted-foreground mb-2"
                  />
                  <p className="text-xs text-muted-foreground">
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
                  className="bg-gradient-glass backdrop-blur-glass border-border/50 text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-gradient-primary hover:shadow-neon transition-all duration-300 border-0"
                >
                  {isLoading ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#news" className="hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Latest News</a></li>
              <li><a href="#competition" className="hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Competitions</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Market Analysis</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Industry Reports</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-lg">Categories</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Technology</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Finance</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Startups</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Leadership</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-light">
            © 2024 FinanceWizz. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-all duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-all duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;