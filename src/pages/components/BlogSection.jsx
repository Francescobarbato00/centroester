import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "Innovazione e Tecnologia nello Sport",
    description:
      "Scopri come la tecnologia sta rivoluzionando il mondo dello sport, dai wearable alle analisi dei dati, rendendo l'allenamento più efficace e personalizzato.",
    category: "TECNOLOGIA",
    date: "10 Novembre 2022",
    image: "/foto1.jpg",
  },
  {
    title: "Nutrizione e Performance",
    description:
      "Una guida completa su come l'alimentazione influisce sulle prestazioni sportive, con consigli pratici per migliorare la tua dieta e raggiungere il massimo potenziale.",
    category: "NUTRIZIONE",
    date: "15 Ottobre 2022",
    image: "/foto2.jpg",
  },
  {
    title: "Mindfulness e Sport",
    description:
      "Integrare la mindfulness nella tua routine sportiva può migliorare la concentrazione e ridurre lo stress. Leggi i consigli per trovare l'equilibrio perfetto tra mente e corpo.",
    category: "BENESSERE",
    date: "20 Settembre 2022",
    image: "/foto3.jpg",
  },
  // Duplicati per mostrare la paginazione
  {
    title: "Innovazione e Tecnologia nello Sport",
    description:
      "Scopri come la tecnologia sta rivoluzionando il mondo dello sport, dai wearable alle analisi dei dati, rendendo l'allenamento più efficace e personalizzato.",
    category: "TECNOLOGIA",
    date: "10 Novembre 2022",
    image: "/foto4.jpg",
  },
  {
    title: "Nutrizione e Performance",
    description:
      "Una guida completa su come l'alimentazione influisce sulle prestazioni sportive, con consigli pratici per migliorare la tua dieta e raggiungere il massimo potenziale.",
    category: "NUTRIZIONE",
    date: "15 Ottobre 2022",
    image: "/foto5.jpg",
  },
  {
    title: "Mindfulness e Sport",
    description:
      "Integrare la mindfulness nella tua routine sportiva può migliorare la concentrazione e ridurre lo stress. Leggi i consigli per trovare l'equilibrio perfetto tra mente e corpo.",
    category: "BENESSERE",
    date: "20 Settembre 2022",
    image: "/foto6.jpg",
  },
  {
    title: "Mindfulness e Sport",
    description:
      "Integrare la mindfulness nella tua routine sportiva può migliorare la concentrazione e ridurre lo stress. Leggi i consigli per trovare l'equilibrio perfetto tra mente e corpo.",
    category: "BENESSERE",
    date: "20 Settembre 2022",
    image: "/foto6.jpg",
  },
  {
    title: "Mindfulness e Sport",
    description:
      "Integrare la mindfulness nella tua routine sportiva può migliorare la concentrazione e ridurre lo stress. Leggi i consigli per trovare l'equilibrio perfetto tra mente e corpo.",
    category: "BENESSERE",
    date: "20 Settembre 2022",
    image: "/foto6.jpg",
  },
];

// Nuove varianti: semplice fade-in senza spostamenti orizzontali
const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const BlogSection = () => {
  const [filter, setFilter] = useState("tutti");
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 3;

  // Filtra e ordina gli articoli in base al filtro selezionato
  let filteredPosts = [...blogPosts];
  if (filter === "data") {
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (filter === "titolo") {
    filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filter === "categoria") {
    filteredPosts.sort((a, b) => a.category.localeCompare(b.category));
  }

  const pageCount = Math.ceil(filteredPosts.length / itemsPerPage);
  const displayedPosts = filteredPosts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleFilterChange = (option) => {
    setFilter(option);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageCount - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-20 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Titolo e Sottotitolo */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-black"
        >
          IL NOSTRO <span className="text-blue-600">BLOG</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-lg text-gray-600"
        >
          Leggi gli ultimi aggiornamenti, consigli e articoli dedicati al mondo
          dello sport e non solo.
        </motion.p>

        {/* Menu Filtro */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => handleFilterChange("tutti")}
            className={`px-4 py-2 border rounded ${
              filter === "tutti"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Tutti
          </button>
          <button
            onClick={() => handleFilterChange("data")}
            className={`px-4 py-2 border rounded ${
              filter === "data"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Data
          </button>
          <button
            onClick={() => handleFilterChange("titolo")}
            className={`px-4 py-2 border rounded ${
              filter === "titolo"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Titolo
          </button>
          <button
            onClick={() => handleFilterChange("categoria")}
            className={`px-4 py-2 border rounded ${
              filter === "categoria"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Categoria
          </button>
        </div>

        {/* Carousel degli articoli */}
        <div className="relative mt-10">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {displayedPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white border border-gray-200 shadow-lg overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-bold text-blue-600 uppercase">
                      {post.category}
                    </span>
                    {/* Titolo del post: impostato in nero */}
                    <h3 className="text-xl font-semibold mt-2 text-black">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{post.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors duration-300">
                        Leggi di più!
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Frecce di navigazione */}
          {pageCount > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-3">
              <button
                onClick={handlePrev}
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition"
              >
                <ChevronLeft size={24} className="text-blue-600" />
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: pageCount }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentPage ? 1 : -1);
                      setCurrentPage(idx);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentPage === idx ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition"
              >
                <ChevronRight size={24} className="text-blue-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
