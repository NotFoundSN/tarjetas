import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@Assets": "/src/assets",
			"@Components": "/src/components",
			"@Config": "/src/config",
			"@Pages": "/src/pages",
			"@Routes": "/src/routes",
			"@Services": "/src/services",
			"@Styles": "/src/styles",
		},
	},
});
