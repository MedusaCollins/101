/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        '2a': '#2A2A2A',
        'f0': '#F0F0F0',
        'd6': '#D6D6D6',
        '00': '#000000',
        '75': '#757575',
        'cc': '#CCCCCC',
        'ff': '#FFFFFF',
      },
      fontFamily: {
        'body': ['Inter'],
      },
    },
  },
  plugins: [],
}

