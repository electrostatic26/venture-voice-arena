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
    <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
      {imageUrl && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        {!imageUrl && (
          <Badge className="w-fit mb-2 bg-primary text-primary-foreground">
            {category}
          </Badge>
        )}
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{date}</span>
          <span>{readTime} read</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;