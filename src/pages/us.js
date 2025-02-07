import TopHeader from "./components/TopHeader";
import ScrollableHeader from "./components/ScrollableHeader";
import HeaderMobile from "./components/HeaderMobile";
import AboutUsIntro from "./components/AboutUsIntro";
import CulturaSection from "./components/CulturaSection";
import VisionMissionSection from "./components/VisionMissionSection";
import SportsInfoSection from "./components/SportsInfoSection";
import Chatbot from "./components/Chatbot";
import WhatsAppWidget from "./components/WhatsAppWidget";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function Us() {
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
