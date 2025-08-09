import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MoneyCountingGame from "@/components/MoneyCountingGame";
import ShoppingAdventureGame from "@/components/ShoppingAdventureGame";
import CoinCatcherGame from "@/components/CoinCatcherGame";
import { supabase } from "@/integrations/supabase/client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Calculator, Coins, CreditCard, PiggyBank, Trophy, ArrowLeft, Gamepad2 } from "lucide-react";
import { useState, useEffect } from "react";
const SpecialNeedsFinance = () => {
  const navigate = useNavigate();
  const [gameOpen, setGameOpen] = useState(false);
  const [shoppingGameOpen, setShoppingGameOpen] = useState(false);
  const [coinCatcherOpen, setCoinCatcherOpen] = useState(false);
  const [bestScores, setBestScores] = useState<Record<string, number>>({});
  
  // Fetch best scores on component mount
  useEffect(() => {
    const fetchBestScores = async () => {
      try {
        const { data } = await supabase
          .from('user_game_scores')
          .select('game_name, score')
          .order('score', { ascending: false });
        
        if (data) {
          const scores: Record<string, number> = {};
          data.forEach(record => {
            if (!scores[record.game_name] || scores[record.game_name] < record.score) {
              scores[record.game_name] = record.score;
            }
          });
          setBestScores(scores);
        }
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };
    
    fetchBestScores();

    // Set up real-time listener for score updates
    const channel = supabase
      .channel('score-updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'user_game_scores'
        },
        () => {
          fetchBestScores(); // Refetch scores when new score is added
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

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
    color: "bg-green-500",
    gameKey: "Money Counting Game"
  }, {
    title: "Shopping Adventure",
    description: "Practice buying things and getting the right change.",
    difficulty: "Medium",
    color: "bg-blue-500",
    gameKey: "Shopping Adventure Game"
  }, {
    title: "Savings Challenge",
    description: "Learn to save money for special things you want.",
    difficulty: "Easy",
    color: "bg-purple-500",
    gameKey: "savings_challenge"
  }, {
    title: "Budget Builder",
    description: "Create your own budget and learn to manage money.",
    difficulty: "Hard",
    color: "bg-orange-500",
    gameKey: "budget_builder"
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
            <h2 className="text-3xl font-bold text-foreground">Fun Quiz Games</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game, index) => <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer relative">
                <CardHeader>
                  {/* Best Score Badge - shows placeholder if no score yet */}
                  <div className="absolute top-4 right-4">
                    {bestScores[game.gameKey] ? (
                      <div className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        Best: {bestScores[game.gameKey]}
                      </div>
                    ) : (
                      <div className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        No Score
                      </div>
                    )}
                  </div>
                  
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
          
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-background via-purple-50/30 to-background dark:from-background dark:via-purple-950/20 dark:to-background">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-foreground">Coin Catcher Adventure</CardTitle>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded-full">Interactive Game</span>
                </div>
              </div>
              <CardDescription className="text-base text-muted-foreground">
                Move your basket to catch falling coins and learn about money values! 
                Collect the right amount to buy fun items while learning smart money choices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]" 
                onClick={() => setCoinCatcherOpen(true)}
                size="lg"
              >
                <Gamepad2 className="w-4 h-4 mr-2" />
                Play Video Game
              </Button>
            </CardContent>
          </Card>
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