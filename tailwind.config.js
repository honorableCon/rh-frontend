module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
          900:"#ee820f",
          700:"#F08D25",
          600:"#F19739"
        },
        secondary: {
          900:"#7c4b08",
          800: "#99590A",
          700: "#A7600B",
          600: "#B5670C"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
