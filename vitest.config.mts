import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: [
        ".next/**/*",
        "postcss.config.js",
        "tailwind.config.ts",
        "src/app/layout.tsx",
        "src/components/**/*",
      ],
      reporter: ["text", "json-summary", "json"],
      reportOnFailure: true,
    },
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
