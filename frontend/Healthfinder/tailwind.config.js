module.exports = {
  content: [
    "./healthcare/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          700: 'var(--primary)',
        },
        lime: {
          600: 'var(--secondary)',
        },
      },
    },
  },
  plugins: [],
}
