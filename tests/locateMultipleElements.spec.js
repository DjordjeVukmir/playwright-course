import { test, expect } from '@playwright/test';

test('Locate multiple elements', async ({ page }) => {

    /*await page.goto("https://demoblaze.com/");
    const links = await page.$$('a');

    for (const link of links) {
        const linkContent = await link.textContent();
        console.log(linkContent)
    }
*/
    await page.goto("https://demoblaze.com/index.html")
    //Had to fix the code with an addition wait for selector as without it, it was not working
    await page.waitForSelector(("//div[@id='tbodyid']//div//h4/a"))
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    //optional, easier selectr
    //("#tbodyid .card-block h4 a");

    for (const product of products) {
        const productName = await product.textContent();
        console.log(productName);
    }
})