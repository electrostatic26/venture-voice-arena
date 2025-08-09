import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import CompetitionSection from "@/components/CompetitionSection";
import SpecialNeedsSection from "@/components/SpecialNeedsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <Hero />
      <NewsSection />
      <SpecialNeedsSection />
      <CompetitionSection />
      <Footer />
    </div>
  );
};

export default Index;
