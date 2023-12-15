import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/web-monitoramento/',
  server: {
    host: "0.0.0.0", // Isso faz o servidor aceitar conexões de qualquer IP
  },
});
