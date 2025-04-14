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
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
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
};