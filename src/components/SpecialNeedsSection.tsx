import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, GamepadIcon, Heart } from "lucide-react";

const SpecialNeedsSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/special-needs-finance");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Financial Education for Special Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering individuals with Down syndrome and special needs through accessible 
            financial education, interactive learning materials, and engaging games.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Educational Articles</CardTitle>
              <CardDescription>
                Simple, easy-to-understand finance articles tailored for special needs learners
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GamepadIcon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Interactive Games</CardTitle>
              <CardDescription>
                Fun, educational games that teach money management and financial concepts
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Supportive Learning</CardTitle>
              <CardDescription>
                Designed with care for individuals with Down syndrome and special needs
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleLearnMore}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Explore Learning Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialNeedsSection;