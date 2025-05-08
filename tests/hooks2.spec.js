import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
    //login
    page = await browser.newPage()
    await page.goto('https://demoblaze.com/')
    await page.click('#login2')
    await page.fill('#loginusername', '123')
    await page.fill('#loginpassword', '123')
    await page.click('button[onclick="logIn()"]')

}

);

test.afterEach(async () => {
    await page.locator('#logout2').click()
})


test('Home page test', async () => {

    //await page.waitForSelector('.hrfech')
    const products = await page.$$('.hrefch')
    await expect(products).toHaveLength(9)

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
