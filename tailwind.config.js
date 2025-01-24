/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Arquivos dentro de `pages`
    "./src/components/**/*.{js,ts,jsx,tsx}", // Componentes reutilizáveis
    "./src/app/**/*.{js,ts,jsx,tsx}", // Diretório `app` (se usar Next.js 13 com app directory)
  ],
  theme: {
    extend: {
      keyframes: {
        twinkleSmallStars: {
          '0%': { opacity: 0.8 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.8 },
        },
        twinkleBigStars: {
          '0%': { opacity: 0.3 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 0.3 },
        },
      },
      animation: {
        twinkleSmallStars: 'twinkleSmallStars 6s linear infinite',
      },
    },
  },
  plugins: [],
};
