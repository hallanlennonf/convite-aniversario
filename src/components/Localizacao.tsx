import { SiWaze } from "react-icons/si";
import { Button } from "./ui/button";
import { IoIosMap } from "react-icons/io";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import GoogleMapsEmbed from "./GoogleMapsEmbed";

const Localizacao: React.FC = () => {
  const latitude = -15.579339526644226;
  const longitude = -56.09402856179029;

  // URL para o Waze
  const wazeUrl = `waze://?ll=${latitude},${longitude}&navigate=yes`;

  // URL para o Google Maps App
  const appleMapsUrl = `http://maps.apple.com/?ll=${latitude},${longitude}`;

  // URL para o Google Maps no navegador
  const googleMapsWebUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-md font-bold text-blue-950">Chegue no Local do Evento!</h1>
      <div className="flex flex-row gap-1 flex-wrap justify-center mb-10">
        {/* Botão para Waze */}
        <Button
          onClick={() => window.open(wazeUrl, "_blank")}
          variant="default"
        >
          <SiWaze style={{ width: "25px", height: "25px" }} className="mr-2 text-blue-400" />
          Waze
        </Button>

        {/* Botão para Google Maps */}
        <Button
          onClick={() => window.open(appleMapsUrl, "_blank")}
          variant="default"
        >
          <IoIosMap style={{ width: "25px", height: "25px" }} className="mr-2 text-orange-500" />
          Maps
        </Button>

        {/* Botão para Google Maps */}
        <Button
          onClick={() => window.open(googleMapsWebUrl, "_blank")}
          variant="default"
        >
          <IoIosMap style={{ width: "25px", height: "25px" }} className="mr-2 text-orange-500" />
          Maps (Web)
        </Button>
      </div>
    </div>
  );
};

export default Localizacao;
