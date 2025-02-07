import React, { useState, useEffect } from "react";
import { MessageSquare, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";

const SupportSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      className="container mx-auto px-6 py-12 text-center bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-black">Hai bisogno di aiuto?</h2>
      <p className="mt-2 text-sm md:text-base text-black">
        Siamo qui per supportarti in ogni momento. Scegli il metodo più adatto a te.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card Supporto Clienti */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MessageSquare size={40} className="text-blue-600" />
          <h3 className="mt-4 text-lg md:text-xl font-bold text-black">Supporto Clienti</h3>
          <p className="mt-2 text-sm md:text-base text-black">
            Parla con un nostro operatore per assistenza immediata.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded font-bold text-sm md:text-base shadow-md hover:bg-blue-800 transition">
            Chatta ora
          </button>
        </motion.div>

        {/* Card Supporto Ticket */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Mail size={40} className="text-blue-600" />
          <h3 className="mt-4 text-lg md:text-xl font-bold text-black">Supporto Ticket</h3>
          <p className="mt-2 text-sm md:text-base text-black">
            Apri un ticket per ricevere supporto dedicato dal nostro team.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded font-bold text-sm md:text-base shadow-md hover:bg-blue-800 transition">
            Invia Ticket
          </button>
        </motion.div>

        {/* Card Forum della Community */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Users size={40} className="text-blue-600" />
          <h3 className="mt-4 text-lg md:text-xl font-bold text-black">Forum della Community</h3>
          <p className="mt-2 text-sm md:text-base text-black">
            Unisciti alla nostra community e trova risposte alle tue domande.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded font-bold text-sm md:text-base shadow-md hover:bg-blue-800 transition">
            Registrati
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SupportSection;
