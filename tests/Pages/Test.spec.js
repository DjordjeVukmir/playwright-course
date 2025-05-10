import { test, expect } from '@playwright/test'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage.';
import { CartPage } from './CartPage'

test('Test 1', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLoginPage()
    await login.login('123', '123')

    const homePage = new HomePage(page);
    await homePage.addProductToCart('Nexus 6');

    await homePage.goToCart();

    const cartPage = new CartPage(page);
    await page.waitForTimeout(3000)
    const status = await cartPage.checkProductInCart('Nexus 6')
    expect(await status).toBe(true);

    await page.waitForTimeout(3000)
})