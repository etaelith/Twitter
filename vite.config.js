import path from "path";

import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      //styles
      "@main": path.resolve(__dirname, "src/styles/main"),
      "@navbar": path.resolve(__dirname, "src/styles/navbar"),
      "@socialbar": path.resolve(__dirname, "src/styles/socialbar"),
      //assets
      "@assets": path.resolve(__dirname, "src/assets"),
      "@buttons": path.resolve(__dirname, "src/assets/buttons"),
      "@menu": path.resolve(__dirname, "src/assets/menu"),
      //utils
      "@utils": path.resolve(__dirname, "src/utils"),
      //components
      "@components": path.resolve(__dirname, "src/components"),
      //pages
      "@pages": path.resolve(__dirname, "src/pages"),
      //hooks
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  plugins: [react()],
});
