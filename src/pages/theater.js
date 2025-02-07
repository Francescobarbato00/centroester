import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import ScrollableHeader from "./components/ScrollableHeader";
import Chatbot from "./components/Chatbot";
import WhatsAppWidget from "./components/WhatsAppWidget";
import NewsletterSection from "./components/NewsletterSection";
import TeatroIntro from "./components/TeatroIntro";
import TheaterArticlesSection from "./components/TheaterArticlesSection";

export default function Theater() {
  return (
    <div className="relative pt-[100px]">
      {/* 40px per il TopHeader + circa 60px per lo ScrollableHeader in stato iniziale */}
      <TopHeader />
      <ScrollableHeader />
      <TeatroIntro />
      <TheaterArticlesSection />
      <Chatbot /> 
      <WhatsAppWidget />
      
      <NewsletterSection />
      <Footer />
    </div>
  );
}
