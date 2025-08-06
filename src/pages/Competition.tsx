import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Calendar, Users, DollarSign, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Competition = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    founderName: "",
    email: "",
    phone: "",
    businessDescription: "",
    pitchDeck: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, pitchDeck: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted!",
      description: "Your competition application has been received. We'll contact you within 5 business days.",
    });

    setFormData({
      companyName: "",
      founderName: "",
      email: "",
      phone: "",
      businessDescription: "",
      pitchDeck: null,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="border-b border-border/50 bg-gradient-glass backdrop-blur-glass">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Competition Details */}
          <Card className="mb-12 shadow-glass hover:shadow-elevated transition-all duration-500 backdrop-blur-glass border border-border/50 ring-2 ring-primary/50 bg-gradient-glass shadow-neon">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-gradient-primary text-primary-foreground border-0 shadow-neon backdrop-blur-sm">
                  Open
                </Badge>
                <Badge className="bg-gradient-to-r from-accent to-accent-glow text-accent-foreground border-0 shadow-neon backdrop-blur-sm animate-glow-pulse">
                  Featured
                </Badge>
              </div>
              <CardTitle className="text-3xl font-display text-foreground">Global Startup Pitch Challenge 2025</CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground mb-8 font-light leading-relaxed text-lg">
                Present your innovative business idea to a panel of leading investors and industry experts. Win funding and mentorship opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 text-sm bg-secondary/30 p-4 rounded-lg backdrop-blur-sm">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-muted-foreground">Prize Pool</div>
                    <div className="font-semibold text-primary text-lg">$100,000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm bg-secondary/30 p-4 rounded-lg backdrop-blur-sm">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-muted-foreground">Participants</div>
                    <div className="font-semibold text-lg">500+</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm bg-secondary/30 p-4 rounded-lg backdrop-blur-sm">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-muted-foreground">Deadline</div>
                    <div className="font-semibold text-lg">March 15, 2025</div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  What You Get
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Direct access to top-tier venture capitalists</li>
                  <li>• 6 months of mentorship from industry leaders</li>
                  <li>• Networking opportunities with fellow entrepreneurs</li>
                  <li>• Media coverage and PR support</li>
                  <li>• Office space in our startup incubator</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card className="shadow-glass backdrop-blur-glass border border-border/50 bg-gradient-glass">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-foreground">Apply Now</CardTitle>
              <p className="text-muted-foreground">Complete the form below to submit your application.</p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your startup name"
                      required
                      className="bg-gradient-glass backdrop-blur-glass border-border/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="founderName" className="block text-sm font-medium mb-2">
                      Founder Name *
                    </label>
                    <Input
                      id="founderName"
                      name="founderName"
                      value={formData.founderName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-gradient-glass backdrop-blur-glass border-border/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-gradient-glass backdrop-blur-glass border-border/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-gradient-glass backdrop-blur-glass border-border/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessDescription" className="block text-sm font-medium mb-2">
                    Business Description *
                  </label>
                  <Textarea
                    id="businessDescription"
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleInputChange}
                    placeholder="Describe your business idea, target market, and how it solves a problem..."
                    rows={4}
                    required
                    className="bg-gradient-glass backdrop-blur-glass border-border/50"
                  />
                </div>

                <div>
                  <label htmlFor="pitchDeck" className="block text-sm font-medium mb-2">
                    Pitch Deck (PDF)
                  </label>
                  <div className="relative">
                    <Input
                      id="pitchDeck"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="bg-gradient-glass backdrop-blur-glass border-border/50"
                    />
                    <Upload className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload your pitch deck (PDF format, max 10MB)
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-gradient-primary hover:shadow-neon transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Competition;