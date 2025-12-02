/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neodark': '#0b0f14',
        'neoblue': '#00eeff',
        'neomagenta': '#ff00ff',
        'neoteal': '#00ffcc',
        'neopurple': '#9d00ff',
        'neoorange': '#ff6a00'
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00eeff, 0 0 20px #00eeff',
        'neon-magenta': '0 0 10px #ff00ff, 0 0 20px #ff00ff',
        'neon-teal': '0 0 10px #00ffcc, 0 0 20px #00ffcc',
        'neon-purple': '0 0 10px #9d00ff, 0 0 20px #9d00ff',
        'neon-orange': '0 0 10px #ff6a00, 0 0 20px #ff6a00'
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'terminal-cursor': 'terminal-cursor 1s infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'equalizer': 'equalizer 1.5s ease-in-out infinite alternate'
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '50%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'terminal-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        'grid-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        'equalizer': {
          '0%': { height: '20%' },
          '25%': { height: '60%' },
          '50%': { height: '40%' },
          '75%': { height: '80%' },
          '100%': { height: '30%' }
        }
      }
    },
  },
  plugins: [],
}
