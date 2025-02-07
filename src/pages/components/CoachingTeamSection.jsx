import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const coaches = [
  { name: "Giovanni Mottola", role: "Allenatore", image: "/coach1.jpg" },
  { name: "Roberto Mottola", role: "Allenatore", image: "/coach2.jpg" },
  { name: "Luigi Marcello", role: "Allenatore", image: "/coach3.jpg" },
  { name: "Giovanni Mennone", role: "Allenatore", image: "/coach4.jpg" },
  { name: "Gianluca Orlanducci", role: "Allenatore", image: "/coach5.jpg" },
  { name: "Antonio Emendato", role: "Allenatore", image: "/coach6.jpg" },
  { name: "Nunzio Orlanducci", role: "Allenatore", image: "/coach7.jpg" },
  { name: "Vincenzo Russo", role: "Responsabile", image: "/coach8.jpg" },
];

// Varianti per l'intera sezione
const sectionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Varianti per ciascun blocco di testo (colonna sinistra)
const textBlockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Varianti per le card dei coach (colonna destra)
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const CoachingTeamSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Esegui le animazioni solo lato client
    setIsClient(true);
  }, []);

  return (
    <motion.section
      className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white"
      variants={sectionVariants}
      initial="hidden"
      animate={isClient ? "visible" : "hidden"}
    >
      {/* Colonna Sinistra: Testo e Informazioni */}
      <motion.div className="space-y-8" variants={textBlockVariants}>
        {/* Blocco Quote */}
        <motion.div
          variants={textBlockVariants}
          className="p-6 border-l-4 border-blue-600 italic text-xl text-black"
        >
          “È fantastico ripercorrere il passato quando vieni da molto in basso e sai che tutto quel che sei stato, che sei e che sarai non è altro che lotta.”
          <br />
          <span className="block text-right mt-2 font-bold">
            - DIEGO ARMANDO MARADONA
          </span>
        </motion.div>

        {/* Sezione Calcio */}
        <motion.div variants={textBlockVariants}>
          <h3 className="text-2xl font-bold text-black mb-2">
            Calcio
          </h3>
          <p className="text-black">
            Le lezioni sono tenute dai maestri e istruttori della Federazione Italiana Calcio. I corsi pomeridiani rivolti a bambini e giovani e quelli serali per adulti avranno inizio a settembre e termineranno a giugno.
          </p>
        </motion.div>

        {/* Sezione Corsi */}
        <motion.div variants={textBlockVariants}>
          <h3 className="text-2xl font-bold text-black mb-2">
            CORSI
          </h3>
          <p className="text-black mb-4">
            <strong>Corso propedeutico per bambini dai 5 ai 8 anni.</strong> Questo corso mira allo sviluppo del gioco calcio attraverso esercitazioni analitiche mirate al miglioramento dei fondamentali, adattando gli obiettivi in base alla fascia d’età. Il corso si svolgerà all’interno della palestra, con la possibilità di partecipare ad eventi e partite al di fuori della struttura. Prevede due lezioni alla settimana.
          </p>
          <p className="text-black">
            <strong>Corso di addestramento e perfezionamento per giovani ed adulti.</strong> In questo corso vengono spiegate passo passo le tecniche base fondamentali del calcio moderno: come allenarsi, migliorare la velocità, potenziarsi fisicamente (in particolare le gambe), tirare, dribblare, parare, eseguire un tackle e comprendere le strategie di gioco di gruppo e da solista, il corso si svolgerà su campo in erba sintetica, con due lezioni alla settimana, e offre la possibilità di partecipare ad eventi e partite in altri centri sportivi.
          </p>
        </motion.div>

        {/* Sezione Staff Calcio */}
        <motion.div variants={textBlockVariants}>
          <h3 className="text-2xl font-bold text-black mb-2">
            STAFF CALCIO
          </h3>
          <p className="text-black">
            Conosci i nostri istruttori da vicino. Disponiamo di un team di professionisti del settore pronti ad accompagnare gli iscritti in un percorso di crescita personale e sportiva.
          </p>
        </motion.div>

        {/* Intestazione per Orari Calcio */}
        <motion.div variants={textBlockVariants} className="pt-4">
          <h3 className="text-2xl font-bold text-black mb-2">
            ORARI CALCIO
          </h3>
        </motion.div>

        {/* Immagine Orari Calcio */}
        <motion.div variants={textBlockVariants} className="mt-2">
          <Image
            src="/oraricalcio.jpg"
            alt="Orari Calcio"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Colonna Destra: Griglia degli Allenatori */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
        variants={sectionVariants}
      >
        {coaches.map((coach, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image
              src={coach.image}
              alt={coach.name}
              width={300}
              height={350}
              className="w-full h-auto"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-black">{coach.name}</h3>
              <p className="text-black">{coach.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default dynamic(() => Promise.resolve(CoachingTeamSection), { ssr: false });
