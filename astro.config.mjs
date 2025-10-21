import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { BASE_PATH } from "./src/utils/constants";

// https://astro.build/config
export default defineConfig({
  site: 'https://Luoro.github.io',
  base: BASE_PATH,
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
