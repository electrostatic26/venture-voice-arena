import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

const ArticleDetail = () => {
  const { category, articleIndex } = useParams();

  // Article database - matches the structure from FinanceTopics
  const articlesDatabase: Record<string, any[]> = {
    "personal-finance": [
      {
        title: "Emergency Fund Essentials: How Much You Really Need",
        excerpt: "Learn the optimal emergency fund size based on your lifestyle and income to protect against unexpected expenses.",
        readTime: "6 min",
        category: "Personal Finance",
        author: "Sarah Johnson",
        date: "March 15, 2024",
        content: `
          <h2>Why Emergency Funds Matter</h2>
          <p>An emergency fund is your financial safety net, designed to cover unexpected expenses without derailing your financial goals. Whether it's a sudden job loss, medical emergency, or major car repair, having readily available cash can prevent you from going into debt.</p>
          
          <h2>The Standard 3-6 Month Rule</h2>
          <p>Most financial experts recommend saving 3-6 months' worth of living expenses. However, this is a general guideline that may not fit everyone's situation. The right amount depends on several factors:</p>
          
          <ul>
            <li><strong>Job stability:</strong> If you work in a volatile industry or have irregular income, aim for 6-12 months</li>
            <li><strong>Family situation:</strong> Single individuals might need less than families with children</li>
            <li><strong>Health considerations:</strong> Chronic health issues may require a larger fund</li>
            <li><strong>Home ownership:</strong> Homeowners should consider potential major repairs</li>
          </ul>
          
          <h2>Building Your Emergency Fund</h2>
          <p>Start small and be consistent. Even $500 can cover many unexpected expenses. Here's a step-by-step approach:</p>
          
          <ol>
            <li>Calculate your monthly essential expenses</li>
            <li>Set an initial goal of $1,000</li>
            <li>Automate transfers to a separate savings account</li>
            <li>Gradually increase to 3-6 months of expenses</li>
            <li>Keep the money in a high-yield savings account for easy access</li>
          </ol>
          
          <h2>When to Use Your Emergency Fund</h2>
          <p>Reserve your emergency fund for true emergencies: job loss, medical bills, major home repairs, or car problems needed for work. Avoid using it for vacations, shopping, or planned expenses.</p>
        `
      },
      {
        title: "Debt Avalanche vs. Debt Snowball: Which Strategy Works?",
        excerpt: "Compare the two most popular debt repayment strategies and find the right approach for your situation.",
        readTime: "8 min",
        category: "Personal Finance",
        author: "Michael Chen",
        date: "March 12, 2024",
        content: `
          <h2>Understanding Debt Repayment Strategies</h2>
          <p>When you're drowning in debt, having a clear strategy can be the difference between success and failure. The two most popular methods are the debt avalanche and debt snowball approaches.</p>
          
          <h2>The Debt Avalanche Method</h2>
          <p>This mathematically optimal approach focuses on paying off debts with the highest interest rates first:</p>
          
          <ul>
            <li>List all debts by interest rate (highest to lowest)</li>
            <li>Make minimum payments on all debts</li>
            <li>Put any extra money toward the highest-rate debt</li>
            <li>Once paid off, move to the next highest rate</li>
          </ul>
          
          <p><strong>Pros:</strong> Saves the most money in interest over time</p>
          <p><strong>Cons:</strong> Can be psychologically challenging if high-rate debts are large</p>
          
          <h2>The Debt Snowball Method</h2>
          <p>This psychologically-driven approach focuses on paying off the smallest balances first:</p>
          
          <ul>
            <li>List all debts by balance (smallest to largest)</li>
            <li>Make minimum payments on all debts</li>
            <li>Put any extra money toward the smallest balance</li>
            <li>Once paid off, move to the next smallest balance</li>
          </ul>
          
          <p><strong>Pros:</strong> Provides quick wins and psychological momentum</p>
          <p><strong>Cons:</strong> May cost more in interest over time</p>
          
          <h2>Which Strategy Should You Choose?</h2>
          <p>The best strategy depends on your personality and situation:</p>
          
          <ul>
            <li><strong>Choose debt avalanche if:</strong> You're motivated by saving money and can stay disciplined</li>
            <li><strong>Choose debt snowball if:</strong> You need psychological wins to stay motivated</li>
            <li><strong>Hybrid approach:</strong> Start with snowball for momentum, then switch to avalanche</li>
          </ul>
        `
      },
      {
        title: "The 50/30/20 Rule: Budgeting Made Simple",
        excerpt: "Discover how this simple budgeting framework can help you allocate your income effectively.",
        readTime: "5 min",
        category: "Personal Finance",
        author: "Emily Rodriguez",
        date: "March 10, 2024",
        content: `
          <h2>What is the 50/30/20 Rule?</h2>
          <p>The 50/30/20 rule is a simple budgeting framework that divides your after-tax income into three categories:</p>
          
          <ul>
            <li><strong>50% for Needs:</strong> Essential expenses you can't avoid</li>
            <li><strong>30% for Wants:</strong> Lifestyle choices and entertainment</li>
            <li><strong>20% for Savings and Debt:</strong> Future financial security</li>
          </ul>
          
          <h2>Breaking Down the Categories</h2>
          
          <h3>Needs (50%)</h3>
          <p>These are essential expenses required for basic living:</p>
          <ul>
            <li>Housing (rent/mortgage, utilities, insurance)</li>
            <li>Transportation (car payment, gas, insurance)</li>
            <li>Groceries and basic clothing</li>
            <li>Minimum debt payments</li>
            <li>Healthcare and insurance premiums</li>
          </ul>
          
          <h3>Wants (30%)</h3>
          <p>These enhance your lifestyle but aren't strictly necessary:</p>
          <ul>
            <li>Dining out and entertainment</li>
            <li>Hobbies and subscriptions</li>
            <li>Non-essential shopping</li>
            <li>Vacations and travel</li>
            <li>Gym memberships and personal care</li>
          </ul>
          
          <h3>Savings and Debt (20%)</h3>
          <p>This secures your financial future:</p>
          <ul>
            <li>Emergency fund contributions</li>
            <li>Retirement savings (401k, IRA)</li>
            <li>Extra debt payments beyond minimums</li>
            <li>Short-term savings goals</li>
            <li>Investment contributions</li>
          </ul>
          
          <h2>Adapting the Rule to Your Situation</h2>
          <p>The 50/30/20 rule is a starting point, not a rigid requirement. You may need to adjust based on:</p>
          
          <ul>
            <li><strong>High cost of living areas:</strong> Needs might be 60-70%</li>
            <li><strong>High debt loads:</strong> Allocate more to debt repayment</li>
            <li><strong>Low income:</strong> Focus on needs first, build wants and savings gradually</li>
            <li><strong>High income:</strong> Consider increasing savings beyond 20%</li>
          </ul>
        `
      }
    ],
    "investment-strategies": [
      {
        title: "Dollar-Cost Averaging: Reducing Investment Risk",
        excerpt: "Learn how systematic investing can help smooth out market volatility and build long-term wealth.",
        readTime: "7 min",
        category: "Investment Strategies",
        author: "David Kim",
        date: "March 14, 2024",
        content: `
          <h2>What is Dollar-Cost Averaging?</h2>
          <p>Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed amount of money at regular intervals, regardless of market conditions. Instead of trying to time the market, you invest consistently over time.</p>
          
          <h2>How Dollar-Cost Averaging Works</h2>
          <p>Here's a simple example:</p>
          <ul>
            <li>You decide to invest $500 every month in an index fund</li>
            <li>When prices are high, you buy fewer shares</li>
            <li>When prices are low, you buy more shares</li>
            <li>Over time, your average cost per share smooths out</li>
          </ul>
          
          <h2>Benefits of Dollar-Cost Averaging</h2>
          
          <h3>Reduces Timing Risk</h3>
          <p>Market timing is notoriously difficult, even for professionals. DCA removes the pressure to predict market movements and reduces the risk of investing all your money at a market peak.</p>
          
          <h3>Emotional Discipline</h3>
          <p>DCA helps remove emotion from investing decisions. You invest the same amount whether the market is up or down, preventing panic selling or fear of missing out.</p>
          
          <h3>Accessibility</h3>
          <p>You don't need a large lump sum to start investing. You can begin with small amounts and build your portfolio gradually.</p>
          
          <h2>Potential Drawbacks</h2>
          
          <h3>Opportunity Cost</h3>
          <p>In rising markets, investing a lump sum immediately often outperforms DCA since you're fully invested from the start.</p>
          
          <h3>Transaction Costs</h3>
          <p>Frequent small investments may incur more fees, though many brokers now offer commission-free investing.</p>
          
          <h2>Best Practices for Dollar-Cost Averaging</h2>
          <ul>
            <li>Choose low-cost, diversified investments like index funds</li>
            <li>Automate your investments to ensure consistency</li>
            <li>Don't stop during market downturns - this is when DCA works best</li>
            <li>Review and adjust your strategy annually</li>
            <li>Consider increasing contributions when your income grows</li>
          </ul>
        `
      }
    ]
  };

  const categoryKey = category?.toLowerCase().replace(/ /g, '-') || '';
  const articleIdx = parseInt(articleIndex || '0');
  
  const categoryArticles = articlesDatabase[categoryKey];
  const article = categoryArticles?.[articleIdx];

  if (!article) {
    return <Navigate to="/finance-topics" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Content */}
      <article className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative max-w-4xl">
          <Button 
            asChild
            variant="outline" 
            className="mb-8 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
          >
            <Link to="/finance-topics" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Finance Topics
            </Link>
          </Button>
          
          {/* Article Header */}
          <header className="mb-12">
            <Badge className="mb-4 bg-gradient-primary text-primary-foreground border-0 shadow-neon backdrop-blur-sm">
              {article.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
              {article.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border/50 pb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} read</span>
              </div>
            </div>
          </header>
          
          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-display prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-xl prose-h3:font-display prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:mb-2 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Back to Topics Button */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-10 py-4 font-medium"
            >
              <Link to="/finance-topics">
                Explore More Finance Topics
              </Link>
            </Button>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;