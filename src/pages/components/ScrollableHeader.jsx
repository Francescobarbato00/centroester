import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import SearchOverlay from "./SearchOverlay"; // Assicurati che il path sia corretto

const ScrollableHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <>
      <header
        className={`fixed top-[40px] left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-white py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={scrolled ? "/logointero.png" : "/logo.png"}
                alt="Logo"
                width={scrolled ? 90 : 45}
                height={scrolled ? 45 : 45}
                className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </Link>
          </div>

          {/* Menu centrato */}
          <nav className="flex-1 flex justify-center transition-all duration-500 ease-in-out">
            <ul className="flex space-x-8 text-[15px] font-medium uppercase tracking-wide">
              {["Home", "Chi siamo", "Terzo Settore", "Teatro", "News", "Contatti"].map(
                (item, index) => (
                  <li key={index} className="group relative">
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="relative hover:text-blue-600 transition-colors duration-300"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-center"></span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Icona di Ricerca */}
          <div className="flex items-center">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Search size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Componente SearchOverlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={toggleSearch} />
    </>
  );
};

export default ScrollableHeader;
