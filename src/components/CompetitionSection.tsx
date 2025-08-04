import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Users, DollarSign } from "lucide-react";

const CompetitionSection = () => {
  const competitions = [
    {
      title: "Global Startup Pitch Challenge 2024",
      description: "Present your innovative business idea to a panel of leading investors and industry experts. Win funding and mentorship opportunities.",
      prize: "$100,000",
      participants: "500+",
      deadline: "March 15, 2024",
      status: "Open",
      featured: true
    },
    {
      title: "Sustainable Business Innovation Award",
      description: "Showcase solutions that drive positive environmental and social impact while maintaining profitability and scalability.",
      prize: "$50,000",
      participants: "300+",
      deadline: "April 20, 2024",
      status: "Open",
      featured: false
    },
    {
      title: "FinTech Disruption Competition",
      description: "Develop cutting-edge financial technology solutions that address real-world challenges in banking, payments, or investment.",
      prize: "$75,000",
      participants: "450+",
      deadline: "May 10, 2024",
      status: "Coming Soon",
      featured: false
    }
  ];

  const winners = [
    {
      name: "EcoLogistics Pro",
      category: "Supply Chain Innovation",
      achievement: "Winner - Green Business Award 2023",
      description: "Revolutionary AI-powered logistics platform reducing carbon footprint by 40%"
    },
    {
      name: "HealthTech Solutions",
      category: "Healthcare Technology",
      achievement: "Winner - Digital Health Challenge 2023",
      description: "Telemedicine platform improving rural healthcare access for 100,000+ patients"
    },
    {
      name: "SmartRetail Analytics",
      category: "Retail Technology",
      achievement: "Winner - Retail Innovation Prize 2023",
      description: "AI-driven retail analytics platform increasing sales by 25% for small businesses"
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
          <h2 className="text-5xl font-display font-bold mb-6 text-foreground bg-gradient-neon bg-clip-text text-transparent animate-gradient-shift bg-300%">
            Business Competitions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Participate in prestigious business competitions and showcase your innovative ideas to industry leaders.
          </p>
        </div>

        {/* Active Competitions */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-semibold mb-10 text-foreground">Active Competitions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {competitions.map((competition, index) => (
              <Card key={index} className={`shadow-glass hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 backdrop-blur-glass border border-border/50 hover:border-primary/50 ${competition.featured ? 'ring-2 ring-primary/50 bg-gradient-glass shadow-neon' : 'bg-gradient-glass'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={competition.status === 'Open' ? 'default' : 'secondary'} className="bg-gradient-primary text-primary-foreground border-0 shadow-neon backdrop-blur-sm">
                      {competition.status}
                    </Badge>
                    {competition.featured && (
                      <Badge className="bg-gradient-to-r from-accent to-accent-glow text-accent-foreground border-0 shadow-neon backdrop-blur-sm animate-glow-pulse">
                        Featured
                      </Badge>
                    )}
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
                    className={`w-full transition-all duration-300 ${competition.featured ? 'bg-gradient-primary hover:shadow-neon' : 'border-primary/50 hover:bg-primary/10 hover:border-primary'}`}
                    disabled={competition.status !== 'Open'}
                    variant={competition.featured ? 'default' : 'outline'}
                  >
                    {competition.status === 'Open' ? 'Apply Now' : 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Previous Winners */}
        <div>
          <h3 className="text-3xl font-display font-semibold mb-10 text-foreground flex items-center gap-3">
            <Trophy className="w-8 h-8 text-primary animate-glow-pulse" />
            Previous Winners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <Card key={index} className="bg-gradient-glass backdrop-blur-glass border border-border/50 shadow-glass hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mb-3 bg-gradient-primary text-primary-foreground border-0 shadow-neon backdrop-blur-sm">
                    {winner.category}
                  </Badge>
                  <CardTitle className="text-lg font-display text-foreground">{winner.name}</CardTitle>
                  <p className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">{winner.achievement}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-light leading-relaxed">{winner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;