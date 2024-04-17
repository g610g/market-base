import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./resources/js/Pages"),
    },
  },
});
