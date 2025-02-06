import React, { useState } from "react";
import { motion } from "framer-motion";

// Creiamo un array con le lettere da 'a' a 'z'
const letters = "abcdefghijklmnopqrstuvwxyz".split("");

// Mappiamo le lettere per creare l'array di loghi
const logos = letters.map((letter) => ({
  id: letter,
  src: `/${letter}.png`,
  alt: `Sponsor ${letter.toUpperCase()}`,
  link: "#", // Sostituisci con il link effettivo se disponibile
}));

// Componente per ogni logo che si nasconde se l'immagine non viene trovata
const LogoItem = ({ logo, index }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) return null;

  return (
    <motion.a
      href={logo.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <motion.img
        src={logo.src}
        alt={logo.alt}
        onError={() => setImgError(true)}
        className="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain mx-auto grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
      />
    </motion.a>
  );
};

const Sponsors = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-20 px-6 bg-white"
    >
      {/* Titolo Principale */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold uppercase"
      >
        I NOSTRI <span className="text-blue-600">SPONSOR</span>
      </motion.h1>

      {/* Sottotitolo */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl font-semibold text-gray-700 mt-2"
      >
        Grazie per il vostro prezioso supporto
      </motion.h2>

      {/* Grid dei loghi */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
      >
        {logos.map((logo, index) => (
          <LogoItem key={logo.id} logo={logo} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Sponsors;
