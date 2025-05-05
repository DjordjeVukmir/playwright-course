import { test, expect } from '@playwright/test';

test('Handle multiple dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //select multiple options from multi select dropdown
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    await page.waitForTimeout(1000);

    //check # of options

    const numberOfOptions = await page.locator('#colors option')
    await expect(numberOfOptions).toHaveCount(7)

    //array
    const numberOfOptionsArray = await page.$$('#colors option')
    await expect(numberOfOptionsArray).toHaveLength(7)

    //check presence
    const present = await page.locator('#colors').textContent()
    await expect(present.includes('Red')).toBeTruthy();
    await expect(present.includes('123')).toBeFalsy();
})