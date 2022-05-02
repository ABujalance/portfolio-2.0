import { defineConfig } from "vite";

export default defineConfig({
  base: "/portfolio-2.0/",
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@use "styles/colors";` },
    },
  },
});
