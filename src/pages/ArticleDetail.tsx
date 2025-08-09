import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock article data - in a real app this would come from a database
const articleData = {
  "budgeting-basics": {
    title: "Budgeting Basics: Your Path to Financial Freedom",
    category: "Budgeting",
    date: "Dec 15, 2024",
    readTime: "5 min",
    imageUrl: "/placeholder.svg",
    content: `
# Budgeting Basics: Your Path to Financial Freedom

Creating a budget is the foundation of financial wellness. It's your roadmap to understanding where your money goes and how to make it work better for you.

## Why Budget?

A budget helps you:
- Track your income and expenses
- Identify areas where you can save money
- Set and achieve financial goals
- Reduce financial stress

## The 50/30/20 Rule

A simple budgeting framework to get started:

**50% - Needs**: Essential expenses like rent, groceries, utilities
**30% - Wants**: Entertainment, dining out, hobbies
**20% - Savings**: Emergency fund, retirement, debt payments

## Getting Started

1. **Track your expenses** for one month
2. **Categorize** your spending
3. **Set realistic goals** based on your findings
4. **Review and adjust** monthly

## Pro Tips

- Use budgeting apps to automate tracking
- Start small with achievable goals
- Don't forget to budget for fun!
- Review your budget monthly

Remember, the best budget is the one you'll actually follow. Start simple and build complexity as you get comfortable with the process.
    `
  },
  "emergency-fund-guide": {
    title: "Building Your Emergency Fund: A Step-by-Step Guide",
    category: "Savings",
    date: "Dec 12, 2024",
    readTime: "7 min",
    imageUrl: "/placeholder.svg",
    content: `
# Building Your Emergency Fund: A Step-by-Step Guide

An emergency fund is your financial safety net. It's money set aside to cover unexpected expenses without derailing your financial goals.

## How Much Do You Need?

Most experts recommend 3-6 months of living expenses. Consider:
- Job stability
- Number of dependents
- Health considerations
- Other sources of emergency funds

## Where to Keep Your Emergency Fund

Your emergency fund should be:
- **Easily accessible**: Savings account or money market
- **Safe**: FDIC insured
- **Separate**: Don't mix with other savings

## Building Strategy

1. **Start small**: Even $500 makes a difference
2. **Automate**: Set up automatic transfers
3. **Use windfalls**: Tax refunds, bonuses, gifts
4. **Side income**: Consider temporary income boosts

## Common Mistakes to Avoid

- Investing emergency funds in stocks
- Using credit cards as an emergency fund
- Touching the fund for non-emergencies
- Not replenishing after use

Your emergency fund brings peace of mind and financial stability. Start today, even if it's just $25.
    `
  },
  "credit-score-improvement": {
    title: "How to Improve Your Credit Score in 6 Months",
    category: "Credit",
    date: "Dec 10, 2024",
    readTime: "6 min",
    imageUrl: "/placeholder.svg",
    content: `
# How to Improve Your Credit Score in 6 Months

Your credit score affects your ability to get loans, rent apartments, and even some jobs. Here's how to improve it quickly but responsibly.

## Understanding Credit Scores

Credit scores range from 300-850:
- **Excellent**: 800-850
- **Very Good**: 740-799
- **Good**: 670-739
- **Fair**: 580-669
- **Poor**: 300-579

## Factors That Affect Your Score

1. **Payment History (35%)**: Pay all bills on time
2. **Credit Utilization (30%)**: Keep balances low
3. **Length of Credit History (15%)**: Keep old accounts open
4. **Credit Mix (10%)**: Various types of credit
5. **New Credit (10%)**: Limit hard inquiries

## 6-Month Action Plan

### Month 1-2: Foundation
- Check your credit report for errors
- Set up automatic payments
- Pay down high-balance cards

### Month 3-4: Optimization
- Request credit limit increases
- Consider becoming an authorized user
- Pay balances before statement dates

### Month 5-6: Maintenance
- Keep monitoring your progress
- Maintain good habits
- Consider additional credit building tools

## Quick Wins

- Pay bills on time (biggest impact)
- Keep credit utilization under 30%
- Don't close old credit cards
- Pay down debt strategically

Patience and consistency are key. Small improvements each month add up to significant score increases over time.
    `
  },
  "investment-basics": {
    title: "Investment Basics for Beginners",
    category: "Investing",
    date: "Dec 8, 2024",
    readTime: "8 min",
    imageUrl: "/placeholder.svg",
    content: `
# Investment Basics for Beginners

Investing can seem intimidating, but it's one of the most powerful tools for building long-term wealth. Let's break it down into manageable concepts.

## Why Invest?

- **Beat Inflation**: Keep your money's purchasing power
- **Compound Growth**: Let your money work for you
- **Achieve Goals**: Fund retirement, home purchase, education

## Types of Investments

### Stocks
- Own shares in companies
- Higher risk, higher potential return
- Best for long-term growth

### Bonds
- Loan money to companies/governments
- Lower risk, steady income
- Good for stability

### Mutual Funds & ETFs
- Diversified baskets of investments
- Professional management
- Great for beginners

## Getting Started

1. **Emergency Fund First**: 3-6 months expenses
2. **Clear High-Interest Debt**: Credit cards, etc.
3. **Start Small**: Even $50/month helps
4. **Use Tax-Advantaged Accounts**: 401(k), IRA

## Investment Principles

- **Diversify**: Don't put all eggs in one basket
- **Think Long-Term**: Time in market beats timing market
- **Dollar-Cost Average**: Invest regularly regardless of market
- **Keep Costs Low**: Fees eat into returns

## Common Mistakes

- Trying to time the market
- Panic selling during downturns
- Not diversifying enough
- Ignoring fees and expenses

Start with low-cost index funds and gradually learn more as you gain experience and confidence.
    `
  }
};

const ArticleDetail = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  const article = articleId ? articleData[articleId as keyof typeof articleData] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <Button onClick={() => navigate('/finance-topics')}>
              Back to Articles
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          onClick={() => navigate('/finance-topics')}
          variant="ghost"
          className="mb-6 hover:bg-accent/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Button>

        <article className="bg-gradient-glass backdrop-blur-glass border border-border/50 rounded-xl p-8 shadow-glass">
          {article.imageUrl && (
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
              <Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground border-0 shadow-neon">
                {article.category}
              </Badge>
            </div>
          )}

          <div className="mb-6">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{article.date}</span>
              <span className="px-3 py-1 bg-secondary/50 rounded-full">{article.readTime} read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            {article.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-2xl font-bold mb-4 text-foreground">
                    {line.substring(2)}
                  </h1>
                );
              } else if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl font-semibold mb-3 mt-6 text-foreground">
                    {line.substring(3)}
                  </h2>
                );
              } else if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-semibold mb-2 mt-4 text-foreground">
                    {line.substring(4)}
                  </h3>
                );
              } else if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold mb-2 text-foreground">
                    {line.substring(2, line.length - 2)}
                  </p>
                );
              } else if (line.startsWith('- ')) {
                return (
                  <li key={index} className="mb-1 text-muted-foreground ml-4">
                    {line.substring(2)}
                  </li>
                );
              } else if (line.trim() === '') {
                return <br key={index} />;
              } else {
                return (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                );
              }
            })}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;