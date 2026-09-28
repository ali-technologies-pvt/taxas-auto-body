/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070c14',
          900: '#0b1320',
          850: '#0f1a2b',
          800: '#142236',
          750: '#1a2c46',
          700: '#223859',
          600: '#2d4b75',
        },
        crimson: {
          950: '#450a0a',
          900: '#7f1d1d',
          800: '#991b1b',
          700: '#b91c1c',
          600: '#c5222b',
          500: '#dc2626',
          400: '#ef4444',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'badge': '0 0 35px -5px rgba(197, 34, 43, 0.25), 0 10px 25px -5px rgba(11, 19, 32, 0.8)',
        'crimson-glow': '0 0 25px rgba(220, 38, 38, 0.35)',
        'steel-card': 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 20px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'carbon': 'radial-gradient(circle, #162238 10%, #0b1320 90%)',
      }
    },
  },
  plugins: [],
};
