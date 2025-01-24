import { useState } from "react";
import { motion } from "framer-motion";
import Localizacao from "@/components/Localizacao";
import { Label } from "@/components/ui/label";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {

  const [isClicked, setIsClicked] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setIsClicked(true);
    setTimeout(() => {
      setOpened(true);
      setIsClicked(false);
    }, 1300);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden w-full">

      {/* Conteúdo principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-blue">
        {!opened && (
          <motion.div
            className="flex flex-col items-center justify-center cursor-pointer"
            initial={{ y: 0 }}
            animate={isClicked ? { y: [0, 10, -1000] } : { y: 0 }}
            transition={{ duration: 1.3 }}
            onClick={handleOpen}
          >
            <div className="flex flex-col items-center justify-center">
              <img src="/images/foguete.png" alt="Descrição da imagem" style={{ width: "250px", height: "250px" }} className="w-128 h-128 object-cover transform -rotate-45" />
              {!isClicked && (
                <div className="flex flex-col justify-center items-center bg-white/80 rounded-md -mt-5 p-2">
                  <p className="text-xl font-bold text-blue-950">🎉 Você está convidado! 🎉</p>
                  <p className="text-sm text-blue-950">Clique no foguete para abrir o convite</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
        {opened && (
          <motion.div
            className="bg-white/80 rounded-lg text-center max-w-80"
            initial={{ opacity: 0, y: 500 }}  // Inicializa fora da tela, abaixo
            animate={{ opacity: 1, y: 0 }}    // Anima até a posição original
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2 p-6">
              <h2 className="text-5xl font-bold text-blue-950 mt-10">🚀</h2>
              <h2 className="text-xl font-bold text-blue-950 mt-4">Aniversário Espacial do Ravi</h2>
              <p className="text-lg text-blue-950">Você é nosso convidado especial!</p>
              <div className="flex flex-col mt-6 space-y-4 text-blue-950">
                <Label className="flex flex-col text-xl rounded-md">
                  <Label className="text-md">🌌 Data da Decolagem 🌌</Label>
                  <strong className="text-md"> 03 de março de 2025</strong>
                </Label>
                <Label className="flex flex-col text-xl rounded-md">
                  <Label className="text-md">🪐 Horário de Embarque 🪐</Label>
                  <strong className="text-md">19:30h</strong>
                </Label>
                <Label className="flex flex-col text-xl rounded-md">
                  <Label className="text-md">🌍 Local de Embarque 🌍</Label>
                  <strong className="text-md">Buffet Mimos Taty</strong>
                  <Label className="text-sm">(Miguel Sutil)</Label>
                </Label>
              </div>
              <Label className="text-xl text-blue-950">Esperamos por você! 🥳</Label>
              <div className="flex justify-center">
                <WhatsAppButton />
              </div>
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
