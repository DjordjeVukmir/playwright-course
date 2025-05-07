import { test, expect } from '@playwright/test';


test('Handle date picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.hover('.dropbtn')
    await page.waitForTimeout(5000)

})