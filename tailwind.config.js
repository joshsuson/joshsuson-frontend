module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customRed: "#f43938",
        orange: "#ffb56b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
