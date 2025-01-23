/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Arquivos dentro de `pages`
    "./src/components/**/*.{js,ts,jsx,tsx}", // Componentes reutilizáveis
    "./src/app/**/*.{js,ts,jsx,tsx}", // Diretório `app` (se usar Next.js 13 com app directory)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
