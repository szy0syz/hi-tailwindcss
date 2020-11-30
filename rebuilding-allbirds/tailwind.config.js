const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				lime: colors.lime,
			},
		},
	},
	variants: {},
	plugins: [],
};
