import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/",
  testIgnore: ["**/tests/unit-tests/**", "**/tests/e2e/**"],
  snapshotPathTemplate: "./tests/visual-testing/screenshots/{arg}{ext}",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: process.env.CI ? 4 : "50%",
  reporter: [["list"], ["html", { open: "on-failure" }]],
  use: {
    baseURL: "http://localhost:8182/",
    testIdAttribute: "data-test",
    trace: "retain-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
})
