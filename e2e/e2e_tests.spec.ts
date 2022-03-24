import { test, expect } from '@playwright/test'

test('should check the page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('https://staging.joladnijo.jmsz.hu/')
  // The home page should contain an h1 with "Jól adni jó"
  await expect(page.locator('h1')).toContainText('Jól adni jó')
})
