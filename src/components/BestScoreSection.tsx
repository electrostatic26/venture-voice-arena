import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface GameScore {
  id: string;
  game_name: string;
  score: number;
  total_questions: number;
  played_at: string;
}

const BestScoreSection = () => {
  const { user } = useAuth();
  const [bestScores, setBestScores] = useState<GameScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchBestScores();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchBestScores = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_game_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('score', { ascending: false });

      if (error) {
        console.error('Error fetching scores:', error);
        return;
      }

      // Get best score for each game
      const gameMap = new Map<string, GameScore>();
      data?.forEach((score) => {
        const existing = gameMap.get(score.game_name);
        if (!existing || score.score > existing.score) {
          gameMap.set(score.game_name, score);
        }
      });

      setBestScores(Array.from(gameMap.values()));
    } catch (error) {
      console.error('Error fetching scores:', error);
    } finally {
      setLoading(false);
    }
  };

  const getScorePercentage = (score: number, total: number) => {
    return Math.round((score / total) * 100);
  };

  const getScoreBadgeVariant = (percentage: number) => {
    if (percentage === 100) return "default";
    if (percentage >= 80) return "secondary";
    return "outline";
  };

  if (!user) {
    return (
      <Card className="bg-muted/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-primary" />
            <CardTitle className="text-xl">Your Best Scores</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            Sign in to track your game scores and see your progress!
          </p>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="bg-muted/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-primary" />
            <CardTitle className="text-xl">Your Best Scores</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            Loading your scores...
          </p>
        </CardContent>
      </Card>
    );
  }

  if (bestScores.length === 0) {
    return (
      <Card className="bg-muted/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-primary" />
            <CardTitle className="text-xl">Your Best Scores</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            Play some games to see your best scores here!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-primary" />
          <CardTitle className="text-xl">Your Best Scores</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bestScores.map((gameScore) => {
            const percentage = getScorePercentage(gameScore.score, gameScore.total_questions);
            return (
              <div key={gameScore.id} className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{gameScore.game_name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {gameScore.score} out of {gameScore.total_questions} correct
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getScoreBadgeVariant(percentage)}>
                    {percentage}%
                  </Badge>
                  {percentage === 100 && (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BestScoreSection;