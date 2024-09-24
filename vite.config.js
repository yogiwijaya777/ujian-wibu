import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "@vitejs/plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
});
