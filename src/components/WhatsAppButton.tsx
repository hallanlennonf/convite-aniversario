import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp
import { Label } from "./ui/label";

const whatsappNumber = "5565981456440"; // Substitua pelo número com código do país
const whatsappMessage = "Oi! Só passando pra confirmar minha presença no aniversário do Ravi! 😊"; // Substitua pela mensagem desejada
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export function WhatsAppButton() {
  return (
    <Button
      onClick={() => window.open(whatsappUrl, "_blank")}
      variant="default"
      className="max-w-72"
      >
          <FaWhatsapp style={{ width: "25px", height: "25px" }} className="mr-2 text-green-500" />
          <Label className="text-xl">
              Confirme sua presenta!
          </Label>
      </Button>
  );
}
