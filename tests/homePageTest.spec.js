import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
    await page.goto('https://demoblaze.com/')

    //const pageTitle =  await page.title()

    await expect(page).toHaveTitle('STORE');

    await expect(page).toHaveURL('https://demoblaze.com/')

    await page.close();
    //npx playwright test (all tests)
    //npx playwright test homePageTest.spec.js (single file)
    //npx playwright test homePageTest.spec.js --project=chromium (single browser)
    //npx playwright test homePageTest.spec.js --project=chromium (single browser) --headed
    //npx playwright test --debug

})