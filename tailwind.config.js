/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0a0a0c',
          deep: '#060608',
          card: '#121216',
          border: 'rgba(212, 175, 55, 0.15)',
        },
        champagne: {
          DEFAULT: '#d4af37',
          light: '#f4e4a6',
          muted: '#aa8c2c',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        ivory: {
          DEFAULT: '#f9f8f6',
          muted: '#a3a098',
          dark: '#66645e',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f4e4a6 0%, #d4af37 50%, #aa8c2c 100%)',
        'gold-glow': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        'dark-glass': 'linear-gradient(135deg, rgba(18, 18, 22, 0.8) 0%, rgba(10, 10, 12, 0.9) 100%)',
      },
      boxShadow: {
        'gold-subtle': '0 0 20px rgba(212, 175, 55, 0.15)',
        'gold-intense': '0 0 35px rgba(212, 175, 55, 0.3)',
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
