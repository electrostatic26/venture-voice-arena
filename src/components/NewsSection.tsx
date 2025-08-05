import ArticleCard from "./ArticleCard";

const NewsSection = () => {
  const articles = [
    {
      title: "Tech Stocks Rally as AI Innovation Drives Market Growth",
      excerpt: "Major technology companies see significant gains as artificial intelligence developments continue to reshape the business landscape and investor sentiment.",
      category: "Technology",
      readTime: "5 min",
      date: "Today",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
    },
    {
      title: "Global Supply Chain Resilience: New Strategies for 2024",
      excerpt: "Companies are implementing innovative approaches to supply chain management, focusing on sustainability and risk mitigation in an uncertain economic climate.",
      category: "Supply Chain",
      readTime: "7 min",
      date: "Yesterday",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop"
    },
    {
      title: "Sustainable Finance: ESG Investing Trends and Opportunities",
      excerpt: "Environmental, social, and governance factors are increasingly influencing investment decisions as companies adapt to changing stakeholder expectations.",
      category: "Finance",
      readTime: "6 min",
      date: "2 days ago",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
    },
    {
      title: "Remote Work Revolution: Productivity and Culture in 2024",
      excerpt: "Organizations are finding new ways to maintain productivity and company culture as hybrid work models become the permanent norm across industries.",
      category: "Workplace",
      readTime: "4 min",
      date: "3 days ago"
    },
    {
      title: "Cryptocurrency Market Analysis: Regulatory Developments",
      excerpt: "Recent regulatory announcements are shaping the future of digital currencies and blockchain technology adoption in traditional finance sectors.",
      category: "Crypto",
      readTime: "8 min",
      date: "4 days ago"
    },
    {
      title: "Small Business Growth: Digital Transformation Strategies",
      excerpt: "Small and medium enterprises are leveraging digital tools and platforms to compete effectively with larger corporations and reach new markets.",
      category: "Startups",
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
            Latest Business News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Stay informed with our comprehensive coverage of business trends, market analysis, and industry insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;