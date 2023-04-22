import path from "path";

import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      //styles
      "@main": "@/styles/main",
      "@navbar": "@/styles/navbar",
      "@socialbar": "@/styles/socialbar",
      //assets
      "@assets": "@/assets",
      "@buttons": "@/assets/buttons",
      "@menu": "@/assets/menu",
      //utils
      "@utils": "@/utils",
      //components
      "@components": "@/components",
      //pages
      "@pages": "@/pages",
      //hooks
      "@hooks": "@/hooks",
    },
  },
  plugins: [react()],
});
