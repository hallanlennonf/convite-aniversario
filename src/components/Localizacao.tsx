import { SiWaze } from "react-icons/si";
import { Button } from "./ui/button";
import { IoIosMap } from "react-icons/io";

const Localizacao: React.FC = () => {

  const plusCode = "CWC4+9F Quilombo, Cuiabá - MT";  // Substitua "YOUR_PLUS_CODE" pelo Plus Code real
  const nomeDoLocal = "BUFFET MIMOS TATY PREMIUM";  // Substitua "NOME_DO_LOCAL" pelo nome real do local

  const wazeUrl = `waze://?q=${encodeURIComponent(plusCode)}&navigate=yes&name=${encodeURIComponent(nomeDoLocal)}`;

  // URL para o Apple Maps App
  const appleMapsUrl = `http://maps.apple.com/?q=${encodeURIComponent(plusCode)}&t=m&address=${encodeURIComponent(nomeDoLocal)}`;


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
      </div>
    </div>
  );
};

export default Localizacao;
