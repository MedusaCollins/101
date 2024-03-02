/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#EA1D5D",
        "dark": "#21243D",
        "light": "#8695A4",
        "bodyText": "#666666",
        "cloud": "#EDF7FA",
      },
      fontFamily: {
        body: ["Roboto"]
      }
    },
  },
  plugins: [],
}

