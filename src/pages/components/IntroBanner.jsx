import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/sfondo.jpg"
          alt="Hero"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-blue-600 opacity-60"></div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Gioca a Sport! Migliora il tuo corpo e la tua mente.
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90">
          Scopri tutti gli sport disponibili e unisciti al nostro centro per allenamenti e benessere.
        </p>
        <motion.button
          className="mt-6 bg-white text-blue-600 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Play size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
