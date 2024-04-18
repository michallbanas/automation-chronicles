import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "./tests/e2e/**/*.cy.ts",
    supportFile: "./tests/e2e/support/e2e.ts",
    experimentalMemoryManagement: true,
    experimentalRunAllSpecs: true,
  },
})
