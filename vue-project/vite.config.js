import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Specify build path and customize output options
  build: {
    outDir: "../chrome-extension",
    //every file insame folder
    rollupOptions: {
      external: "NonExistingPath",
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
      
    },
  },
});
