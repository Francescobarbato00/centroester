'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ChiSiamo() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8d7cb] to-[#d2f4e5] p-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/texture-pattern.png')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-left max-w-lg"
        >
          <h2 className="text-6xl font-extrabold text-black leading-tight tracking-wide uppercase">
            Chi <br /> Siamo
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Scopri la nostra realtà e i valori che ci contraddistinguono da anni.
            Crediamo nei giovani e nell'influenza che possiamo avere su di loro e sul nostro territorio.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 text-lg rounded-xl shadow-lg hover:bg-gray-900 flex items-center gap-2 transition-all duration-300"
          >
            IL CENTRO <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Right Image with Hover Effect */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-auto flex justify-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/mappa-centro.png"
              alt="Mappa Centro"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
