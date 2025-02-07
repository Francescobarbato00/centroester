import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    date: "26 Ottobre 2024",
    performer: "Fabio Brescia",
    show: "Perle Rare",
    additional: "",
    image: "/teatro1.png",
  },
  {
    id: 2,
    date: "Data da definire (Novembre 2024)",
    performer: "Massimo Masiello",
    show: "Napoli Nascosta",
    additional: "",
    image: "/teatro2.png",
  },
  {
    id: 3,
    date: "9 Novembre 2024",
    performer: "Ciro Ceruti",
    show: "Piccoli Segreti di Famiglia",
    additional: "",
    image: "/teatro3.png",
  },
  {
    id: 4,
    date: "30 Novembre 2024",
    performer: "Massimo e Luciano Salvetti",
    show: "Storta va', dritta vene!",
    additional: "",
    image: "/teatro4.png",
  },
  {
    id: 5,
    date: "14 Dicembre 2024",
    performer: "Paolo Caiazzo",
    show: "Boomer un papà sul sofà",
    additional: "",
    image: "/teatro5.png",
  },
  {
    id: 6,
    date: "11 Gennaio 2025",
    performer: "Peppe Laurato e Salvatore Gisonna",
    show: "L'Amico dei Sogni",
    additional: "",
    image: "/teatro6.png",
  },
  {
    id: 7,
    date: "25 Gennaio 2025",
    performer: "Diego Sanchez",
    show: "Se 50… mi da tanto",
    additional: "",
    image: "/teatro7.png",
  },
  {
    id: 8,
    date: "8 Febbraio 2025",
    performer: "Giovanni Allocca ed Enzo Varone",
    show: "Che facciamo piangiamo?",
    additional: "Regia di Ciro Ceruti",
    image: "/teatro8.png",
  },
  {
    id: 9,
    date: "22 Febbraio 2025",
    performer: "Rosario Verde",
    show: "Lo Scambio",
    additional: "",
    image: "/teatro9.png",
  },
  {
    id: 10,
    date: "15 Marzo 2025",
    performer: "Produzione Bellavista",
    show: "Segreti tra donne",
    additional: "Regia di Maria Autiero",
    image: "/teatro10.png",
  },
  {
    id: 11,
    date: "29 Marzo 2025",
    performer: "Marco Lanzuise",
    show: "Voto di Scambio",
    additional: "",
    image: "/teatro11.png",
  },
  {
    id: 12,
    date: "3 Maggio 2025",
    performer: "Francesco De Cenzo e Daniele Fiorentino",
    show: "Una Sedia per Due",
    additional: "",
    image: "/teatro12.png",
  },
  {
    id: 13,
    date: "Data da definire",
    performer: "Rosalia Porcaro",
    show: "Spettacolo fuori abbonamento",
    additional: "",
    image: "/teatro13.png",
  },
  {
    id: 14,
    date: "",
    performer: "I Tummità",
    show: "Abbi Fede",
    additional: "",
    image: "/teatro14.jpg",
  },
  {
    id: 15,
    date: "",
    performer: 'Compagnia "Facimm\'ce na Risata"',
    show: "Natale in Casa Cupiello",
    additional: "",
    image: "/teatro15.jpg",
  },
  {
    id: 16,
    date: "",
    performer: "Costantino Del Prete",
    show: "Una Rapina Perfetta",
    additional: "",
    image: "/teatro16.jpg",
  },
];

const TheaterScheduleSection = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-12 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Intestazione della sezione */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Teatro Pompeo Centanni - Centro Ester
        </h2>
        <p className="text-lg md:text-xl font-semibold mt-2 text-black">
          Stagione Teatrale 2024/2025
        </p>
        <p className="mt-1 text-sm italic text-black">
          Direzione Artistica: Francesco De Cenzo
        </p>
      </div>

      {/* Griglia degli eventi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group aspect-square rounded-lg overflow-hidden shadow-lg"
          >
            {/* Immagine di sfondo */}
            <Image
              src={event.image}
              alt={event.show}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            {/* Overlay: bianco su mobile, blu su md+ */}
            <div className="absolute inset-0 bg-white md:bg-blue-600 opacity-70 group-hover:opacity-0 transition-opacity duration-300"></div>
            {/* Contenuto della card */}
            <div className="absolute bottom-0 left-0 p-6 z-10 text-black md:text-white">
              <h3 className="text-xl font-bold">{event.show}</h3>
              <p className="text-sm mt-1">{event.performer}</p>
              {event.date && <p className="text-sm mt-1">{event.date}</p>}
              {event.additional && (
                <p className="text-sm mt-1 italic">{event.additional}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sezione finale: Assistenza e Locandina Ufficiale */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Box di Assistenza Clienti */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-lg shadow-xl flex flex-col justify-center bg-white md:bg-blue-600 text-black md:text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Assistenza Clienti</h3>
          <p className="text-lg mb-6">
            Per ogni dubbio o richiesta di supporto, contattaci su WhatsApp. Siamo qui per aiutarti!
          </p>
          <a
            href="https://wa.me/393884034074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-3 px-6 rounded transition-colors duration-300 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.13 1.6 5.96L0 24l6.25-1.64A11.88 11.88 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22.08a9.91 9.91 0 01-5.12-1.36l-.37-.22L3.92 21l1.18-3.64-.24-.39A9.92 9.92 0 012.08 12c0-5.46 4.44-9.92 9.92-9.92S22 6.54 22 12s-4.44 9.92-9.92 9.92zm5.06-7.02c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.65.14-.2.28-.79.92-.97 1.1-.18.18-.36.2-.66.07a8.51 8.51 0 01-2.52-1.56 9.7 9.7 0 01-1.79-2.22c-.18-.3-.02-.46.13-.6.14-.14.3-.36.45-.54.14-.18.18-.3.27-.5.09-.2.05-.38-.02-.52-.07-.14-.65-1.58-.9-2.17-.24-.57-.48-.5-.65-.51-.17-.01-.38-.01-.58-.01-.2 0-.52.07-.79.38-.28.3-1.07 1.05-1.07 2.57s1.1 2.98 1.26 3.18c.16.2 2.28 3.47 5.53 4.86.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.2-.54-.34z" />
            </svg>
            <span>Contattaci</span>
          </a>
        </motion.div>

        {/* Box della Locandina Ufficiale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-lg shadow-xl flex flex-col items-center bg-white"
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-600">
            La Locandina Ufficiale
          </h3>
          <p className="text-lg mb-6 text-gray-700 text-center">
            Scopri tutti i dettagli della stagione teatrale nella nostra locandina ufficiale.
          </p>
          <div className="relative w-full h-[500px]">
            <Image
              src="/locandina.jpg"
              alt="Locandina Ufficiale"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Sezione Abbonamenti */}
      <div className="mt-12 text-center">
        <hr className="border-gray-300 mb-4" />
        <h3 className="text-2xl font-bold text-black">Abbonamenti</h3>
        <p className="mt-2 text-black">
          10 Spettacoli + 2 in omaggio per gli abbonati
        </p>
        <p className="mt-2 text-black">
          Teatro Pompeo Centanni - Via Giambattista Vela, 91 - Napoli
        </p>
        <p className="mt-2 text-black">
          Info e prenotazioni: 388.403.4074 | 081.255.23.15
        </p>
      </div>
    </motion.section>
  );
};

export default TheaterScheduleSection;
