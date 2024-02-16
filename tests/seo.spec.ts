import { expect } from "@playwright/test"
import { test } from "./fixtures"

test.beforeEach("Visit the homepage", async ({ page }) => {
  await page.goto("/")
})

test("SEO checks", async ({ page }) => {
  await test.step("Check the title is correct", async () => {
    await expect(page).toHaveTitle("Automation Chronicles")
  })

  await test.step("Check the description is correct", async () => {
    const description = page.locator("meta[name=description]")
    await expect(description).toHaveAttribute("content", "Blog zameraný na automatizáciu a vývoj softvéru")
  })
})
