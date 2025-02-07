import React from "react";

const MapSection = () => {
  return (
    <section className="w-full h-[500px] relative">
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <iframe
        className="absolute inset-0 w-full h-full z-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.499672520874!2d14.330848215658378!3d40.85938057931692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0862d2d50513%3A0x2f27c0b4c98a7f9c!2sVia%20Giambattista%20Vela%2C%2091%2C%2080147%20Napoli%20NA!5e0!3m2!1sit!2sit!4v1642939585745!5m2!1sit!2sit"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
     
    </section>
  );
};

export default MapSection;
