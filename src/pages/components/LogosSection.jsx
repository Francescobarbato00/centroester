import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const logos = letters.map((letter) => ({
  id: letter,
  src: `/${letter}.png`,
  alt: `Sponsor ${letter.toUpperCase()}`,
  link: "#",
}));

const ITEMS_VISIBLE = 8; // Numero massimo di loghi visibili
const INTERVAL = 3000; // Tempo tra una transizione e l'altra

const Sponsors = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % logos.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [
    ...logos.slice(startIndex, startIndex + ITEMS_VISIBLE),
    ...logos.slice(0, Math.max(0, startIndex + ITEMS_VISIBLE - logos.length)),
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-20 px-6 bg-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold uppercase"
      >
        I NOSTRI <span className="text-blue-600">SPONSOR</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl font-semibold text-gray-700 mt-2"
      >
        Grazie per il vostro prezioso supporto
      </motion.h2>
      
      <div className="overflow-hidden w-full mt-10 relative">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex gap-6 justify-center items-center"
        >
          {visibleLogos.map((logo) => (
            <motion.a
              key={logo.id}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex-shrink-0"
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain mx-auto grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
