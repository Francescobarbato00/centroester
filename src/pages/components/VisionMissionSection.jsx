import React from "react";
import { Globe, Star } from "lucide-react";
import { motion } from "framer-motion";

const VisionMissionSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 text-center bg-white">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Globe size={48} className="text-blue-600" />
          <h3 className="text-2xl font-bold mt-4 text-black">
            La Nostra Visione
          </h3>
          <p className="text-gray-600 mt-2">
            Immaginiamo un mondo in cui il teatro ispiri e unisca le persone,
            promuovendo la cultura e la creatività.
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Star size={48} className="text-blue-600" />
          <h3 className="text-2xl font-bold mt-4 text-black">
            La Nostra Missione
          </h3>
          <p className="text-gray-600 mt-2">
            Diffondere la passione per il teatro attraverso spettacoli di qualità,
            formazione e innovazione artistica.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisionMissionSection;
