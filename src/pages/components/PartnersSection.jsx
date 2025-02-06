import React, { useState, useEffect } from "react";
import Image from "next/image";

const logos = [
  "/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/8.png", "/10.png", "/11.png", "/12.png", "/14.png",
];

const PartnersSection = () => {
  const [currentLogos, setCurrentLogos] = useState(logos.slice(0, 6));
  const [index, setIndex] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos((prevLogos) => {
        let newLogos = [...prevLogos];
        newLogos.shift(); // Rimuove il primo logo
        newLogos.push(logos[index % logos.length]); // Aggiunge il prossimo logo in coda
        return newLogos;
      });
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-white py-12 border-t border-gray-200 flex justify-center items-center shadow-lg shadow-gray-300">
      <div className="max-w-6xl w-full px-6 flex items-center justify-between gap-6">
        <h2 className="text-xl font-semibold whitespace-nowrap">I Nostri Partner :</h2>
        <div className="flex items-center justify-start flex-wrap gap-6">
          {currentLogos.map((logo, idx) => (
            <Image 
              key={idx} 
              src={logo} 
              alt={`Partner Logo ${idx + 1}`} 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all duration-500 w-[120px] h-[60px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;