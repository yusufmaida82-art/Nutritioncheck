import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // settings for the tests
  test: {
    environment: "jsdom",
      globals: true,
    setupFiles: "./src/setupTests.js",
  },
})