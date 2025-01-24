import React from "react";

const GoogleMapsEmbed: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122986.1125538234!2d-56.14034454408133!3d-15.574755589613641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db194dad20163%3A0xd38229d0a253b611!2sBUFFET%20MIMOS%20TATY%20PREMIUM!5e0!3m2!1spt-BR!2sbr!4v1737661315021!5m2!1spt-BR!2sbr"
        width="500"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default GoogleMapsEmbed;
