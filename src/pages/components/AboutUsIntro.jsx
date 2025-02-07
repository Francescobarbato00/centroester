import React from "react";
import Image from "next/image";

const AboutUsIntro = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-700 to-blue-400 py-20 text-center text-white">
      {/* Immagine di sfondo con overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/aboutus-bg.jpg" // Sostituisci con il percorso corretto per l'immagine di background del Chi Siamo
          alt="Background Chi Siamo"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      
      {/* Contenuto Testuale */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Chi Siamo
        </h1>
        <p className="text-lg md:text-xl font-semibold mt-2 drop-shadow-md">
          La nostra storia, la nostra passione, il nostro impegno per il futuro.
        </p>
        <p className="mt-4 max-w-3xl mx-auto drop-shadow-md">
          Siamo un team dedicato a creare soluzioni innovative e a fare la differenza nella nostra comunità. La nostra missione è valorizzare i talenti, promuovere la cultura e offrire esperienze uniche. Scopri di più sulla nostra storia e sui valori che ci guidano.
        </p>
      </div>
    </section>
  );
};

export default AboutUsIntro;
