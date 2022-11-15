/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorColor: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          neutral: "#3D4451",
          accent: "#37CDBE",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
