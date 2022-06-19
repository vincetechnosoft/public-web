/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   // main colors
    //   "accent1": {
    //     disabled: "rgb(129 140 248)",
    //     base: "rgb(67 56 202)",
    //     hover: "rgb(55 48 163)",
    //   },
    //   "accent2": {
    //     disabled: "rgb(52 211 153)",
    //     base: "rgb(6 95 70)",
    //     hover: "rgb(6 78 59)",
    //   },
    //   "base1": {
    //     none: "rgb(255 255 255)",
    //     mask: "rgb(100 116 139)",
    //     border: "rgb(214 211 209)",
    //     drawer: "rgb(231 229 228)",
    //     darker: "rgb(231 229 228)",
    //     page: "rgb(245 245 244)",
    //   },
    //   "base2": "rgb(0, 50, 63)",
    //   "form-color": {
    //     none: "rgb(255 255 255)",
    //     base: "rgb(231 229 228)",
    //     border: "rgb(120 113 108)",
    //     disabled: "rgb(68 64 60)",
    //   },
    //   // inverted for color contrast colors
    //   "-accent1": {
    //     base: "rgb(255 255 255)",
    //   },
    //   "-accent2": {
    //     base: "rgb(255 255 255)",
    //   },
    //   "-base1": {
    //     none: "rgb(0 0 0)",
    //     disabled: "rgb(168 162 158)",
    //     drawer: "rgb(0 0 0)",
    //     page: "rgb(0 0 0)",
    //   },
    //   "-base2": "rgb(255 255 255)",
    //   "-base2-dim": "rgb(229 229 229)",
    //   "-form-color": {
    //     none: "rgb(0 0 0)",
    //     base: "rgb(68 64 60)",
    //     disabled: "rgb(168 162 158)",
    //     hint: "rgb(87 83 78)",
    //   },
    //   // feed back
    //   feedback: {
    //     error: "rgb(239 68 68)",
    //     success: "rgb(34 197 94)",
    //   },
    //   message: {
    //     bg: "rgb(var(--message-bg))",
    //     text: "rgb(var(--message-text))",
    //     "hover-button": "rgb(var(--message-hover-button))",
    //     "hover-button-text": "rgb(var(--message-hover-button-text))",
    //     "focus-ring": "rgb(var(--message-focus-ring))",
    //   },
    // },
    colors: {
      "accent1-disabled": "rgb(129 140 248)",
      accent1: "rgb(67 56 202)",
      "accent1-hover": "rgb(55 48 163)",
      "-accent1": "rgb(255 255 255)",

      "accent2-disabled": "rgb(52 211 153)",
      accent2: "rgb(6 95 70)",
      "accent2-hover": "rgb(6 78 59)",
      "-accent2": "rgb(255 255 255)",

      "base1-none": "rgb(255 255 255)",
      "base1-mask": "rgb(100 116 139)",
      "base1-border": "rgb(214 211 209)",
      "base1-drawer": "rgb(231 229 228)",
      "base1-darker": "rgb(231 229 228)",
      "base1-page": "rgb(245 245 244)",
      "-base1-none": "rgb(0 0 0)",
      "-base1-disabled": "rgb(168 162 158)",
      "-base1-drawer": "rgb(0 0 0)",
      "-base1-page": "rgb(0 0 0)",

      base2: "rgb(0 50 63)",
      "-base2": "rgb(255 255 255)",
      "-base2-dim": "rgb(229 229 229)",

      "form-color-none": "rgb(255 255 255)",
      "form-color": "rgb(231 229 228)",
      "form-color-border": "rgb(120 113 108)",
      "form-color-disabled": "rgb(68 64 60)",
      "-form-color-none": "rgb(0 0 0)",
      "-form-color": "rgb(68 64 60)",
      "-form-color-disabled": "rgb(168 162 158)",
      "-form-color-hint": "rgb(87 83 78)",

      "feedback-error": "rgb(239 68 68)",
      "feedback-success": "rgb(34 197 94)",

      "message-bg": "rgb(var(--message-bg))",
      "message-text": "rgb(var(--message-text))",
      "message-hover-button": "rgb(var(--message-hover-button))",
      "message-hover-button-text": "rgb(var(--message-hover-button-text))",
      "message-focus-ring": "rgb(var(--message-focus-ring))",
    },
    extend: {
      backgroundImage: {
        attachment: "url(/attachment.svg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
