import React from "react";
import { 
  Trophy, Activity, Award, Droplet, TrendingUp, Music, 
  Box, Star, Target, Bike, Heart 
} from "lucide-react";

const sports = [
  {
    category: "CALCIO",
    title: "Allenamenti e Tornei",
    description:
      "Partecipa ai nostri allenamenti di calcio e unisciti ai tornei locali e regionali.",
    icon: <Trophy size={40} className="text-blue-600" />,
  },
  {
    category: "BASKET",
    title: "Tornei e Allenamenti",
    description:
      "Unisciti ai nostri allenamenti di basket e partecipa a tornei di tutti i livelli.",
    icon: <Activity size={40} className="text-blue-600" />,
  },
  {
    category: "PALLAVOLO",
    title: "Squadre e Tornei",
    description:
      "Allena la tua squadra di pallavolo e partecipa a competizioni ufficiali.",
    icon: <Award size={40} className="text-blue-600" />,
  },
  {
    category: "NUOTO",
    title: "Corsi di Nuoto",
    description:
      "Corsi di nuoto per adulti e bambini, in piscina olimpionica.",
    icon: <Droplet size={40} className="text-blue-600" />,
  },
  {
    category: "GINNASTICA",
    title: "Corsi di Ginnastica",
    description:
      "Migliora la tua forza e flessibilità con i nostri corsi di ginnastica.",
    icon: <TrendingUp size={40} className="text-blue-600" />,
  },
  {
    category: "DANZA",
    title: "Danza Moderna e Classica",
    description:
      "Offriamo corsi di danza classica e moderna per tutti i livelli.",
    icon: <Music size={40} className="text-blue-600" />,
  },
  {
    category: "KICKBOXING",
    title: "Allenamenti di Kickboxing",
    description:
      "Diventa più forte con i nostri allenamenti intensivi di kickboxing.",
    icon: <Box size={40} className="text-blue-600" />,
  },
  {
    category: "PATTINAGGIO ARTISTICO",
    title: "Tecniche di Pattinaggio",
    description:
      "Unisciti ai nostri corsi di pattinaggio artistico e migliora la tua tecnica.",
    icon: <Star size={40} className="text-blue-600" />,
  },
  {
    category: "ALLENAMENTO FUNZIONALE",
    title: "Corsi di Allenamento Funzionale",
    description:
      "Migliora la tua forza e resistenza con i nostri corsi di allenamento funzionale.",
    icon: <Target size={40} className="text-blue-600" />,
  },
  {
    category: "SPINNING",
    title: "Corsi di Spinning",
    description:
      "Unisciti ai nostri corsi di spinning per migliorare la tua resistenza cardiovascolare.",
    icon: <Bike size={40} className="text-blue-600" />,
  },
  {
    category: "PILATES",
    title: "Corsi di Pilates",
    description:
      "Migliora la tua postura e forza con i nostri corsi di pilates.",
    icon: <Heart size={40} className="text-blue-600" />,
  },
  {
    category: "ACQUA FITNESS",
    title: "Corsi di Acqua Fitness",
    description:
      "Rimanere in forma divertendosi con i nostri corsi di acqua fitness.",
    icon: <Droplet size={40} className="text-blue-600" />,
  },
];

const SportActivities = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Titolo della sezione */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Scopri i Nostri <span className="text-blue-600">SPORT</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Offriamo una vasta gamma di attività sportive per tutte le età e livelli. Unisciti a noi!
        </p>

        {/* Card dei sport */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center md:text-left transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icona */}
              <div className="mb-4">{sport.icon}</div>
              {/* Categoria */}
              <p className="text-xs font-bold text-gray-500 uppercase">
                {sport.category}
              </p>
              {/* Titolo */}
              <h3 className="text-xl md:text-2xl font-bold mt-1 text-black">
                {sport.title}
              </h3>
              {/* Descrizione */}
              <p className="mt-2 text-gray-600">{sport.description}</p>
              {/* Pulsante */}
              <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 w-full md:w-auto rounded-md shadow-md hover:bg-blue-800 transition">
                Scopri di più
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportActivities;
