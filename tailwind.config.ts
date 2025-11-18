import type { Config } from "tailwindcss";

const config: Config = {
  // 1. CRITICAL: This array tells Tailwind which files to scan for class names.
  //    It ensures only the necessary CSS is generated (Purge/JIT mode).
  content: [
    "./index.html", // Scans the main HTML entry point
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all files in the src folder with these extensions
  ],

  theme: {
    // 2. OPTIONAL: Extend the default Tailwind theme (e.g., custom colors, fonts)
    extend: {
      // Example of adding a custom color 'brand-blue'
      // colors: {
      //   'brand-blue': '#1da1f2',
      // },
      // Example of adding a custom font family
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'],
      // },
    },
  },

  // 3. OPTIONAL: Add official or community plugins
  plugins: [
    // require('@tailwindcss/forms'), // Example: For styling forms
  ],
};

export default config;
