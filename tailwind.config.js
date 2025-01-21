const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        "extra-loose": "1.2",
      },
      keyframes: {
        beam: {
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        beam: "beam 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}


