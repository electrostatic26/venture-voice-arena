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
    <section id="competition" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Business Competitions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participate in prestigious business competitions and showcase your innovative ideas to industry leaders.
          </p>
        </div>

        {/* Active Competitions */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Active Competitions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {competitions.map((competition, index) => (
              <Card key={index} className={`shadow-card hover:shadow-elegant transition-all duration-300 ${competition.featured ? 'ring-2 ring-primary bg-gradient-card' : 'bg-card'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant={competition.status === 'Open' ? 'default' : 'secondary'}>
                      {competition.status}
                    </Badge>
                    {competition.featured && (
                      <Badge className="bg-primary-glow text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-foreground">{competition.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {competition.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span>Prize: <strong>{competition.prize}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Participants: {competition.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Deadline: {competition.deadline}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
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
          <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Previous Winners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {winners.map((winner, index) => (
              <Card key={index} className="bg-card shadow-card">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary text-primary-foreground">
                    {winner.category}
                  </Badge>
                  <CardTitle className="text-lg text-foreground">{winner.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{winner.achievement}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{winner.description}</p>
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