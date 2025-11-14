import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingUp, Wallet, Building, PiggyBank, CreditCard, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const FinanceTopics = () => {
  const categories = [
    {
      title: "Personal Finance",
      icon: <Wallet className="w-6 h-6" />,
      description: "Master your personal financial journey",
      articles: [
        {
          title: "Wesley's Emergency Fund Essentials: How Much You Really Need",
          excerpt: "Learn the optimal emergency fund size based on your lifestyle and income to protect against unexpected expenses.",
          readTime: "6 min"
        },
        {
          title: "Ian's Guide: Debt Avalanche vs. Debt Snowball",
          excerpt: "Compare the two most popular debt repayment strategies and find the right approach for your situation.",
          readTime: "8 min"
        },
        {
          title: "Wesley's 50/30/20 Rule: Budgeting Made Simple",
          excerpt: "Discover how this simple budgeting framework can help you allocate your income effectively.",
          readTime: "5 min"
        }
      ]
    },
    {
      title: "Investment Strategies",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Build wealth through smart investing",
      articles: [
        {
          title: "Ian's Dollar-Cost Averaging Strategy",
          excerpt: "Learn how systematic investing can help smooth out market volatility and build long-term wealth.",
          readTime: "7 min"
        },
        {
          title: "Wesley's Index Funds vs. Active Funds Analysis",
          excerpt: "Comprehensive comparison of passive and active investment strategies with real performance data.",
          readTime: "10 min"
        },
        {
          title: "Ian's Dividend Investing: Building Passive Income",
          excerpt: "Explore how dividend-paying stocks can provide steady income and long-term growth potential.",
          readTime: "8 min"
        }
      ]
    },
    {
      title: "Real Estate",
      icon: <Building className="w-6 h-6" />,
      description: "Navigate the property investment landscape",
      articles: [
        {
          title: "Wesley's First-Time Homebuyer's Complete Guide 2025",
          excerpt: "Everything you need to know about buying your first home, from pre-approval to closing.",
          readTime: "12 min"
        },
        {
          title: "Ian's REITs vs. Direct Property Investment Guide",
          excerpt: "Compare real estate investment trusts with direct property ownership for your portfolio.",
          readTime: "9 min"
        },
        {
          title: "Wesley's Real Estate Market Trends 2025",
          excerpt: "Key indicators and trends shaping the real estate market this year and beyond.",
          readTime: "7 min"
        }
      ]
    },
    {
      title: "Retirement Planning",
      icon: <PiggyBank className="w-6 h-6" />,
      description: "Secure your financial future",
      articles: [
        {
          title: "Ian's 401(k) Optimization: Maximizing Employer Matching",
          excerpt: "Strategic approaches to get the most from your employer's retirement benefits.",
          readTime: "6 min"
        },
        {
          title: "Wesley's Roth IRA vs. Traditional IRA Tax Strategy",
          excerpt: "Understand the tax implications and choose the right retirement account for your situation.",
          readTime: "8 min"
        },
        {
          title: "Ian's Retirement Withdrawal Strategies",
          excerpt: "Proven methods for withdrawing retirement funds to maximize longevity and minimize taxes.",
          readTime: "10 min"
        }
      ]
    },
    {
      title: "Credit & Banking",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Optimize your banking and credit",
      articles: [
        {
          title: "Wesley's Credit Score Improvement Strategies",
          excerpt: "Step-by-step guide to boosting your credit score and maintaining excellent credit health.",
          readTime: "7 min"
        },
        {
          title: "Ian's Guide to High-Yield Savings Accounts",
          excerpt: "Find the best savings accounts and strategies to grow your emergency fund faster.",
          readTime: "5 min"
        },
        {
          title: "Wesley's Credit Card Rewards Optimization",
          excerpt: "Master credit card churning and rewards programs to maximize benefits while avoiding debt.",
          readTime: "9 min"
        }
      ]
    },
    {
      title: "Market Analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Stay informed on market trends",
      articles: [
        {
          title: "Ian's Guide: Understanding Market Volatility",
          excerpt: "Learn how market emotions drive volatility and how to make rational investment decisions.",
          readTime: "8 min"
        },
        {
          title: "Wesley's Economic Indicators Guide",
          excerpt: "Decode key economic metrics and their impact on different asset classes and investments.",
          readTime: "11 min"
        },
        {
          title: "Ian's Sector Rotation Strategies",
          excerpt: "Advanced techniques for positioning your portfolio across different market cycles.",
          readTime: "12 min"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-foreground py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <Button 
            asChild
            variant="outline" 
            className="mb-8 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight text-foreground">
            Finance Topics
            <span className="block text-primary drop-shadow-lg">
              by Category
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-muted-foreground font-light">
            Explore comprehensive finance topics organized by category to deepen your financial knowledge and make informed decisions.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-neon">
                    <span className="text-primary-foreground">{category.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-display font-bold text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground font-light">{category.description}</p>
                  </div>
                </div>
                
                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.articles.map((article, articleIndex) => (
                    <Card key={articleIndex} className="bg-gradient-glass backdrop-blur-glass border border-border/50 shadow-glass hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="text-lg font-display text-foreground leading-tight">
                          {article.title}
                        </CardTitle>
                        <Badge className="w-fit bg-primary/20 text-primary border-0">
                          {article.readTime}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-light leading-relaxed mb-4">
                          {article.excerpt}
                        </p>
                        <Button 
                          asChild
                          variant="outline" 
                          size="sm"
                          className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                        >
                          <Link to={`/article/${category.title.toLowerCase().replace(/ /g, '-')}/${articleIndex}`}>
                            Read Article
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FinanceTopics;