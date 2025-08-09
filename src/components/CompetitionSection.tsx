import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const CompetitionSection = () => {
  const competitions = [
    {
      title: "Global Startup Pitch Challenge 2025",
      description: "Present your innovative business idea to a panel of leading investors and industry experts. Win funding and mentorship opportunities.",
      prize: "$500",
      participants: "500+",
      deadline: "March 15, 2025",
      status: "Open",
      featured: true
    }
  ];


  return (
    <section id="competition" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6 text-foreground">
            Business Competitions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Participate in prestigious business competitions and showcase your innovative ideas to industry leaders.
          </p>
        </div>

        {/* Active Competitions */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-semibold mb-10 text-foreground">Active Competition</h3>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
            {competitions.map((competition, index) => (
              <Card key={index} className="shadow-glass hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 backdrop-blur-glass border border-border/50 hover:border-primary/50 ring-2 ring-primary/50 bg-gradient-glass shadow-neon">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-gradient-primary text-primary-foreground border-0 shadow-neon backdrop-blur-sm">
                      {competition.status}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-accent to-accent-glow text-accent-foreground border-0 shadow-neon backdrop-blur-sm animate-glow-pulse">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-display text-foreground">{competition.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-8 font-light leading-relaxed">
                    {competition.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm bg-secondary/30 p-3 rounded-lg backdrop-blur-sm">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span>Prize: <strong className="text-primary">{competition.prize}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm bg-secondary/30 p-3 rounded-lg backdrop-blur-sm">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Participants: <strong>{competition.participants}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm bg-secondary/30 p-3 rounded-lg backdrop-blur-sm">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>Deadline: <strong>{competition.deadline}</strong></span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full transition-all duration-300 bg-gradient-primary hover:shadow-neon"
                    variant="default"
                  >
                    <Link to="/competition">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompetitionSection;