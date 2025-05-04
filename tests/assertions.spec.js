import { test, expect } from '@playwright/test';

test('AssertionsTest', async ({ page }) => {
    //open app

    await page.goto('https://demo.nopcommerce.com/register')
    //expect url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    //expect title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    //expect element to be visible
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();

    //expect enabled    
    await expect(page.locator('#small-searchterms')).toBeEnabled();
    //checkbox
    await page.locator('#Newsletter').click();
    await expect(page.locator('#Newsletter')).toBeChecked({ checked: false });

    //element to have attribute
    await expect(page.locator('#register-button')).toHaveAttribute('name');
    //toHaveText

    await expect(page.locator('.page-title h1')).toHaveText('Register')

    //toHaveValue
    const email = await (page.locator('#Email'))
    await email.fill('test123')
    await expect(email).toHaveValue('test123')

    //toHaveCount   
    const sublist = page.locator('ul.sublist.first-level').first();
    await expect(sublist.locator('li')).toHaveCount(3);

})