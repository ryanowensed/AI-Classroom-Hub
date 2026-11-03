import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://theaiclassroomhub.com",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
