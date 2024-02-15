import { expect } from "@playwright/test"
import { test } from "./fixtures"

test.beforeEach(async ({ page }) => {
  await test.step("Visit the homepage", async () => {
    await page.goto("/")
  })
})

test("Visual regression test", async ({ page }) => {
  await test.step("Take a screenshot", async () => {
    await expect(page).toHaveScreenshot()
  })
})
