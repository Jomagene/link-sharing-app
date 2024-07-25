// tailwind.config.js

import myPlugin from "./lib/myPlugin";

/**
 * @type {import('tailwindcss').Config}
 */
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
  plugins: [myPlugin],
};
