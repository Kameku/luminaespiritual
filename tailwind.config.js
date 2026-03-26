/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0B0314', // Fondo Principal
          800: '#140822', // Fondo Tarjetas
        },
        gold: {
          400: '#D4AF37', // Acento primario místico
          500: '#B8860B', // Acento variante
        },
        neon: {
          purple: '#8A2BE2' // Resplandores tecnológicos/místicos
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Letras limpias y legibles
        serif: ['Cinzel', 'serif'],    // Títulos elegantes
      },
      animation: {
        'pulse-glowing': 'pulseGlowing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseGlowing: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)', boxShadow: '0 0 10px rgba(138,43,226,0.5)' },
          '50%': { opacity: .8, transform: 'scale(1.05)', boxShadow: '0 0 20px rgba(138,43,226,0.8)' },
        }
      }
    },
  },
  plugins: [],
}
