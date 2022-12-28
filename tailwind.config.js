/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "dark-picture":
          "url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=2000&t=st=1662078185~exp=1662078785~hmac=c9ebfc10163ba28dd41edd617460d2ad30b900cb4c3d4900fc3eb3bd6a187fe9')",
        mountain: "url('./images/Mountain-B&W.png')",
        darker: "url('./images/dark.jpg')",
        darkest: "url('./images/darkest.png')",
      },
      colors: {
        brown: {
          50: "#fdf8f",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        neon: {
          pink: "#f20070",
          green: "#53ff4b",
          teal: "#59eafd",
          blue: "#5b9ec8",
          darkblue: "#070f22",
        },
      },
    },
  },
};
