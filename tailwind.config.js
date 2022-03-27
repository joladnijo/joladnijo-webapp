module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'aid-center-hero': "url('../public/images/gyujtohely-img.png')",
        'main-hero': "url('../public/images/main-hero.png')",
      },
      colors: {
        'orange': '#EB8323',
        'orange-lighten': '#FF9738',
        'orange-light': '#FFC692',
        'red': '#EC4646',
      }

    },

  },
  plugins: [],
};
