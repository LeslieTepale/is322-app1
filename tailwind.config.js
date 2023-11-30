// tailwind.config.js
module.exports = {
  purge: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        greenTheme: '#235347',
      },
    },
  },
  variants: {},
  plugins: [],
}
