// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server", // Habilita SSR para permitir API routes dinámicas
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), react()],
  adapter: vercel(),
});
