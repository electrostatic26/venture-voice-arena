import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 text-center">
            About FinanceWizz
          </h1>
          
          <Card className="bg-gradient-glass backdrop-blur-glass border-border/50 shadow-glass p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  FinanceWizz is dedicated to making financial literacy accessible and engaging for students of all backgrounds. We believe that understanding money management is a crucial life skill that should be available to everyone.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Meet the Co-Founders
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon flex-shrink-0">
                      <span className="font-display font-bold text-2xl text-primary-foreground">IL</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Ian Law</h3>
                      <p className="text-muted-foreground">
                        High School Student at Irvington
                      </p>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        Co-founder passionate about making financial education accessible to all students through interactive learning.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon flex-shrink-0">
                      <span className="font-display font-bold text-2xl text-primary-foreground">WR</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Wesley Ren</h3>
                      <p className="text-muted-foreground">
                        High School Student at Irvington
                      </p>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        Co-founder dedicated to empowering students with essential money management skills through engaging digital experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  What We Offer
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Interactive games to practice financial concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Comprehensive articles on personal finance topics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Inclusive education resources for students with special needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Competitions to make learning fun and rewarding</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
