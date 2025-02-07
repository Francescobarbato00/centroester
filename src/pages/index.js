import TopHeader from "./components/TopHeader";
import ScrollableHeader from "./components/ScrollableHeader";
import HeaderMobile from "./components/HeaderMobile";
import HeroSection from "./components/Hero";
import PartnersSection from "./components/PartnersSection";
import SportSection from "./components/SportSection";
import IntroBanner from "./components/IntroBanner";
import SportActivities from "./components/SportActivities";
import LogosSection from "./components/LogosSection";
import BlogSection from "./components/BlogSection";
import SupportSection from "./components/SupportSection";
import NewsletterSection from "./components/NewsletterSection";
import Chatbot from "./components/Chatbot";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative pt-[60px] md:pt-[100px]">
      {/* Header per desktop */}
      <div className="hidden md:block">
        <TopHeader />
        <ScrollableHeader />
      </div>

      {/* Header mobile */}
      <div className="md:hidden">
        <HeaderMobile />
      </div>

      <HeroSection />
      <PartnersSection />

      {/* 
        Margine extra per mostrare l'ombra di PartnersSection:
        su mobile non si applica (mt-0) mentre su desktop si applica (mt-10)
      */}
      <div className="mt-0 md:mt-10">
        <SportSection />
      </div>

      <IntroBanner />
      <SportActivities />
      <LogosSection />
      <BlogSection />
      <SupportSection />
      <NewsletterSection />
      <Chatbot />
      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
