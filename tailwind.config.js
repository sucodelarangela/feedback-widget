module.exports = {
  content: ['./src/**/*.tsx'], // mudamos de {html,js} para tsx, que é a extensão de arquivo do projeto
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6' // nova variável de cor
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')]
};
