import { test, expect } from '@playwright/test';

test('Handle inputbox', async ({ page }) => {

    await page.goto('https://demoblaze.com/cart.html');
    await page.locator('button:has-text("Place Order")').click();
    await page.locator('#name').fill('Djordje')
    await page.locator('#country').fill('Serbia')
    await page.locator('#city').fill('Belgrade')
    await page.locator('#card').fill('1234567')
    await page.locator('#month').fill('07')
    await page.locator('#year').fill('2028')
    await page.locator('button:has-text("Purchase")').click();
    await page.locator('button:has-text("OK")').click();

    await page.pause()

})