/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'brand-glow': '0 0 30px 4px rgba(79, 70, 229, 0.2)',
      },
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          light: '#60a5fa',
          dark: '#1e3a8a',
        },
        accent: '#fbbf24',
      },
    },
  },
  plugins: [],
}