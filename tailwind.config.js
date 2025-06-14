/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  corePlugins: {
    preflight: false, // Disable default preflight since we're importing it manually
  },
  theme: {
    extend: {
      colors: {
        'blue': {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        'indigo': {
          700: '#4338ca',
        }
      }
    },
  },
  plugins: [],
}