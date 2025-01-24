import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp
import { Label } from "./ui/label";

const whatsappNumber = "5565981456440"; // Substitua pelo número com código do país
const whatsappMessage = "Olá! vim confirmar minha presenta no aniversário do Ravi."; // Substitua pela mensagem desejada
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export function WhatsAppButton() {
  return (
    <Button
      onClick={() => window.open(whatsappUrl, "_blank")}
          variant="outline"
      >
          <FaWhatsapp style={{ width: "25px", height: "25px" }} className="mr-2 text-white-500" />
          <Label className="text-xl">
              Confirme sua presenta!
          </Label>
      </Button>
  );
}
