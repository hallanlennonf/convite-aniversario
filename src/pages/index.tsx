import { useState } from "react";
import { motion } from "framer-motion";
import Localizacao from "@/components/Localizacao";
import { Label } from "@/components/ui/label";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(true);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black opacity-90"></div>

      {/* Camada de estrelas maiores */}
      <div
  className="absolute inset-0 bg-[url('/images/bg.png')] bg-no-repeat bg-center opacity-80"
  style={{ backgroundSize: "100% auto" }}
></div>


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
            className="p-4 rounded-lg text-center max-w-lg "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -70 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-9xl font-bold text-white-950">🚀</h2>
              <h2 className="text-3xl font-bold text-white-950  mt-4">Aniversário Espacial de Ravi</h2>
              <p className="text-xl text-white-950">Você é nosso convidado especial!</p>
              <div className="flex flex-col mt-6 space-y-4 text-white-950">
                <Label className="text-xl bg-white/30 backdrop-blur-md rounded-md p-2">
                  <strong>🌌 Data da Decolagem:</strong> 03 de março de 2025
                </Label>
                <Label className="text-xl bg-white/30 backdrop-blur-md rounded-md p-2">
                  <strong>🪐 Horário de Embarque:</strong> 19:30h
                </Label>
                <Label className="text-xl bg-white/30 backdrop-blur-md rounded-md p-2">
                  <strong>🌍 Local de Embarque:</strong> Buffet Mimos Taty
                </Label>
              </div>
              <Label className="text-xl text-white-950 m-3">Esperamos por você! 🥳</Label>
              <WhatsAppButton />
              <div className="mt-4">
                <Localizacao />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
