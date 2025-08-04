import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import CompetitionSection from "@/components/CompetitionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <NewsSection />
      <CompetitionSection />
      <Footer />
    </div>
  );
};

export default Index;
