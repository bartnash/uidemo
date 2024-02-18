/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: ["./src/**/*.{js,jsx,html}",
            "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
           ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};

