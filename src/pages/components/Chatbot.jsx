import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Ciao! Come posso aiutarti oggi?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => setIsOpen((prev) => !prev);

  // Blocca lo scrolling della pagina quando il chatbot è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Risposta automatica del bot dopo 1 secondo
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        text: "Grazie per averci contattato. Ti risponderemo al più presto.",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence exitBeforeEnter>
        {isOpen ? (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            // Su mobile: full screen; su desktop: dimensioni ridotte con arrotondamenti
            className="bg-white fixed top-0 left-0 w-full h-full md:static md:w-80 md:h-96 md:rounded-lg shadow-lg flex flex-col overflow-hidden"
          >
            {/* Header del chatbot */}
            <div className="bg-blue-600 p-4 flex items-center justify-between">
              <h3 className="text-white font-bold">Chatbot</h3>
              <button onClick={toggleChat} className="text-white hover:text-gray-200">
                <X size={20} />
              </button>
            </div>

            {/* Area messaggi */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[70%] p-2 rounded ${
                      msg.sender === "bot"
                        ? "bg-blue-100 text-gray-800"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs block text-right mt-1">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input per inviare messaggi */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <input
                type="text"
                placeholder="Scrivi un messaggio..."
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-600"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
          </motion.div>
        ) : (
          <motion.button
            key="chatButton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleChat}
            className="bg-blue-600 p-4 rounded-full shadow-lg text-white flex items-center justify-center hover:bg-blue-700"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
