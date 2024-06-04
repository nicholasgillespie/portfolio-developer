import { defineConfig } from "vite";
import vitePurgeCss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [vitePurgeCss()],
  base: "/portfolio-developer/",
  build: {
    emptyOutDir: true,
  },
});
