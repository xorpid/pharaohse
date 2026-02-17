// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		defaultLocale: "en", // English as fallback
		locales: ["en"], // Add more if you plan multilingual support later (e.g., ['en', 'fr'])
		routing: {
			prefixDefaultLocale: false, // No /en/ prefix for default; use true if you want explicit prefixes
		},
	},
	site: "https://pharaoh.se",
	integrations: [sitemap()],
});
