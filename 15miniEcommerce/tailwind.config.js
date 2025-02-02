module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures that Tailwind CSS purges unused styles in your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
