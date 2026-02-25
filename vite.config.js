import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pay: resolve(__dirname, "pages/pay.html"),
        logarithm: resolve(__dirname, "pages/logarithm.html"),
      },
    },
  },
});
