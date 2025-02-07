import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import ScrollableHeader from "./components/ScrollableHeader";
import Chatbot from "./components/Chatbot";
import WhatsAppWidget from "./components/WhatsAppWidget";
import BlogIntro from "./components/BlogIntro";
import NewsletterSection from "./components/NewsletterSection";
import ArticleBlog from "./components/ArticleBlog";

export default function News() {
  return (
    <div className="relative pt-[100px]">
      {/* 40px per il TopHeader + circa 60px per lo ScrollableHeader in stato iniziale */}
      <TopHeader />
      <ScrollableHeader />
      <BlogIntro />
      <Chatbot /> 
      <WhatsAppWidget />
      <ArticleBlog />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
