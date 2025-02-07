import TopHeader from "./components/TopHeader";
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
    <div className="relative pt-[100px]">
      {/* 40px per il TopHeader + circa 60px per lo ScrollableHeader in stato iniziale */}
      <TopHeader />
      <ScrollableHeader />
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
