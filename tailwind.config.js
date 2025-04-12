/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // ... otros colores de shadcn/ui
          netflix: {
            red: "#E50914",
            black: "#000000",
            gray: "#333333",
          },
        },
        // ... otras extensiones
      },
    },
    plugins: [require("tailwindcss-animate")],
  }