import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white">
      {/* Sezione Informazioni Contatto */}
      <motion.div 
        className="bg-white shadow-md rounded-lg p-6 space-y-6" 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-black">PER INFO</h2>
        <p className="text-black">
          Scrivici o chiama ai nostri recapiti per ricevere tutte le informazioni di cui necessiti per entrare anche TU AL CENTRO DI TUTTO.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-600" size={24} />
            <div>
              <h3 className="font-bold text-black">Email</h3>
              <p className="text-black">segreteria@centroester.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600" size={24} />
            <div>
              <h3 className="font-bold text-black">Telefono</h3>
              <p className="text-black">+39 081 255 2315</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-600" size={24} />
            <div>
              <h3 className="font-bold text-black">Indirizzo</h3>
              <p className="text-black">Via Giambattista Vela, 91, 80147 Napoli NA</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Sezione Form */}
      <motion.div 
        className="bg-white shadow-md rounded-lg p-6" 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-black">Invia un messaggio</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Nome" 
              className="border border-gray-300 p-3 w-full rounded focus:outline-none text-black" 
            />
            <input 
              type="text" 
              placeholder="Azienda" 
              className="border border-gray-300 p-3 w-full rounded focus:outline-none text-black" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="tel" 
              placeholder="Telefono" 
              className="border border-gray-300 p-3 w-full rounded focus:outline-none text-black" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="border border-gray-300 p-3 w-full rounded focus:outline-none text-black" 
            />
          </div>
          <input 
            type="text" 
            placeholder="Oggetto" 
            className="border border-gray-300 p-3 w-full rounded focus:outline-none text-black" 
          />
          <textarea 
            placeholder="Messaggio" 
            className="border border-gray-300 p-3 w-full rounded h-32 focus:outline-none text-black"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded flex items-center justify-center space-x-2 hover:bg-blue-700 transition">
            <Send size={18} />
            <span>Invia Messaggio</span>
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
