import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, RotateCcw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface ShoppingAdventureGameProps {
  open: boolean;
  onClose: () => void;
}

const ShoppingAdventureGame = ({ open, onClose }: ShoppingAdventureGameProps) => {
  const { user } = useAuth();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [savingScore, setSavingScore] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<number[]>([]);

  const questions = [
    {
      id: 1,
      question: "You buy an apple for $1. You pay with $2. How much change do you get?",
      item: "🍎 $1",
      payment: "💵 $2",
      correctAnswer: 1,
      options: [0, 1, 2, 3],
      unit: "dollar"
    },
    {
      id: 2,
      question: "A toy costs $5. You have $3. How much more do you need?",
      item: "🧸 $5",
      payment: "💰 $3",
      correctAnswer: 2,
      options: [1, 2, 3, 4],
      unit: "dollars"
    },
    {
      id: 3,
      question: "You buy candy for 50¢. You pay with 75¢. What's your change?",
      item: "🍭 50¢",
      payment: "🪙🪙🪙 75¢",
      correctAnswer: 25,
      options: [20, 25, 30, 35],
      unit: "cents"
    },
    {
      id: 4,
      question: "A book costs $8. You pay with a $10 bill. How much change?",
      item: "📚 $8",
      payment: "💵 $10",
      correctAnswer: 2,
      options: [1, 2, 3, 4],
      unit: "dollars"
    },
    {
      id: 5,
      question: "You want to buy 2 cookies at $1 each. How much total?",
      item: "🍪🍪 $1 each",
      payment: "💰 Total cost?",
      correctAnswer: 2,
      options: [1, 2, 3, 4],
      unit: "dollars"
    }
  ];

  // Shuffle options when question changes
  useEffect(() => {
    if (questions[currentQuestion]) {
      const options = [...questions[currentQuestion].options];
      // Simple Fisher-Yates shuffle
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      setShuffledOptions(options);
    }
  }, [currentQuestion]);

  const handleAnswerSelect = (answer: number) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    let newScore = score;
    if (answer === questions[currentQuestion].correctAnswer) {
      newScore = score + 1;
      setScore(newScore);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameCompleted(true);
        console.log('Game completed! Final score:', newScore, 'User:', user?.id);
        saveScore(newScore);
      }
    }, 1500);
  };

  const saveScore = async (finalScore: number = score) => {
    console.log('saveScore called with:', finalScore, 'User:', user?.id);
    if (!user) {
      console.log('No user found, skipping score save');
      return;
    }
    
    setSavingScore(true);
    try {
      const { error } = await supabase
        .from('user_game_scores')
        .insert({
          user_id: user.id,
          game_name: 'Shopping Adventure Game',
          score: finalScore,
          total_questions: questions.length
        });

      if (error) {
        console.error('Error saving score:', error);
        toast.error('Failed to save your score');
      } else {
        console.log('Score saved successfully, dispatching event');
        toast.success('Score saved successfully!');
        // Trigger a custom event to refresh the best scores with score details
        window.dispatchEvent(new CustomEvent('scoreUpdated', { 
          detail: { gameName: 'Shopping Adventure Game', score: finalScore }
        }));
      }
    } catch (error) {
      console.error('Error saving score:', error);
      toast.error('Failed to save your score');
    } finally {
      setSavingScore(false);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Amazing shopping skills! 🛍️";
    if (percentage >= 80) return "Great job shopping! 👏";
    if (percentage >= 60) return "Good shopping! Keep practicing! 😊";
    return "Nice try! Practice makes perfect! 💪";
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            Shopping Adventure Game
          </DialogTitle>
        </DialogHeader>

        {!gameCompleted ? (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex items-center justify-between">
              <Badge variant="secondary">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Score: {score}</span>
              </div>
            </div>

            {/* Question */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-center">
                  {questions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6 space-y-2">
                  <div className="text-2xl">
                    {questions[currentQuestion].item}
                  </div>
                  <div className="text-2xl">
                    {questions[currentQuestion].payment}
                  </div>
                </div>

                {/* Answer Options */}
                <div className="grid grid-cols-2 gap-3">
                  {shuffledOptions.map((option, index) => {
                    let buttonVariant: "default" | "outline" | "destructive" = "outline";
                    let buttonClass = "";

                    if (showResult) {
                      if (selectedAnswer === option) {
                        if (option === questions[currentQuestion].correctAnswer) {
                          buttonVariant = "default";
                          buttonClass = "bg-green-500 hover:bg-green-600 text-white";
                        } else {
                          buttonVariant = "destructive";
                        }
                      }
                      // Don't show correct answer if user got it wrong
                    }

                    return (
                      <Button
                        key={`${currentQuestion}-${option}-${index}`}
                        variant={buttonVariant}
                        className={`h-12 text-lg ${buttonClass}`}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={showResult}
                      >
                        {option} {questions[currentQuestion].unit}
                      </Button>
                    );
                  })}
                </div>

                {showResult && (
                  <div className="mt-4 text-center">
                    {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                      <p className="text-green-600 font-medium">✅ Correct! Great shopping!</p>
                    ) : (
                      <p className="text-red-600 font-medium">
                        ❌ Not quite. Try again next time!
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Game Complete */
          <div className="text-center space-y-6">
            <div className="text-6xl">🛍️</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Shopping Complete!</h3>
              <p className="text-lg mb-4">{getScoreMessage()}</p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-xl font-bold">
                  Final Score: {score} out of {questions.length}
                </span>
              </div>
              {user && (
                <p className="text-sm text-muted-foreground mb-4">
                  {savingScore ? "Saving your score..." : "Score saved to your profile!"}
                </p>
              )}
              {!user && (
                <p className="text-sm text-muted-foreground mb-4">
                  Sign in to save your scores and track your progress!
                </p>
              )}
            </div>
            
            <div className="flex gap-3">
              <Button onClick={resetGame} className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Shop Again
              </Button>
              <Button variant="outline" onClick={onClose} className="flex-1">
                Close Game
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ShoppingAdventureGame;