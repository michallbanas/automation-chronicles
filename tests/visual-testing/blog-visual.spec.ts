import { expect } from "@playwright/test"
import { test } from "../integration-tests/fixtures"

test.describe("Blog: Visual regression tests", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Visit the homepage", async () => {
      await page.goto("/blog")
    })
  })

  test("Blog page", { tag: "@visual" }, async ({ page, browserName, isMobile }) => {
    await test.step("Take a screenshot", async () => {
      const isDesktopOrMobile = isMobile ? "mobile" : "desktop"
      await expect(page).toHaveScreenshot(`blog-${browserName}-${isDesktopOrMobile}.png`, {
        fullPage: true,
        timeout: 2000,
        animations: "allow",
      })
    })
  })
})
