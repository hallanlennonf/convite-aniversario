import { SiWaze } from "react-icons/si";
import { Button } from "./ui/button";
import { IoIosMap } from "react-icons/io";

const Localizacao: React.FC = () => {

  const latitude = "-15.579070919490889";  // Substitua "YOUR_LATITUDE" pela latitude real
  const longitude = "-56.09387306612211";  // Substitua "YOUR_LONGITUDE" pela longitude real
  const nomeDoLocal = "BUFFET MIMOS TATY PREMIUM";  // Substitua "NOME_DO_LOCAL" pelo nome real do local

  const wazeUrl = `waze://?ll=${latitude},${longitude}&navigate=yes&name=${encodeURIComponent(nomeDoLocal)}`;

  // URL para o Apple Maps App
  const appleMapsUrl = `http://maps.apple.com/?ll=${latitude},${longitude}&q=${encodeURIComponent(nomeDoLocal)}`;


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
