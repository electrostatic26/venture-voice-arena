import ArticleCard from "./ArticleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const articles = [
    {
      title: "Federal Reserve Signals Rate Cuts Amid Economic Uncertainty",
      excerpt: "The Fed hints at potential interest rate cuts as inflation cools and economic growth slows, creating opportunities for investors and borrowers alike.",
      category: "Monetary Policy",
      readTime: "5 min",
      date: "Today",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
    },
    {
      title: "Bitcoin Breaks $45K as Institutional Adoption Accelerates",
      excerpt: "Major corporations and financial institutions continue to embrace cryptocurrency, driving Bitcoin to new monthly highs and boosting market confidence.",
      category: "Cryptocurrency",
      readTime: "7 min",
      date: "Yesterday",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop"
    },
    {
      title: "ESG Investing Reaches Record $30 Trillion Globally",
      excerpt: "Sustainable investing continues its rapid growth as investors prioritize environmental, social, and governance factors in their portfolio decisions.",
      category: "ESG Investing",
      readTime: "6 min",
      date: "2 days ago",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
    },
    {
      title: "Stock Market Volatility: Expert Strategies for Protection",
      excerpt: "Financial advisors share proven techniques for protecting portfolios during market turbulence while maintaining long-term growth potential.",
      category: "Investment Strategy",
      readTime: "4 min",
      date: "3 days ago"
    },
    {
      title: "Real Estate Investment Trusts (REITs) See Strong Returns",
      excerpt: "REITs outperform traditional stocks as investors seek income-generating assets and portfolio diversification in uncertain economic times.",
      category: "Real Estate",
      readTime: "8 min",
      date: "4 days ago"
    },
    {
      title: "Personal Finance Apps Revolutionize Budgeting Habits",
      excerpt: "New AI-powered financial apps are helping millions better manage their money, track expenses, and achieve their savings goals more effectively.",
      category: "Personal Finance",
      readTime: "5 min",
      date: "5 days ago"
    }
  ];

  return (
    <section id="news" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6 text-foreground">
            Latest Finance News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Stay informed with our comprehensive coverage of financial markets, investment strategies, and economic insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-10 py-4 font-medium"
          >
            <Link 
              to="/finance-topics" 
              onClick={() => window.scrollTo(0, 0)}
            >
              Read More Finance Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;