import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [reactRefresh()],
});
