import { expect } from "@playwright/test"
import { test } from "./fixtures"

test.beforeEach("Visit the homepage", async ({ page }) => {
  await page.goto("/")
})

test("HTML has correct lang attribute", async ({ page }) => {
  await test.step("Check the lang attribute is correct", async () => {
    const html = page.locator("html")
    await expect(html).toHaveAttribute("lang", "sk")
  })
})

test("Basic visual assertions", async ({ page }) => {
  await test.step("Theme toogle is visible", async () => {
    const themeToogle = page.getByTestId("theme-toggle")
    await expect(themeToogle).toBeVisible()
    await expect(themeToogle).toHaveCount(1)
  })

  await test.step("Navigation is visible", async () => {
    const navbar = page.getByTestId("navbar")
    const links = navbar.locator("a")
    await expect(navbar).toBeVisible()
    await expect(links).toHaveCount(2)
  })

  await test.step("Main content is visible", async () => {
    const main = page.locator("main")
    const articles = main.locator("article")
    await expect(main).toBeVisible()
    await expect(articles).toHaveCount(1)
  })
})
