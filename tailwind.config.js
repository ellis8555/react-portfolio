/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // primary
        primary: "hsl(210, 64%, 51%)",
        "primary-25": "hsla(210, 64%, 51%, 0.25)",
        "primary-40": "hsla(210, 64%, 51%, 0.40)",
        // success
        success: "hsl(152, 69%, 31%)",
        // danger
        danger: "	hsl(354, 70%, 54%)",
        // warning
        warning: "hsl(45, 100%, 51%)",
        // info
        info: "hsl(190, 90%, 50%)",
        "info-50": "hsl(190, 90%, 50%, .5)",
        "info-75": "hsl(190, 90%, 50%, .75)",
        // black
        "black-75": "hsla(0, 0%, 0%, 0.75)",
        // contstruction
        "construction-25": "hsla(45, 100%, 51%, 0.35)",
        underConstructionTextColor: "hsl(60, 100%, 50%)",
      },
    },
  },
  plugins: [],
  utilities: {
    ".customCSS-property": {
      // place css here
    },
  },
};
