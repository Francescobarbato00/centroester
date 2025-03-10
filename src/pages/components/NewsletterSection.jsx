import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica per l'invio dell'email (es. chiamata API)
    console.log(`Email inviata: ${email}`);
  };

  return (
    <motion.section
      className="w-full py-20 bg-gradient-to-r from-blue-500 to-blue-700 overflow-hidden"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center text-white">
        {/* Sezione testuale a sinistra */}
        <div className="w-full md:w-8/12 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Iscriviti alla nostra newsletter
          </h2>
          <p className="text-lg">
            Ricevi aggiornamenti, notizie e promozioni esclusive direttamente nella tua casella di posta.
          </p>
        </div>

        {/* Form di iscrizione a destra */}
        <div className="w-full md:w-3/12 ml-auto">
          <form onSubmit={handleSubmit} className="flex flex-col items-center md:items-start">
            <input
              type="email"
              placeholder="Inserisci la tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="py-3 px-6 w-full rounded-md text-gray-800 mb-4 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-800 text-white py-3 px-6 w-full rounded-md shadow-md hover:bg-blue-900 transition"
            >
              Iscriviti
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;
