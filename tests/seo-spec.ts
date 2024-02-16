import { expect } from "@playwright/test"
import { test } from "./fixtures"

test.beforeEach(async ({ page }) => {
  await test.step("Visit the homepage", async () => {
    await page.goto("/")
  })
})

test("SEO cheks", async ({ page }) => {
  await test.step("Check the title is correct", async () => {
    await expect(page).toHaveTitle("Automation Chronicles")
  })

  await test.step("Check the description is correct", async () => {
    const description = page.locator("meta[name=description]")
    await expect(description).toHaveAttribute("content", "Blog zameraný na automatizáciu a vývoj softvéru")
  })
})