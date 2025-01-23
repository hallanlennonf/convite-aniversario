import React from "react";
import GoogleMapsEmbed from "./GoogleMapsEmbed";

const MapLinks: React.FC = () => {
  const latitude = -15.579339526644226;
  const longitude = -56.09402856179029;

  // URL para o Waze
  const wazeUrl = `waze://?ll=${latitude},${longitude}&navigate=yes`;

  // URL para o Google Maps App
  const googleMapsAppUrl = `google.maps://?q=${latitude},${longitude}`;

  // URL para o Google Maps no navegador
  const googleMapsWebUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-purple-600 mb-6 text-gray-700">🎉 Chegue no Local do Evento!</h1>
      <p className="text-lg text-gray-700 mb-4">Escolha onde abrir o mapa:</p>


      {/* Botão para abrir no Waze */}
      <a
        href={wazeUrl}
        className="px-4 py-2 bg-blue-600 text-gray-700 rounded-lg shadow hover:bg-blue-700 transition mb-1"
      >
        Waze
      </a>

      {/* Botão para abrir no Google Maps App */}
      <a
        href={googleMapsAppUrl}
        className="px-4 py-2 bg-green-600 text-gray-700 rounded-lg shadow hover:bg-green-700 transition mb-4"
      >
        Maps (App)
      </a>

      {/* Botão para abrir no Google Maps Web */}
      <a
        href={googleMapsWebUrl}
        target="_blank"
        className="px-4 py-2 bg-red-600 text-gray-700 rounded-lg shadow hover:bg-red-700 transition"
      >
        Maps (Web)
      </a>
      <GoogleMapsEmbed/>
    </div>
  );
};

export default MapLinks;
