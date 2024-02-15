import { expect } from "@playwright/test"
import { test } from "./fixtures"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("should check light/dark mode functionality", async ({ page }) => {
  const html = page.locator("html")
  const themeToogle = page.getByTestId("theme-toggle")
  const darkMode = page.getByTestId("dark-mode")
  const lightMode = page.getByTestId("light-mode")

  await test.step("Check the default state (dark)", async () => {
    await html.waitFor({ state: "visible" })
    await expect(darkMode).toBeVisible()
    await expect(html).toHaveClass("dark")
  })

  await test.step("Check the light mode", async () => {
    await themeToogle.click()
    await html.waitFor({ state: "visible" })
    await expect(lightMode).toBeVisible()
    await expect(html).toHaveClass("light")
  })

  await test.step("Check that theme persists when clicking on a different page", async () => {
    const article_first = page.locator("h2").first()
    await article_first.click()

    const h1 = page.locator("h1")
    await h1.waitFor({ state: "visible" })

    await expect(lightMode).toBeVisible()
    await expect(html).toHaveClass("light")
  })

  await test.step("Change theme to dark mode and check that it persists when refreshing the page", async () => {
    await themeToogle.click()
    await expect(darkMode).toBeVisible()
    await expect(html).toHaveClass("dark")

    await page.reload()
    await html.waitFor({ state: "visible" })
    await expect(darkMode).toBeVisible()
    await expect(html).toHaveClass("dark")
  })
})
