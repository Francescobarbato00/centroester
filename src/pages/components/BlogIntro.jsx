import React from "react";
import Image from "next/image";

const BlogIntro = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-blue-400 py-12 md:py-20 text-center text-white">
      {/* Immagine di sfondo con overlay */}
      <div className="absolute inset-0">
        <Image
          src="/image.png" // Sostituisci con il percorso corretto
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      
      {/* Contenuto Testuale */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Ultime Notizie & Articoli
        </h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl font-semibold drop-shadow-md">
          Archivio
        </p>
      </div>
    </section>
  );
};

export default BlogIntro;
