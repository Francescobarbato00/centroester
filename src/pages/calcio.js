import TopHeader from "./components/TopHeader";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";
import ScrollableHeader from "./components/ScrollableHeader";
import Chatbot from "./components/Chatbot";
import WhatsAppWidget from "./components/WhatsAppWidget";
import NewsletterSection from "./components/NewsletterSection";
import CalcioIntro from "./components/CalcioIntro";
import CoachingTeamSection from "./components/CoachingTeamSection";

export default function Calcio() {
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

      <CalcioIntro />
      <Chatbot />
      <WhatsAppWidget />
      <CoachingTeamSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
