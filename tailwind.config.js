/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { backgroundImage: {
      'hero-bg-gradient': 'linear-gradient(to bottom, #D0EDFF, rgba(181, 227, 255, 0) 99%)',
    },},
  },
  plugins: [],
}

