import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    //await page.locator('#login2').click();
    await page.click('id=login2')
    await page.fill('#loginusername', '123')
    await page.fill("input[id='loginpassword']", '123')
    await page.click("//button[normalize-space()='Log in']")
    await page.click('button:has-text("Log in")');
    const logoutLink = await page.locator('#logout2')
    await expect(logoutLink).toBeVisible();

})