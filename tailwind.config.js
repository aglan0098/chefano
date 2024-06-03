/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#FFA800",
        "header": "#311A08",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, rgba(255,255,255,1) 61%, rgba(252,225,162,1) 100%)',
      },
    },
  },
  plugins: [],
};
