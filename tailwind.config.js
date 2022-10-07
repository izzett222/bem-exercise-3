/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      primary: "#1D2130",
      blue: "#6B7CFF",
      'light-violet': "#E0E4FC",
      "white": "#fff",
      transparent: "transparent"
    },
    backgroundImage: {
      'label-gradient': "linear-gradient(53.94deg, #373FFF 15.02%, #3ACAF8 82.83%)",
      'blur-gradient': "radial-gradient(483.9% 2719.65% at -49.5% -250%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)",
    },
    fontSize: {
      xs: ['14px', {lineHeight: '150%'}],
      sm: ['16px', {lineHeight: '150%'}],
      lg: ['18px', {lineHeight: '150%'}],
      xl: ['24px', {lineHeight: '140%'}],
      "2xl": ['36px', {lineHeight: '120%'}],
      "3xl": ['48px', {lineHeight: '120%'}],
      "4xl": ['56px', {lineHeight: '120%'}],
    },
    fontFamily: {
      Roboto: "Roboto, sans-serif",
    },
    extend: {
      
    },
  },
  plugins: [

  ],
}

