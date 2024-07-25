// myPlugin.js

/**
 * @param {import('tailwindcss/types/config').PluginAPI} param0
 */
module.exports = function ({ addUtilities }) {
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
};
