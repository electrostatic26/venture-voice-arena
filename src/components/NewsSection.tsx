import ArticleCard from "./ArticleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const articles = [
    {
      title: "Budgeting Basics: Your Path to Financial Freedom",
      excerpt: "Creating a budget is the foundation of financial wellness. It's your roadmap to understanding where your money goes and how to make it work better for you.",
      category: "Budgeting",
      readTime: "5 min",
      date: "Dec 15, 2024",
      articleId: "budgeting-basics",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
    },
    {
      title: "Building Your Emergency Fund: A Step-by-Step Guide",
      excerpt: "An emergency fund is your financial safety net. It's money set aside to cover unexpected expenses without derailing your financial goals.",
      category: "Savings",
      readTime: "7 min",
      date: "Dec 12, 2024",
      articleId: "emergency-fund-guide",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop"
    },
    {
      title: "How to Improve Your Credit Score in 6 Months",
      excerpt: "Your credit score affects your ability to get loans, rent apartments, and even some jobs. Here's how to improve it quickly but responsibly.",
      category: "Credit",
      readTime: "6 min",
      date: "Dec 10, 2024",
      articleId: "credit-score-improvement",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
    },
    {
      title: "Investment Basics for Beginners",
      excerpt: "Investing can seem intimidating, but it's one of the most powerful tools for building long-term wealth. Let's break it down into manageable concepts.",
      category: "Investing",
      readTime: "8 min",
      date: "Dec 8, 2024",
      articleId: "investment-basics"
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