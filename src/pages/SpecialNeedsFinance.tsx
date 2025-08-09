import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MoneyCountingGame from "@/components/MoneyCountingGame";
import ShoppingAdventureGame from "@/components/ShoppingAdventureGame";
import CoinCatcherGame from "@/components/CoinCatcherGame";
import BestScoreSection from "@/components/BestScoreSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Calculator, Coins, CreditCard, PiggyBank, Trophy, ArrowLeft, Gamepad2 } from "lucide-react";
import { useState } from "react";
const SpecialNeedsFinance = () => {
  const navigate = useNavigate();
  const [gameOpen, setGameOpen] = useState(false);
  const [shoppingGameOpen, setShoppingGameOpen] = useState(false);
  const [coinCatcherOpen, setCoinCatcherOpen] = useState(false);
  const articles = [{
    title: "What is Money?",
    description: "Learn about coins, bills, and why we use money every day.",
    icon: <Coins className="w-6 h-6" />,
    difficulty: "Beginner"
  }, {
    title: "Saving Your Money",
    description: "How to keep your money safe and watch it grow over time.",
    icon: <PiggyBank className="w-6 h-6" />,
    difficulty: "Beginner"
  }, {
    title: "Using a Bank Card",
    description: "Simple steps to use your debit card safely at stores.",
    icon: <CreditCard className="w-6 h-6" />,
    difficulty: "Intermediate"
  }, {
    title: "Making a Budget",
    description: "Plan how to spend and save your money each month.",
    icon: <Calculator className="w-6 h-6" />,
    difficulty: "Intermediate"
  }];
  const games = [{
    title: "Money Matching Game",
    description: "Match coins and bills with their correct values.",
    difficulty: "Easy",
    color: "bg-green-500"
  }, {
    title: "Shopping Adventure",
    description: "Practice buying things and getting the right change.",
    difficulty: "Medium",
    color: "bg-blue-500"
  }, {
    title: "Savings Challenge",
    description: "Learn to save money for special things you want.",
    difficulty: "Easy",
    color: "bg-purple-500"
  }, {
    title: "Budget Builder",
    description: "Create your own budget and learn to manage money.",
    difficulty: "Hard",
    color: "bg-orange-500"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Money Learning for Everyone
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fun and easy ways to learn about money, saving, and spending. 
            Made especially for people with special needs and Down syndrome.
          </p>
        </div>

        {/* Articles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Learning Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {article.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                      <span className="text-sm text-primary font-medium">{article.difficulty}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Games Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Fun Quiz Games
          </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game, index) => <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 ${game.color} rounded-full flex items-center justify-center`}>
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{game.title}</CardTitle>
                      <span className="text-sm text-primary font-medium">{game.difficulty}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => {
                if (index === 0) {
                  // Money Matching Game
                  setGameOpen(true);
                } else if (index === 1) {
                  // Shopping Adventure
                  setShoppingGameOpen(true);
                }
              }}>
                    Play Game
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Interactive Video Game Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Interactive Video Game</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Coin Catcher Adventure</CardTitle>
                  <span className="text-sm text-primary font-medium">Interactive</span>
                </div>
              </div>
              <CardDescription className="text-base">
                Move your basket to catch falling coins and learn about money values! 
                Collect the right amount to buy fun items in this exciting game.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" 
                onClick={() => setCoinCatcherOpen(true)}
              >
                Play Video Game
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Best Scores Section */}
        <section className="mb-16">
          <BestScoreSection />
        </section>

        {/* Support Section */}
        <section className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Need Help?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These resources are designed to be accessible and easy to understand. 
            Take your time, and don't hesitate to ask for help from family or caregivers.
          </p>
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
        </section>
      </main>

      <MoneyCountingGame open={gameOpen} onClose={() => setGameOpen(false)} />
      <ShoppingAdventureGame open={shoppingGameOpen} onClose={() => setShoppingGameOpen(false)} />
      <CoinCatcherGame open={coinCatcherOpen} onClose={() => setCoinCatcherOpen(false)} />
      <Footer />
    </div>;
};
export default SpecialNeedsFinance;