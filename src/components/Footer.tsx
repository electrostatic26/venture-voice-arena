import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">B</span>
              </div>
              <h3 className="text-2xl font-bold">BusinessToday</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted source for business news, market insights, and competition opportunities. 
              Stay ahead in today's dynamic business environment.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#news" className="hover:text-primary-foreground transition-colors">Latest News</a></li>
              <li><a href="#competition" className="hover:text-primary-foreground transition-colors">Competitions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Industry Reports</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Finance</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Startups</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Leadership</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 BusinessToday. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/80 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;