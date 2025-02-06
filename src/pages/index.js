import TopHeader from "./components/TopHeader";
import HeroSection from "./components/Hero";
import LogosSection from "./components/LogosSection";
import Footer from "./components/Footer";
import PartnersSection from "./components/PartnersSection";
import SportSection from "./components/SportSection";
import IntroBanner from "./components/IntroBanner";
import SportActivities from "./components/SportActivities";
import NewsletterSection from "./components/NewsletterSection";
import ScrollableHeader from "./components/ScrollableHeader";
import BlogSection from "./components/BlogSection";
import Chatbot from "./components/Chatbot";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function Home() {
  return (
    <div className="relative pt-[100px]">
      {/* 40px per il TopHeader + circa 60px per lo ScrollableHeader in stato iniziale */}
      <TopHeader />
      <ScrollableHeader />
      <HeroSection />
      <PartnersSection />

      {/* Margine aggiuntivo per mostrare l'ombra di PartnersSection */}
      <div className="mt-10">
        <SportSection />
      </div>

      <IntroBanner />
      <SportActivities />
      <LogosSection />
      <BlogSection />
      <NewsletterSection /> 
      <Chatbot /> 
      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
