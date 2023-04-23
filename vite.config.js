import {resolve} from "path";

import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      //styles
      "@main": resolve(__dirname, "src/styles/main"),
      "@navbar": resolve(__dirname, "src/styles/navbar"),
      "@socialbar": resolve(__dirname, "src/styles/socialbar"),
      //assets
      "@assets": resolve(__dirname, "src/assets"),
      "@buttons": resolve(__dirname, "src/assets/buttons"),
      "@menu": resolve(__dirname, "src/assets/menu"),
      //utils
      "@utils": resolve(__dirname, "src/utils"),
      //components
      "@components": resolve(__dirname, "src/components"),
      //pages
      "@pages": resolve(__dirname, "src/pages"),
      //hooks
      "@hooks": resolve(__dirname, "src/hooks"),
    },
  },
  plugins: [react()],
});
