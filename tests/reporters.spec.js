import { test, expect } from '@playwright/test'


test('Test1', async ({ page }) => {
    await page.goto('https://demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
})


test('Test2', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/')
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title')
})

// npx playwright test --reporter=list
// npx playwright test --reporter=dot
// npx playwright test --reporter=html (default)
// npx playwright test --reporter=json
// npx playwright test --reporter=junit