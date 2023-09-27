/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobileLight: "url('./src/assets/images/bg-mobile-light.jpg')",
        mobileDark: "url('./src/assets/images/bg-mobile-dark.jpg')",
        desktopLight: "url('./src/assets/images/bg-desktop-light.jpg')",
        desktopDark: "url('./src/assets/images/bg-desktop-dark.jpg')",
        checkColor: "linear-gradient(hsl(192,100%,67%),hsl(280,87%,65%))",
      },
      backgroundColor: {
        lightBg: "hsl(236, 33%, 92%)",
        darkBg: "hsl(235, 21%, 11%)",
        todoDarkBg: "hsl(235, 24%, 19%)",
      },
      colors: {
        grayishBlue: "hsl(236, 33%, 92%)",
        todoColor: "hsl(236, 9%, 61%)",
        textDark: "hsl(235, 19%, 35%)",
        grayText: "hsl(234, 39%, 85%)",
        checkColors: "linear-gradient(hsl(192,100%,67%),hsl(280,87%,65%))",
      },
    },
  },
  plugins: [],
};
