import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CentroEsterChiSiamoSection = () => {
  return (
    <section id="chi-siamo-section" className="relative w-full py-20 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Colonna Sinistra: Contenuto Testuale */}
        <div>
          <h4 className="text-blue-600 font-bold uppercase text-sm tracking-widest">
            Centro Ester
          </h4>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mt-2">
            Centro Ester, chi siamo?
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Il Centro Ester nasce nel 1979 a Napoli nel quartiere di Barra, con lo scopo di operare nel campo educativo e sportivo. Il complesso dispone di una piscina, una palestra, un campo di calcio e di calcetto, due campi da tennis e un campo da basket e pallavolo dove sono svolte numerose attività quali: calcio, tennis, nuoto, fit lab, spinning, hip hop, pilates, danza classica e moderna, ginnastica artistica, pattinaggio e pallavolo.
          </p>
          <p className="text-gray-600 mt-4 text-lg">
            Nella sua trentennale attività il Centro Ester ha caratterizzato la vita sportiva pallavolistica della città, crescendo di credibilità anche presso le istituzioni sportive e civili. Grazie alla partecipazione della sua squadra di pallavolo alla Serie A, il Centro Ester è riuscito ad attrarre l’attenzione di quotidiani e TV a livello nazionale e locale facendo emergere il quartiere di Barra come una realtà diversa da quelle solite, legate al degrado delle periferie.
          </p>
          <button className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-blue-800 transition">
            Scopri di più
          </button>
        </div>

        {/* Colonna Destra: Immagine */}
        <div className="flex justify-center">
          <div className="relative w-full h-[500px]">
            <Image
              src="/centro.jpg" // Assicurati che il percorso sia corretto
              alt="Centro Ester Chi Siamo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CentroEsterChiSiamoSection;
