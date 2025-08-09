import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Coins, Star, RotateCcw, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface MoneyCountingGameProps {
  open: boolean;
  onClose: () => void;
}

const MoneyCountingGame = ({ open, onClose }: MoneyCountingGameProps) => {
  const { user } = useAuth();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [savingScore, setSavingScore] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Count the pennies:",
      coins: "🪙🪙🪙",
      correctAnswer: 3,
      options: [2, 3, 4, 5]
    },
    {
      id: 2,
      question: "How much is this worth?",
      coins: "💵 (One Dollar)",
      correctAnswer: 100,
      options: [50, 75, 100, 125],
      unit: "cents"
    },
    {
      id: 3,
      question: "Count these nickels:",
      coins: "🪙🪙 (5¢ each)",
      correctAnswer: 10,
      options: [5, 10, 15, 20],
      unit: "cents"
    },
    {
      id: 4,
      question: "How many quarters make $1?",
      coins: "🪙 = 25¢",
      correctAnswer: 4,
      options: [2, 3, 4, 5]
    },
    {
      id: 5,
      question: "What's 2 + 3 pennies?",
      coins: "🪙🪙 + 🪙🪙🪙",
      correctAnswer: 5,
      options: [4, 5, 6, 7]
    }
  ];

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
        saveScore(newScore);
      }
    }, 1500);
  };

  const saveScore = async (finalScore: number = score) => {
    if (!user) return;
    
    setSavingScore(true);
    try {
      const { error } = await supabase
        .from('user_game_scores')
        .insert({
          user_id: user.id,
          game_name: 'Money Counting Game',
          score: finalScore,
          total_questions: questions.length
        });

      if (error) {
        console.error('Error saving score:', error);
        toast.error('Failed to save your score');
      } else {
        toast.success('Score saved successfully!');
        // Trigger a custom event to refresh the best scores
        window.dispatchEvent(new CustomEvent('scoreUpdated'));
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
    if (percentage === 100) return "Perfect! You're a money expert! 🌟";
    if (percentage >= 80) return "Great job! You're really good with money! 👏";
    if (percentage >= 60) return "Good work! Keep practicing! 😊";
    return "Nice try! Practice makes perfect! 💪";
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-primary" />
            Money Counting Game
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
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">
                    {questions[currentQuestion].coins}
                  </div>
                </div>

                {/* Answer Options */}
                <div className="grid grid-cols-2 gap-3">
                  {questions[currentQuestion].options.map((option, index) => {
                    let buttonVariant: "default" | "outline" | "destructive" | "secondary" = "outline";
                    let buttonClass = "";

                    if (showResult) {
                      if (selectedAnswer === option) {
                        if (option === questions[currentQuestion].correctAnswer) {
                          buttonVariant = "default";
                          buttonClass = "bg-green-500 hover:bg-green-600 text-white";
                        } else {
                          buttonVariant = "destructive";
                        }
                      } else if (option === questions[currentQuestion].correctAnswer) {
                        buttonVariant = "default";
                        buttonClass = "bg-green-500 hover:bg-green-600 text-white";
                      }
                    }

                    return (
                      <Button
                        key={index}
                        variant={buttonVariant}
                        className={`h-12 text-lg ${buttonClass}`}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={showResult}
                      >
                        {option}
                        {questions[currentQuestion].unit && ` ${questions[currentQuestion].unit}`}
                      </Button>
                    );
                  })}
                </div>

                {showResult && (
                  <div className="mt-4 text-center">
                    {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                      <p className="text-green-600 font-medium">✅ Correct! Great job!</p>
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
            <div className="text-6xl">🎉</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Game Complete!</h3>
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
                Play Again
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

export default MoneyCountingGame;