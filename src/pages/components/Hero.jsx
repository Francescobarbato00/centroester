import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000); // Cambio immagine ogni 7 secondi
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 500);
  }, []);

  const testo = `Dal 1979 il Centro Ester è un punto di riferimento per famiglie 
e ragazzi che vogliono coltivare le loro passioni.`;

  // Funzione per scrollare fino alla sezione SportSection
  const scrollToSportSection = () => {
    const sportSection = document.getElementById("sport-section");
    if (sportSection) {
      sportSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen bg-white flex items-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={images[currentImage]} 
          alt="Hero" 
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Content */}
        <div className="text-left text-white">
          <h1 
            className={`text-[48px] md:text-[76px] leading-[56px] md:leading-[76px] font-extrabold font-['Big_Shoulders_Text',sans-serif] uppercase mb-4 transition-transform duration-1000 ease-in-out ${
              animateText ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-[-10deg] opacity-0'
            }`}
          >
            Benvenuti nel Centro Ester.
          </h1>
          <p 
            className={`text-base md:text-[16px] leading-[24px] mb-6 whitespace-pre-line transition-transform duration-1000 ease-in-out delay-200 ${
              animateText ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {testo}
          </p>
          <button 
            onClick={scrollToSportSection}
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-none shadow-md hover:bg-blue-900 transition"
          >
            Scopri il Centro
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
