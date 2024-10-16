/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    screens: {
      'xs': '280px',
      // => @media (min-width: 280px) { ... }
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}