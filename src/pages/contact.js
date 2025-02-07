import TopHeader from "./components/TopHeader";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";
import ScrollableHeader from "./components/ScrollableHeader";
import Chatbot from "./components/Chatbot";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ContactForm from "./components/ContactForm";
import ContactIntro from "./components/ContactIntro";
import MapSection from "./components/MapSection";
import NewsletterSection from "./components/NewsletterSection";

export default function Contact() {
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

      <ContactIntro />
      <ContactForm />
      <MapSection />
      <Chatbot />
      <WhatsAppWidget />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
