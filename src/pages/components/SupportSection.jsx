import React from "react";
import { MessageSquare, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";

const SupportSection = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-12 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold">Hai bisogno di aiuto?</h2>
      <p className="text-gray-600 mt-2 text-sm md:text-base">
        Siamo qui per supportarti in ogni momento. Scegli il metodo più adatto a te.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MessageSquare size={40} className="text-blue-600" />
          <h3 className="text-lg md:text-xl font-bold mt-4">Supporto Clienti</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Parla con un nostro operatore per assistenza immediata.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded font-bold text-sm md:text-base shadow-md hover:bg-blue-800 transition">
            Chatta ora
          </button>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Mail size={40} className="text-blue-600" />
          <h3 className="text-lg md:text-xl font-bold mt-4">Supporto Ticket</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Apri un ticket per ricevere supporto dedicato dal nostro team.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded font-bold text-sm md:text-base shadow-md hover:bg-blue-800 transition">
            Invia Ticket
          </button>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Users size={40} className="text-blue-600" />
          <h3 className="text-lg md:text-xl font-bold mt-4">Forum della Community</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
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
