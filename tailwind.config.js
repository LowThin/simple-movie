module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans serif"],
      },
      colors: {
        primary: "#F62682",
        secondary: "#6F5CF1",
      },
      backgroundimage: {
        "hero-pattern":
          "url('https://image.tmdb.org/t/p/original//393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
