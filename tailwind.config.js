module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		colors: {
			primary: {
				'100': '#013f70',
				'200': '#0667b4',
				'300': '88badf',
				'400': '#6ea7ec',
				'500': '#93b8e5',
				'600': '#86c5ee',
				'700': '#bad5e8',
				'800': '#045e9d'
			},
			secondary: {
				'100': '#e4e1c0',
				'200': '#fffa9f',
				'300': '88badf',
				'400': '#6ea7ec',
			}
		}
	},
  },
  variants: {
    extend: {},
  },
  plugins: [
	require('@tailwindcss/forms'),
  ],
}
