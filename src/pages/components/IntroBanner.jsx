import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react"; // Usa un'icona play moderna

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
      {/* Sfondo immagine con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/sfondo.jpg')", // Sostituisci con il percorso corretto dell'immagine
        }}
      />
      <div className="absolute inset-0 bg-blue-600 opacity-60"></div>

      {/* Contenuto della sezione */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Gioca a Sport! Migliora il tuo corpo e la tua mente.
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Scopri tutti gli sport disponibili e unisciti al nostro centro per allenamenti e benessere.
        </p>

        {/* Pulsante Play - Ora Perfettamente Centrato */}
        <motion.button
          className="mt-6 bg-white text-blue-600 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Play size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroBanner;
