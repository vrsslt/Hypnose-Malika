// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	// À remplacer par le nom de domaine définitif quand il sera réservé
	site: "https://hypnose-malika.vercel.app",
	integrations: [sitemap()],
	compressHTML: false,
	redirects: {
		"/mentions-légales": "/mentions-legales",
	},
});
