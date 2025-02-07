import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import ScrollableHeader from "./components/ScrollableHeader";
import Chatbot from "./components/Chatbot";
import WhatsAppWidget from "./components/WhatsAppWidget";
import NewsletterSection from "./components/NewsletterSection";
import AboutUsIntro from "./components/AboutUsIntro";
import CulturaSection from "./components/CulturaSection";
import VisionMissionSection from "./components/VisionMissionSection";
import SportsInfoSection from "./components/SportsInfoSection";


export default function Us() {
  return (
    <div className="relative pt-[100px]">
      {/* 40px per il TopHeader + circa 60px per lo ScrollableHeader in stato iniziale */}
      <TopHeader />
      <ScrollableHeader />
      <AboutUsIntro />
      <CulturaSection />
      <Chatbot /> 
      <WhatsAppWidget />
      <VisionMissionSection />
      <SportsInfoSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
