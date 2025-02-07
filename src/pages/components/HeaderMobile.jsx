import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SearchOverlay from "./SearchOverlay";

const mobileMenuItems = [
  { name: "Home", path: "/" },
  { name: "Chi siamo", path: "/us" },
  { name: "Teatro", path: "/theater" },
  { name: "News", path: "/news" },
  {
    name: "DISCIPLINE",
    submenu: [
      { name: "CALCIO", path: "/calcio" },
      { name: "BASKET", path: "/discipline/basket" },
      { name: "PALLAVOLO", path: "/discipline/pallavolo" },
      { name: "NUOTO", path: "/discipline/nuoto" },
      { name: "NUOTO LIBERO", path: "/discipline/nuoto-libero" },
      { name: "SCUOLA NUOTO BAMBINI", path: "/discipline/scuola-nuoto-bambini" },
      { name: "GINNASTICA", path: "/discipline/ginnastica" },
      { name: "DANZA", path: "/discipline/danza" },
      { name: "HIP HOP", path: "/discipline/hip-hop" },
      { name: "DANZA CLASSICA E MODERNA", path: "/discipline/danza-classica-moderna" },
      { name: "KICKBOXING", path: "/discipline/kickboxing" },
      { name: "PATTINAGGIO ARTISTICO", path: "/discipline/pattinaggio-artistico" },
      { name: "ALLENAMENTO FUNZIONALE", path: "/discipline/allenamento-funzionale" },
      { name: "SPINNING", path: "/discipline/spinning" },
      { name: "PILATES", path: "/discipline/pilates" },
      { name: "ACQUA FITNESS", path: "/discipline/acqua-fitness" },
    ],
  },
  { name: "Contatti", path: "/contact" },
];

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setActiveSubmenu(null); // resetta il submenu all'apertura/chiusura del menu
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50">
      {/* Header mobile principale */}
      <header className="bg-white bg-opacity-90 backdrop-blur-md shadow-md flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // Percorso del logo ridotto
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex space-x-4">
          {/* Bottone per aprire la ricerca */}
          <button onClick={toggleSearch} className="text-gray-700 focus:outline-none">
            <FaSearch size={24} />
          </button>
          {/* Bottone per aprire il menu */}
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <FaBars size={24} />
          </button>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={toggleSearch} />

      {/* Menu mobile fisso, animato e scrollabile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-4 flex items-center justify-between border-b">
              {/* Logo intero */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logointero.png" // Percorso del logo intero
                  alt="Logo Intero"
                  width={90}
                  height={45}
                  className="cursor-pointer"
                />
              </Link>
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="p-4 space-y-4">
              {mobileMenuItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="flex justify-between items-center w-full text-left text-lg text-gray-800"
                      >
                        {item.name}
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            activeSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeSubmenu === index && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {item.submenu.map((subitem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subitem.path}
                                onClick={toggleMenu}
                                className="text-gray-600 text-base"
                              >
                                {subitem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={toggleMenu}
                      className="text-lg text-gray-800"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderMobile;
