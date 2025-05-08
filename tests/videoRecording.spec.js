import { test, expect } from '@playwright/test'

test('Video record', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('123');
    await page.locator('#loginpassword').fill('123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#logout2')).toBeVisible();


    //VIDEO ON REPORT ---- retained on failure as setup in the config file!
});
