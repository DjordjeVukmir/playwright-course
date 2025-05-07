import { test, expect } from '@playwright/test';

test('Mouse double click', async ({ page }) => {

    page.goto('https://testautomationpractice.blogspot.com/')
    const button = await page.locator('button[ondblclick="myFunction1()"]');

    //right click
    await button.dblclick();

    const field2 = await page.locator('#field2')
    await expect(field2).toHaveValue('Hello World!')
    await page.waitForTimeout(5000)

})