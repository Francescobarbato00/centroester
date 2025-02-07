import React from "react";
import Image from "next/image";

const TeatroIntro = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-red-600 to-orange-500 py-12 md:py-20 text-center text-white">
      {/* Immagine di sfondo con overlay */}
      <div className="absolute inset-0">
        <Image
          src="/teatro-bg.jpg" // Sostituisci con il percorso corretto dell'immagine per il teatro
          alt="Background Teatro"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      
      {/* Contenuto Testuale */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Teatro
        </h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl font-semibold drop-shadow-md">
          Spettacoli & Recensioni dal Vivo
        </p>
      </div>
    </section>
  );
};

export default TeatroIntro;
