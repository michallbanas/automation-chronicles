import { expect, test } from "@playwright/test"

test.beforeEach("Visit the Homepage", async ({ page }) => {
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

  await test.step("Navigation is visible with correct text", async () => {
    const navbar = page.getByTestId("navbar")
    const links = navbar.getByRole("link")
    await expect(navbar).toBeVisible()
    await expect(links).toHaveCount(3)

    for (const link of await links.all()) {
      await expect(link).toBeVisible()
    }

    expect(await links.allTextContents()).toEqual(["Domov", "Blog", "O mne"])
  })

  await test.step("Main content is visible", async () => {})
})
