import React from "react";
import Image from "next/image";

const CalcioIntro = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-blue-400 py-20 text-center text-white">
      {/* Immagine di sfondo con overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/calcio-bg.jpg" // Mantieni il percorso invariato
          alt="Background Calcio"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      
      {/* Contenuto Testuale */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Corsi di Calcio per Tutti
        </h1>
        <p className="text-lg md:text-xl font-semibold mt-2 drop-shadow-md">
          Migliora le tue abilità, divertiti e cresci con i nostri corsi dedicati
          a bambini, giovani e adulti.
        </p>
      </div>
    </section>
  );
};

export default CalcioIntro;
