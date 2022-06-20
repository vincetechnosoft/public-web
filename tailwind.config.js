/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "accent1-disabled": "rgb(213, 179, 93)",
      accent1: "rgb(204, 164, 59)",
      "accent1-hover": "rgb(178, 141, 46)",
      "-accent1": "rgb(0 0 0)",

      "accent2-disabled": "rgb(169, 154, 234)",
      accent2: "rgb(115, 92, 221)",
      "accent2-hover": "rgb(82, 53, 212)",
      "-accent2": "rgb(0 0 0)",

      "base1-card": "rgb(6, 3, 18)",
      "base1-border": "rgb(214 211 209)",
      "base1-drawer": "rgb(6, 3, 18)",
      "base1-darker": "rgb(23, 11, 71)",
      base1: "rgb(13, 6, 40)",
      "-base1-card": "rgb(225, 225, 225)",
      "-base1-disabled": "rgb(11, 5, 35)",
      "-base1-drawer": "rgb(225, 225, 225)",
      "-base1": "rgb(225, 225, 225)",

      "base2-card": "rgb(214, 214, 214)",
      base2: "rgb(229, 229, 229)",
      "-base2": "rgb(0 0 0)",
      "-base2-card": "rgb(0 0 0)",
      "-base2-dim": "rgb(51, 51, 51)",

      "feedback-error": "rgb(239 68 68)",
      "feedback-success": "rgb(34 197 94)",

      "message-bg": "rgb(var(--message-dark-bg))",
      "message-text": "rgb(var(--message-dark-text))",
      "message-hover-button": "rgb(var(--message-dark-hover-button))",
      "message-hover-button-text": "rgb(var(--message-dark-hover-button-text))",
      "message-focus-ring": "rgb(var(--message-dark-focus-ring))",
    },
    extend: {
      backgroundImage: {
        attachment: "url(/attachment.svg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
