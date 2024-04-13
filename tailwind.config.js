/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#03061B",
        loginMain: "#2C394B",
      },
      fontFamily: {
        league: "'League Spartan'",
      },
    },
  },
  plugins: [],
};
