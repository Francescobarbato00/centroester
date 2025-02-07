import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Array degli articoli hardcodati
const articles = [
  {
    title: "Riscaldamento nel badminton: guida completa per evitare infortuni",
    category: "Principianti",
    image: "/foto1.jpg",
    date: "2022-10-26",
    preview:
      "Scopri i segreti di un riscaldamento completo per prevenire infortuni nel badminton e migliorare la performance.",
  },
  {
    title: "Esercizi di agilità per migliorare il tuo gioco",
    category: "Tattica & Strategia",
    image: "/foto2.jpg",
    date: "2022-11-05",
    preview:
      "Esercizi di agilità per affinare i movimenti e rendere il gioco più fluido e reattivo in campo.",
  },
  {
    title: "Lesioni al ginocchio nel badminton: prevenzione e recupero",
    category: "Approfondimenti",
    image: "/foto3.jpg",
    date: "2022-09-15",
    preview:
      "Approfondimento sulle lesioni al ginocchio nel badminton, con consigli su prevenzione e recupero ottimale.",
  },
  // Duplicati per mostrare la paginazione
  {
    title: "Innovazione e Tecnologia nello Sport",
    description:
      "Scopri come la tecnologia sta rivoluzionando il mondo dello sport, dai wearable alle analisi dei dati, rendendo l'allenamento più efficace e personalizzato.",
    category: "TECNOLOGIA",
    date: "10 Novembre 2022",
    image: "/foto4.jpg",
    preview:
      "Scopri come la tecnologia sta rivoluzionando il mondo dello sport, dai wearable alle analisi dei dati, rendendo l'allenamento più efficace e personalizzato.",
  },
  {
    title: "Nutrizione e Performance",
    category: "NUTRIZIONE",
    date: "15 Ottobre 2022",
    image: "/foto5.jpg",
    preview:
      "Una guida completa su come l'alimentazione influisce sulle prestazioni sportive, con consigli pratici per migliorare la tua dieta e raggiungere il massimo potenziale.",
  },
  {
    title: "Mindfulness e Sport",
    category: "BENESSERE",
    date: "20 Settembre 2022",
    image: "/foto6.jpg",
    preview:
      "Integrare la mindfulness nella tua routine sportiva può migliorare la concentrazione e ridurre lo stress. Leggi i consigli per trovare l'equilibrio perfetto tra mente e corpo.",
  },
  {
    title: "Mindfulness e Sport",
    category: "BENESSERE",
    date: "20 Settembre 2022",
    image: "/foto6.jpg",
    preview:
      "Integrare la mindfulness nella tua routine sportiva può migliorare la concentrazione e ridurre lo stress. Leggi i consigli per trovare l'equilibrio perfetto tra mente e corpo.",
  },
  {
    title: "Mindfulness e Sport",
    category: "BENESSERE",
    date: "20 Settembre 2022",
    image: "/foto6.jpg",
    preview:
      "Integrare la mindfulness nella tua routine sportiva può migliorare la concentrazione e ridurre lo stress. Leggi i consigli per trovare l'equilibrio perfetto tra mente e corpo.",
  },
];

// Varianti per il fade (senza spostamenti orizzontali)
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const ArticleBlogs = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 6;

  // Ref per l'intestazione (titolo "Il nostro blog")
  const headerRef = useRef(null);
  // Flag per saltare lo scroll al primo render
  const isFirstRender = useRef(true);

  // Al cambio pagina, scrolla fino al titolo "Il nostro blog" solo dopo il primo render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.innerWidth < 768 && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  const handleFilterChange = (filterType) => {
    setActiveFilter(filterType);
    setFilterValue("");
    setCurrentPage(0);
  };

  const filteredArticles = articles.filter((article) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "category") {
      if (!filterValue) return true;
      return article.category.toLowerCase() === filterValue.toLowerCase();
    }
    if (activeFilter === "date") {
      if (!filterValue) return true;
      return article.date === filterValue;
    }
    if (activeFilter === "text") {
      if (!filterValue) return true;
      return article.title.toLowerCase().includes(filterValue.toLowerCase());
    }
    return true;
  });

  if (filteredArticles.length === 0) {
    return (
      <motion.section
        className="container mx-auto px-6 py-12 text-center bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-600">Nessun articolo trovato.</p>
      </motion.section>
    );
  }

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const displayedArticles = filteredArticles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  let displayedArticlesFilled = [...displayedArticles];
  if (displayedArticlesFilled.length < itemsPerPage) {
    const fillCount = itemsPerPage - displayedArticlesFilled.length;
    for (let i = 0; i < fillCount; i++) {
      displayedArticlesFilled.push({
        title: "Articolo in arrivo",
        category: "In arrivo",
        image: articles[i % articles.length].image,
        date: "",
        preview: "Articolo in arrivo. Rimani aggiornato per ulteriori dettagli.",
      });
    }
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <motion.section
      className="container mx-auto px-6 py-12 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header ref={headerRef} className="mb-8">
        <h2 className="text-3xl font-bold text-black text-center mb-2">
          Il nostro blog
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Scopri le ultime novità, consigli e strategie sul mondo del badminton e dello sport.
        </p>
        <nav className="flex justify-center space-x-4">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 border rounded transition ${
              activeFilter === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600"
            }`}
          >
            Tutte
          </button>
          <button
            onClick={() => handleFilterChange("category")}
            className={`px-4 py-2 border rounded transition ${
              activeFilter === "category"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600"
            }`}
          >
            Categoria
          </button>
          <button
            onClick={() => handleFilterChange("date")}
            className={`px-4 py-2 border rounded transition ${
              activeFilter === "date"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600"
            }`}
          >
            Data
          </button>
          <button
            onClick={() => handleFilterChange("text")}
            className={`px-4 py-2 border rounded transition ${
              activeFilter === "text"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600"
            }`}
          >
            Testo
          </button>
        </nav>
        {activeFilter === "category" && (
          <div className="mt-4 flex justify-center">
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded"
            >
              <option value="">Tutte le categorie</option>
              {[...new Set(articles.map((article) => article.category))].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}
        {activeFilter === "date" && (
          <div className="mt-4 flex justify-center">
            <input
              type="date"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded"
            />
          </div>
        )}
        {activeFilter === "text" && (
          <div className="mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Cerca per testo..."
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded"
            />
          </div>
        )}
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedArticlesFilled.map(({ title, category, image, date, preview }, index) => (
            <article key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src={image} alt={title} layout="fill" objectFit="cover" className="w-full" />
                {category && (
                  <span
                    className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded"
                    aria-label={`Categoria: ${category}`}
                  >
                    {category}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{truncateText(preview, 100)}</p>
                {date ? (
                  <time dateTime={date} className="text-gray-400 text-xs mt-3 block">
                    {new Date(date).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    - Nessun commento
                  </time>
                ) : (
                  <p className="text-gray-400 text-xs mt-3 block">Prossimamente</p>
                )}
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center mt-8 space-x-3">
        <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <FaArrowLeft className="text-blue-600" />
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
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
        <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <FaArrowRight className="text-blue-600" />
        </button>
      </div>
    </motion.section>
  );
};

export default ArticleBlogs;
