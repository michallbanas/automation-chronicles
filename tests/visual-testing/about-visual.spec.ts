import { expect, test } from "@playwright/test"

test.describe("About: Visual regression tests", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Visit the homepage", async () => {
      await page.goto("/o-mne")
    })
  })

  test("About page", { tag: "@visual" }, async ({ page, browserName, isMobile }) => {
    await test.step("Take a screenshot", async () => {
      const isDesktopOrMobile = isMobile ? "mobile" : "desktop"
      await expect(page).toHaveScreenshot(`about-${browserName}-${isDesktopOrMobile}.png`, {
        fullPage: true,
        timeout: 2000,
        animations: "allow",
      })
    })
  })
})
