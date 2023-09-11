/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "grey": "#949494", 
      "darkgrey": "#47484A",
      "dark": "#1C1D1F",
      "black": "#000000",
      "prime": "#EB4899",
      "white": "#FFFFFF",
      "secondary": "#8C3DE6",
      "tertiary2": "#28E0B9",
      "yellow": "#F5AC37",
    }
  },
  plugins: [],
}

