/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      primary: "#1D2130",
      blue: "#6B7CFF",
      'light-violet': "#E0E4FC",
      white: "#fff",
      transparent: "transparent",
      'light-blue': "#A5A6AC",
      'hover-primary': "#313852",
      "dark-blue": "#2B2E3C",
      "light-pink": "#F9F0FB",
      "light-purple": "#CDC7D2",
      "text-dark-gray": "#6D6E76",
      "border-light-blue": "#D6E5FB",
      "border-blue": "#6B7CFF"
    },
    backgroundImage: {
      'label-gradient': "linear-gradient(53.94deg, #373FFF 15.02%, #3ACAF8 82.83%)",
      'blur-gradient': "radial-gradient(483.9% 2719.65% at -49.5% -250%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)",
      'second-gradient': "radial-gradient(150.9% 900.65% at -49.5% -250%,#D798E1 17.55%,#9BFFA5 27.56%,#AED3FF 49.89%,#C9D4EF 56.53%,#CACFFA 65.69%)",
      // "second-gradient": "radial-gradient(circle at 0% 0%, #E4D6E6 4%, #9BFFA5 15%, #AED3FF 50%, #C9D4EF 59%, #CACFFA 67%)",
      linear: "linear-gradient(175.67deg, #D7E7F9 13.12%, #D5F4EC 96.48%)"
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
      gridTemplateColumns: {
        footer: 'repeat(4, 1fr)'
      }
    },
  },
  plugins: [

  ],
}

