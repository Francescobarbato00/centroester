import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Assicurati che questo import sia presente
import SearchOverlay from "./SearchOverlay"; // Assicurati che il path sia corretto

// Definisci il sottomenu per DISCIPLINE
const disciplineSubmenu = [
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
];

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Chi siamo", path: "/us" },
  { name: "Teatro", path: "/theater" },
  { name: "News", path: "/news" },
  { name: "DISCIPLINE", submenu: disciplineSubmenu },
  { name: "Contatti", path: "/contact" },
];

const ScrollableHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Stati per il dropdown "DISCIPLINE" (desktop)
  const [isDisciplineOpen, setIsDisciplineOpen] = useState(false);
  const [isDisciplinePersistent, setIsDisciplinePersistent] = useState(false);
  // Stato per il menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
            <Link href="/" scroll={true}>
              <Image
                src={scrolled ? "/logointero.png" : "/logo.png"}
                alt="Logo"
                width={scrolled ? 90 : 45}
                height={scrolled ? 45 : 45}
                className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center transition-all duration-500 ease-in-out">
            <ul className="flex space-x-8 text-[15px] font-medium uppercase tracking-wide">
              {menuItems.map(({ name, path, submenu }, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => {
                    if (submenu) setIsDisciplineOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (submenu && !isDisciplinePersistent)
                      setIsDisciplineOpen(false);
                  }}
                >
                  {submenu ? (
                    <>
                      <span
                        onClick={() => {
                          setIsDisciplinePersistent((prev) => {
                            const newVal = !prev;
                            setIsDisciplineOpen(newVal);
                            return newVal;
                          });
                        }}
                        className="cursor-pointer flex items-center hover:text-blue-600 transition-colors duration-300"
                      >
                        {name} <FaChevronDown className="ml-1" />
                      </span>
                      {isDisciplineOpen && (
                        <ul className="absolute left-0 mt-2 w-max bg-white shadow-lg rounded py-2 z-50">
                          {submenu.map((subitem, subIndex) => (
                            <li
                              key={subIndex}
                              className="px-4 py-2 hover:bg-blue-100"
                            >
                              <Link
                                href={subitem.path}
                                scroll={true}
                                onClick={() => {
                                  window.scrollTo(0, 0);
                                }}
                              >
                                <span className="block text-sm text-blue-600">
                                  {subitem.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={path}
                      scroll={true}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      className="relative hover:text-blue-600 transition-colors duration-300"
                    >
                      {name}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-center"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu Hamburger Icon */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaBars size={24} />
            </button>
          </div>
          {/* Search Icon */}
          <div className="flex items-center ml-4">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Search size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu - slide in from right */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 w-4/5 h-full bg-white z-50 shadow-lg"
        >
          <div className="p-6 flex justify-between items-center border-b">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <ul className="p-6 space-y-4">
            {menuItems.map(({ name, path, submenu }, index) => (
              <li key={index}>
                {submenu ? (
                  <div>
                    <span className="flex items-center justify-between text-lg font-medium text-blue-600">
                      {name} <FaChevronDown />
                    </span>
                    <ul className="mt-2 ml-4 space-y-2">
                      {submenu.map((subitem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subitem.path}
                            scroll={true}
                            onClick={() => {
                              window.scrollTo(0, 0);
                              closeMobileMenu();
                            }}
                          >
                            <span className="text-gray-700">{subitem.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={path}
                    scroll={true}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      closeMobileMenu();
                    }}
                    className="text-lg font-medium text-gray-700"
                  >
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      {/* Componente SearchOverlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={toggleSearch} />
    </>
  );
};

export default ScrollableHeader;
