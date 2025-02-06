import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const SearchOverlay = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Al momento dell'apertura, focalizza automaticamente l'input
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="searchOverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
        >
          {/* Pulsante di chiusura in alto a destra */}
          <div className="absolute top-4 right-4">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              <X size={32} />
            </button>
          </div>
          {/* Testo sopra il form */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-blue-600">CERCA NEL SITO:</h2>
          </div>
          {/* Form di ricerca */}
          <form className="w-full max-w-lg px-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Inserisci la tua ricerca..."
              className="w-full border border-gray-300 p-4 text-2xl focus:outline-none focus:border-blue-600"
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
