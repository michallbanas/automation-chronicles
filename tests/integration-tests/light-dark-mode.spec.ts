import { expect, test } from "@playwright/test"

test.beforeEach("Visit the blog page", async ({ page }) => {
  await page.goto("/blog")
})

test("should check light/dark mode functionality", async ({ page, isMobile }) => {
  test.skip(isMobile, "No need to run on mobile")
  const html = page.locator("html")
  const themeToogle = page.getByTestId("theme-toggle")
  const darkMode = page.getByTestId("dark-mode")
  const lightMode = page.getByTestId("light-mode")

  await test.step("Check the default state (dark)", async () => {
    await html.waitFor({ state: "visible" })
    await expect(html).toHaveClass("dark")
    await darkMode.waitFor({ state: "visible" })
  })

  await test.step("Check the light mode", async () => {
    await themeToogle.click()
    await html.waitFor({ state: "visible" })
    await expect(html).toHaveClass("light")
    await expect(lightMode).toBeVisible()
  })

  await test.step("Check that theme persists when clicking on a different page", async () => {
    const header_first = page.locator("h2").first()
    await header_first.click()

    const h1 = page.locator("h1")
    await h1.waitFor({ state: "visible" })

    await expect(html).toHaveClass("light")
    await expect(lightMode).toBeVisible()
  })

  await test.step("Change theme to dark mode and check that it persists when refreshing the page", async () => {
    await themeToogle.click()
    await expect(html).toHaveClass("dark")
    await expect(darkMode).toBeVisible()

    await page.reload()
    await html.waitFor({ state: "visible" })
    await expect(html).toHaveClass("dark")
    await expect(darkMode).toBeVisible()
  })
})
