/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				muni: {
					celesteClaro: "#3EACE0",
					celesteApagado: "#C5E0FF",
					blanco: "#FFFFFF",
				},
				friends: {
					rojo: "#FF0000",
					naranja: "#FFA500",
					morado: "#800080",
					verde: "#008000",
				},
				revolucion: {
					verdeLima: "#c6e100",
					violeta: "#6e28eb",
					verdeAgua: "#71e6a0",
					blanco: "#ffffff",
					negro: "#000000",
				},
			},
		},
	},
	plugins: [],
};
