import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/integration-tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: process.env.CI ? 4 : "50%",
  reporter: process.env.CI
    ? [["json", { outputFile: "tests/results/integration-tests/results.json" }]]
    : [["list"], ["html", { open: "on-failure", outputFile: "tests/results/integration-tests/results.html" }]],
  use: {
    baseURL: "http://localhost:8080/",
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

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})
