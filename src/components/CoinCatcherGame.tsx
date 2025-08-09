import { useState, useEffect, useRef, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Trophy, RotateCcw } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface CoinCatcherGameProps {
  open: boolean;
  onClose: () => void;
}

interface Coin {
  id: number;
  x: number;
  y: number;
  value: number;
  type: 'penny' | 'nickel' | 'dime' | 'quarter';
}

interface Player {
  x: number;
  width: 60;
}

const COIN_TYPES = [
  { type: 'penny' as const, value: 1, color: '#CD7F32', size: 20 },
  { type: 'nickel' as const, value: 5, color: '#C0C0C0', size: 22 },
  { type: 'dime' as const, value: 10, color: '#E5E5E5', size: 18 },
  { type: 'quarter' as const, value: 25, color: '#F5F5DC', size: 24 },
];

const TARGETS = [
  { 
    amount: 25, 
    item: "Gum", 
    lesson: "25 cents is a quarter! One quarter coin equals 25 pennies.",
    question: "Should you spend all your money on gum?",
    goodChoice: "Save some money for later",
    badChoice: "Spend it all on gum"
  },
  { 
    amount: 50, 
    item: "Sticker", 
    lesson: "50 cents is half a dollar! You can make 50¢ with 2 quarters or 5 dimes.",
    question: "You have 75¢. If you buy this 50¢ sticker, how much will you have left?",
    goodChoice: "25¢ left over",
    badChoice: "0¢ left over"
  },
  { 
    amount: 75, 
    item: "Pencil", 
    lesson: "75 cents is three quarters! Always good to buy things you need for school.",
    question: "Is a pencil a NEED or a WANT?",
    goodChoice: "A pencil is a NEED for school",
    badChoice: "A pencil is just a WANT"
  },
  { 
    amount: 100, 
    item: "Toy Car", 
    lesson: "100 cents equals 1 dollar! You can save money to buy bigger things you want.",
    question: "What's the best way to get money for toys?",
    goodChoice: "Save money over time",
    badChoice: "Ask for money every day"
  },
];

const CoinCatcherGame = ({ open, onClose }: CoinCatcherGameProps) => {
  const { user } = useAuth();
  const [gameState, setGameState] = useState<'playing' | 'complete' | 'ready' | 'lesson' | 'question'>('ready');
  const [score, setScore] = useState(0);
  const [currentTarget, setCurrentTarget] = useState(0);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [player, setPlayer] = useState<Player>({ x: 250, width: 60 });
  const [gameTime, setGameTime] = useState(0);
  const [showingLesson, setShowingLesson] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const gameLoopRef = useRef<NodeJS.Timeout>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const gameWidth = 500;
  const gameHeight = 400;

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setCurrentTarget(0);
    setCoins([]);
    setPlayer({ x: gameWidth / 2 - 30, width: 60 });
    setGameTime(0);
    setCorrectAnswers(0);
    setShowingLesson(false);
  };

  const spawnCoin = useCallback(() => {
    const coinType = COIN_TYPES[Math.floor(Math.random() * COIN_TYPES.length)];
    const newCoin: Coin = {
      id: Date.now() + Math.random(),
      x: Math.random() * (gameWidth - 30),
      y: -30,
      value: coinType.value,
      type: coinType.type,
    };
    setCoins(prev => [...prev, newCoin]);
  }, []);

  const movePlayer = useCallback((direction: 'left' | 'right') => {
    setPlayer(prev => ({
      ...prev,
      x: Math.max(0, Math.min(gameWidth - prev.width, 
        prev.x + (direction === 'left' ? -15 : 15)))
    }));
  }, []);

  const gameLoop = useCallback(() => {
    if (gameState !== 'playing') return;

    setGameTime(prev => prev + 1);

    // Spawn coins occasionally
    if (Math.random() < 0.03) {
      spawnCoin();
    }

    // Move coins down and check collisions
    setCoins(prev => {
      const updatedCoins = prev
        .map(coin => ({ ...coin, y: coin.y + 3 }))
        .filter(coin => {
          // Check collision with player
          if (coin.y + 30 >= gameHeight - 60 && 
              coin.x + 15 >= player.x && 
              coin.x <= player.x + player.width) {
            setScore(s => s + coin.value);
            toast(`+${coin.value}¢!`, { duration: 1000 });
            return false; // Remove coin
          }
          // Remove coins that fall off screen
          return coin.y < gameHeight;
        });
      
      return updatedCoins;
    });

    // Check if target reached
    const target = TARGETS[currentTarget];
    if (target && score >= target.amount && !showingLesson) {
      setShowingLesson(true);
      setGameState('lesson');
      setCoins([]); // Clear coins when showing lesson
    }
  }, [gameState, player.x, score, currentTarget, spawnCoin, showingLesson]);

  const handleLessonComplete = () => {
    setGameState('question');
  };

  const handleAnswerChoice = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      toast("Great job! That's the right choice! 🎉");
    } else {
      toast("Let's think about that again! 🤔");
    }
    
    if (currentTarget === TARGETS.length - 1) {
      setGameState('complete');
      saveScore();
    } else {
      setCurrentTarget(prev => prev + 1);
      setShowingLesson(false);
      setGameState('playing');
    }
  };
  

  const saveScore = async () => {
    if (!user) return;
    
    try {
      await supabase.from('user_game_scores').insert({
        user_id: user.id,
        game_name: 'coin_catcher',
        score: score,
      });
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  // Game loop
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(gameLoop, 50);
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameLoop, gameState]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        movePlayer('left');
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        movePlayer('right');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState, movePlayer]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    // Draw background
    ctx.fillStyle = '#e3f2fd';
    ctx.fillRect(0, 0, gameWidth, gameHeight);

    // Draw coins
    coins.forEach(coin => {
      const coinType = COIN_TYPES.find(t => t.type === coin.type)!;
      ctx.fillStyle = coinType.color;
      ctx.beginPath();
      ctx.arc(coin.x + 15, coin.y + 15, coinType.size / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw value
      ctx.fillStyle = '#333';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`${coin.value}¢`, coin.x + 15, coin.y + 20);
    });

    // Draw player (basket)
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(player.x, gameHeight - 60, player.width, 40);
    ctx.fillStyle = '#D2691E';
    ctx.fillRect(player.x + 5, gameHeight - 55, player.width - 10, 30);
    
    // Draw basket handle
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, gameHeight - 40, 15, Math.PI, 0);
    ctx.stroke();
  }, [coins, player, gameState]);

  const currentTargetData = TARGETS[currentTarget];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Coins className="w-6 h-6" />
            Coin Catcher Game
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {gameState === 'ready' && (
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Learn About Money!</h3>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <p>• Use arrow keys or A/D to move your basket</p>
                  <p>• Catch falling coins to collect money</p>
                  <p>• Learn about coin values and smart spending</p>
                  <p>• Make good money choices to complete the game!</p>
                </div>
                <Button onClick={startGame} size="lg" className="mt-4">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          )}

          {gameState === 'lesson' && (
            <Card className="border-primary bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-primary">Money Lesson!</h3>
                <div className="mb-4">
                  <div className="text-6xl mb-2">🎉</div>
                  <p className="text-lg font-semibold mb-2">
                    You earned {TARGETS[currentTarget]?.amount}¢ for a {TARGETS[currentTarget]?.item}!
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 mb-4">
                  <p className="text-base">
                    {TARGETS[currentTarget]?.lesson}
                  </p>
                </div>
                <Button onClick={handleLessonComplete} size="lg">
                  Continue to Question
                </Button>
              </CardContent>
            </Card>
          )}

          {gameState === 'question' && (
            <Card className="border-blue-500 bg-blue-50 dark:bg-blue-900/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Money Question!</h3>
                <div className="mb-6">
                  <p className="text-lg mb-4">
                    {TARGETS[currentTarget]?.question}
                  </p>
                </div>
                <div className="space-y-3">
                  <Button 
                    onClick={() => handleAnswerChoice(true)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="lg"
                  >
                    {TARGETS[currentTarget]?.goodChoice}
                  </Button>
                  <Button 
                    onClick={() => handleAnswerChoice(false)}
                    variant="outline"
                    className="w-full border-red-500 text-red-600 hover:bg-red-50"
                    size="lg"
                  >
                    {TARGETS[currentTarget]?.badChoice}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {gameState === 'playing' && (
            <>
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold">Money Saved: {score}¢</div>
                {currentTargetData && (
                  <div className="text-lg">
                    Goal: {currentTargetData.amount}¢ for {currentTargetData.item}
                  </div>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  💡 Tip: Each coin has different values! Quarters (25¢) are worth more than pennies (1¢)
                </p>
              </div>

              <div className="relative border-2 border-primary rounded-lg overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={gameWidth}
                  height={gameHeight}
                  className="block"
                />
              </div>

              <div className="flex gap-2 justify-center">
                <Button onClick={() => movePlayer('left')} variant="outline">
                  ← Move Left
                </Button>
                <Button onClick={() => movePlayer('right')} variant="outline">
                  Move Right →
                </Button>
              </div>
            </>
          )}

          {gameState === 'complete' && (
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Money Master!</h3>
                <p className="text-lg mb-2">
                  You collected {score}¢ and learned about smart money choices!
                </p>
                <p className="text-base text-muted-foreground mb-4">
                  You answered {correctAnswers} out of {TARGETS.length} money questions correctly!
                </p>
                <div className="flex gap-2 justify-center">
                  <Button onClick={startGame} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Play Again
                  </Button>
                  <Button onClick={onClose}>Close</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoinCatcherGame;