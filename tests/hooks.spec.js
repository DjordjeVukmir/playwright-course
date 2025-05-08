import { test, expect } from '@playwright/test';

test('Home page test', async ({ page }) => {

    await page.goto('https://demoblaze.com/')

    await page.click('#login2')
    await page.fill('#loginusername', '123')
    await page.fill('#loginpassword', '123')
    await page.click('button[onclick="logIn()"]')

    //await page.waitForSelector('.hrfech')
    const products = await page.$$('.hrefch')
    await expect(products).toHaveLength(9)

    await page.waitForTimeout(2000)

    await page.locator('#logout2').click()

    //add product
    await page.locator('//*[@id="tbodyid"]/div[1]/div/a').click()
    await page.locator('.btn.btn-success.btn-lg').click();

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Product added')
        await dialog.accept();
    })

    await page.waitForTimeout(2000)


})

test('Add product to cart test', async ({ page }) => {


})
