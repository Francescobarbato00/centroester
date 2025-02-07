import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SportsInfoSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Sezione Testuale */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-blue-600 font-semibold uppercase">Benefici per gli sportivi</p>
        <h2 className="text-4xl font-bold mt-2">
          Migliora le tue performance con i nostri consigli
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Scopri le strategie migliori per ottimizzare il tuo allenamento, migliorare la tecnica e ottenere il massimo dalle tue prestazioni sportive.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded font-bold">
          Scopri di più
        </button>
      </motion.div>
      
      {/* Sezione Benefici */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CheckCircle size={32} className="text-blue-600" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Accesso gratuito a guide di allenamento</h3>
            <p className="text-gray-600 mt-1">
              Scarica materiali esclusivi e segui i consigli degli esperti per migliorare ogni giorno.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CheckCircle size={32} className="text-blue-600" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Sconti fino al 30% su attrezzatura sportiva</h3>
            <p className="text-gray-600 mt-1">
              Ottieni offerte speciali sui migliori prodotti per il tuo sport preferito.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CheckCircle size={32} className="text-blue-600" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Supporto personalizzato 24/7</h3>
            <p className="text-gray-600 mt-1">
              Ricevi assistenza e consigli dagli esperti per il tuo percorso sportivo.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SportsInfoSection;
