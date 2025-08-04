import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl?: string;
}

const ArticleCard = ({ title, excerpt, category, readTime, date, imageUrl }: ArticleCardProps) => {
  return (
    <Card className="bg-gradient-glass backdrop-blur-glass border border-border/50 shadow-glass hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 group cursor-pointer overflow-hidden">
      {imageUrl && (
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
          <Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground border-0 shadow-neon backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        {!imageUrl && (
          <Badge className="w-fit mb-3 bg-gradient-primary text-primary-foreground border-0 shadow-neon backdrop-blur-sm">
            {category}
          </Badge>
        )}
        <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-all duration-300 line-clamp-2 group-hover:drop-shadow-lg">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-6 line-clamp-3 font-light leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <span className="font-medium">{date}</span>
          <span className="px-2 py-1 bg-secondary/50 rounded-full text-xs backdrop-blur-sm">{readTime} read</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;