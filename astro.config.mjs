import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://theaiclassroomhub.com",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/api/") && !page.endsWith("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
