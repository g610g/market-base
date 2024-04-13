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
      },
      fontFamily: {
        league: "'League Spartan'",
      },
    },
  },
  plugins: [],
};
