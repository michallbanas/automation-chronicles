import { expect, test } from "@playwright/test"

test.beforeEach("Visit the Blog page", async ({ page }) => {
  await page.goto("/blog")
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
    await expect(links).toHaveCount(3)
  })

  await test.step("Main content is visible", async () => {
    const main = page.locator("main")
    const articles = main.locator("article")
    const h2 = main.locator("h2")
    const badges = main.locator("[data-test=articleBadges]")
    const paragraphs = main.locator("p")
    await expect(main).toBeVisible()
    await expect(articles).toHaveCount(1)
    await expect(h2).toBeVisible()
    await expect(badges).toBeVisible()
    await expect(paragraphs).toBeVisible()
  })
})
