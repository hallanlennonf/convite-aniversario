import { useState } from "react";
import { motion } from "framer-motion";
import Localizacao from "@/component/Localizacao";

export default function Home() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
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
          className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-pink-500">🎂 Aniversário do Ravi 🎉</h1>
          <p className="text-lg mt-4 text-gray-700">Você é nosso convidado especial!</p>
          <div className="mt-6 space-y-4 text-gray-700">
            <p className="text-sm">
              <strong>📅 Data:</strong> 03 de março de 2025
            </p>
            <p className="text-sm">
              <strong>⏰ Horário:</strong> 19h
            </p>
            <p className="text-sm">
              <strong>📍 Local:</strong> Buffet Mimos Taty
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-6">Esperamos por você! 🥳</p>
          <div>
            <Localizacao/>
          </div>
        </motion.div>
      )}
    </div>
  );
}
