import React, { useState, useEffect } from "react";
import Image from "next/image";

const logos = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/8.png",
  "/10.png",
  "/11.png",
  "/12.png",
  "/14.png",
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
    <div className="bg-white py-12 border-t border-gray-200 flex justify-center items-center shadow-none md:shadow-lg md:shadow-gray-300">
      <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-xl font-semibold whitespace-nowrap text-center md:text-left text-black">
          I Nostri Partner:
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {currentLogos.map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt={`Partner Logo ${idx + 1}`}
              width={80}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-500 w-[80px] h-[40px] md:w-[120px] md:h-[60px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
