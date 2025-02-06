'use client';

import { motion } from 'framer-motion';

export default function InfoSection() {
  return (
    <section className="relative w-full py-16 bg-white flex justify-center items-center px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-6 border-l-4 border-black pl-6"
        >
          <h2 className="text-5xl font-bold text-black uppercase">Per Info</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Scrivici o chiama ai nostri recapiti per ricevere tutte le informazioni di cui necessiti
            per entrare anche TU AL CENTRO DI TUTTO.
          </p>
        </motion.div>

        {/* Right Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-64 shadow-lg rounded-lg overflow-hidden border"
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29806.03291277911!2d14.2888395!3d40.8559139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b089c77a72a83%3A0x5e8bb7aef87e6e68!2sCentro%20Ester!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
