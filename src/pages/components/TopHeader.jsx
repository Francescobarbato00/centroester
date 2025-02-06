import React from "react";

const TopHeader = () => {
  console.log("TopHeader è stato renderizzato!"); // Debug
  return (
    <div className="bg-blue-600 text-white h-10 px-6 flex justify-start items-center fixed top-0 left-0 w-full z-50">
      <p className="text-sm font-medium">
        CONTATTACI PER INFO: 
        <a href="tel:+390812552315" className="ml-2 underline hover:text-gray-300">+39 081 255 23 15</a> |
        <a href="mailto:direzione@centroester.com" className="ml-2 underline hover:text-gray-300">direzione@centroester.com</a>
      </p>
    </div>
  );
};

export default TopHeader;
