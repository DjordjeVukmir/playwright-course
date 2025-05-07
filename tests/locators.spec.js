import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    //await page.locator('#login2').click();

    //Click on the login button
    await page.click('id=login2')
    //Input Username
    await page.fill('#loginusername', '123')
    //Input password
    await page.fill("input[id='loginpassword']", '123')
    //Click login
    await page.click("//button[normalize-space()='Log in']")
    await page.click('button:has-text("Log in")');
    //Save logout element in a variable and verify it is visible
    const logoutLink = await page.locator('#logout2')
    await expect(logoutLink).toBeVisible();

})