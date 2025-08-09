-- Create user_article_reads table to track which articles users have read
CREATE TABLE public.user_article_reads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  article_id TEXT NOT NULL,
  article_title TEXT,
  read_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, article_id)
);

-- Create user_game_scores table to track user game scores
CREATE TABLE public.user_game_scores (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  game_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER,
  played_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.user_article_reads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_game_scores ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_article_reads
CREATE POLICY "Users can view their own article reads" 
ON public.user_article_reads 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own article reads" 
ON public.user_article_reads 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for user_game_scores
CREATE POLICY "Users can view their own game scores" 
ON public.user_game_scores 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own game scores" 
ON public.user_game_scores 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_user_article_reads_user_id ON public.user_article_reads(user_id);
CREATE INDEX idx_user_article_reads_article_id ON public.user_article_reads(article_id);
CREATE INDEX idx_user_game_scores_user_id ON public.user_game_scores(user_id);
CREATE INDEX idx_user_game_scores_game_name ON public.user_game_scores(game_name);