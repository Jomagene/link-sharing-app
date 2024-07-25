// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If you are using the /app directory
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["Instrument Sans", "sans-serif"],
      },
      boxShadow: {
        shadowInput: "#633CFF40 0px 0px 32px 0px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".subtle-scrollbar::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        ".subtle-scrollbar::-webkit-scrollbar-track": {
          background: "transparent",
        },
        ".subtle-scrollbar::-webkit-scrollbar-thumb": {
          background: "#eee transparent",
          borderRadius: "10px",
        },
        ".subtle-scrollbar": {
          "scrollbar-width": "thin",
          "scrollbar-color": "#eee transparent",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
