/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: {
          color_hover: "#FFEFCA",
          color_hover_text: "#323130",
        },
      },
      fontFamily: {
        text: ["Montserrat", "sans - serif"],
      },
    },
  },
  plugins: [],
};
