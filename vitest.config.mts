import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ["text", "json-summary", "json"],
      reportOnFailure: true,
    },
    environment: "jsdom",
    exclude: [
      ".next/**/*",
      "node_modules/**/*",
      "e2e/**/*",
      "postcss.config.js",
      "tailwind.config.ts",
      "src/app/layout.tsx",
      "src/components/**/*",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
