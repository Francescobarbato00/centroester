import React from "react";
import Image from "next/image";

const CalcioIntro = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-green-500 to-green-400 py-20 text-center text-white">
      {/* Immagine di sfondo con overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/calcio-bg.jpg" // Sostituisci con il percorso corretto dell'immagine di sfondo per il calcio
          alt="Background Calcio"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      
      {/* Contenuto Testuale */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Notizie & Approfondimenti di Calcio
        </h1>
        <p className="text-lg md:text-xl font-semibold mt-2 drop-shadow-md">
          Esplora il mondo del calcio
        </p>
      </div>
    </section>
  );
};

export default CalcioIntro;
