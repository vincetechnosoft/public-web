/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors: {
      ...{
        "accent1-disabled": "rgb(255, 102, 51)",
        accent1: "rgb(255, 64, 0)",
        "accent1-hover": "rgb(224, 56, 0)",
        "-accent1": "rgb(225 225 225)",
      },

      ...{
        "accent2-disabled": "rgb(33, 176, 192)",
        accent2: "rgb(23, 126, 137)",
        "accent2-hover": "rgb(18, 96, 105)",
        "-accent2": "rgb(225, 225, 225)",
      },

      ...{ drawer: "rgb(6, 3, 18)", "-drawer": "rgb(225, 225, 225)" },

      ...{
        base1: "rgb(229, 229, 229)",
        "-base1": "rgb(0 0 0)",
        "base1-hover": "rgb(204, 204, 204)",
        "-base1-disabled": "rgb(184, 184, 184)",
        "base1-border": "rgb(41, 21, 122)",

        "base1-card": "rgb(214, 214, 214)",
        "-base1-card": "rgb(0 0 0)",
      },

      ...{
        base2: "rgb(0, 23, 31)",
        "base2-hover": "rgb(23, 11, 71)",
        "-base2-disabled": "rgb(11, 5, 35)",
        "-base2": "rgb(225, 225, 225)",
        "base2-border": "rgb(214 211 209)",

        "base2-card": "rgb(0 0 0)",
        "-base2-card": "rgb(225, 225, 225)",
      },

      ...{
        "feedback-error": "rgb(239 68 68)",
        "feedback-success": "rgb(34 197 94)",
      },

      ...{
        "message-bg": "rgb(var(--message-dark-bg))",
        "message-text": "rgb(var(--message-dark-text))",
        "message-hover-button": "rgb(var(--message-dark-hover-button))",
        "message-hover-button-text":
          "rgb(var(--message-dark-hover-button-text))",
        "message-focus-ring": "rgb(var(--message-dark-focus-ring))",
      },
    },
    extend: {
      backgroundImage: {
        attachment: "url(/attachment.svg)",
        banner: "url(/banner.svg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
