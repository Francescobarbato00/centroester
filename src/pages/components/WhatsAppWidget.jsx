import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  // Formatta il numero in formato internazionale senza il simbolo "+"
  const phoneNumber = "393773451791";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <FaWhatsapp size={24} className="text-white" />
    </a>
  );
};

export default WhatsAppWidget;
