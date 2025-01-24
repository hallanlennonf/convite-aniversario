import { useState } from "react";
import { motion } from "framer-motion";
import Localizacao from "@/component/Localizacao";

export default function Home() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(true);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black opacity-90"></div>

      {/* Camada de estrelas maiores */}
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-contain opacity-80"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-white">
        {!opened ? (
          <motion.div
            className="w-80 h-48 bg-white text-gray-800 shadow-lg rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:shadow-xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleOpen}
          >
            <p className="text-xl font-bold">🎉 Você está convidado! 🎉</p>
            <p className="text-sm mt-2">Clique para abrir o convite</p>
          </motion.div>
        ) : (
          <motion.div
            className="p-8 rounded-lg text-center max-w-lg m-40"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -70 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-white-950">🚀 Aniversário Espacial de Ravi!</h1>
            <p className="text-lg mt-4 text-white-950">Você é nosso convidado especial!</p>
            <div className="mt-6 space-y-4 text-white-950">
              <p className="text-md">
                <strong>🌌 Data da Decolagem:</strong> 03 de março de 2025
              </p>
              <p className="text-md">
                <strong>🪐 Horário de Embarque:</strong> 19:30h
              </p>
              <p className="text-md">
                <strong>🌍 Local de Embarque:</strong> Buffet Mimos Taty
              </p>
            </div>
            <p className="text-sm text-white-950 mt-6">Esperamos por você! 🥳</p>
            <div>
              <Localizacao />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
