import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // host: "192.168.18.70",
    host: "0.0.0.0",
    port: 5173,
  },
});
