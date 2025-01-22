const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        playfair: ["Playfair Display", "serif"],
      },
      lineHeight: {
        "extra-loose": "1.2",
      },
      spacing: {
        "60rem": "60rem",
        "75rem": "75rem",
        "30rem": "30rem",
        "40rem": "40rem",
      },
      boxShadow: {
        "scroll-shadow":
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      },
      keyframes: {
        beam: {
          "100%": { transform: "translateY(-100%)" },
        },
        scrollLeft: {
          "100%": { transform: "translateX(-100%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        beam: "beam 12s ease-in-out infinite",
        scrollLeft: "scrollLeft 10s linear infinite", // Custom scrolling animation
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".card-visible": {
          transform: "translateX(0)",
          opacity: "1",
        },
        ".pause": {
          animationPlayState: "paused",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
