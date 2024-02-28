import { test as base } from "@playwright/test"

export const test = base.extend({})

test.beforeEach(async ({ page }) => {
  test.step("Set theme to dark in locale storage", async () => {
    await page.addInitScript(() => {
      window.localStorage.setItem("theme", "dark")
    })
  })
})
