module.exports = {
  content: ['./src/**/*.tsx'], // mudamos de {html,js} para tsx, que é a extensão de arquivo do projeto
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF', // nova variável de cor
          500: '#8257e6' // nova variável de cor
        }
      },
      borderRadius: {
        md: '4px' // novo raio para o rounded-md
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')]
};
