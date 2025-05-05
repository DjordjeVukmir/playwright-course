import { test, expect } from '@playwright/test';

test('Handle auto suggest dropdown', async ({ page }) => {

    await page.goto('https://www.redbus.in/')
    await page.locator('//*[@id="src"]').click()
    await page.locator('//*[@id="src"]').fill('Delhi')
    await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')

    const fromCityOptions = await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')

    for (let option of fromCityOptions) {
        const value = await option.textContent();
        //console.log(value)
        if (value.includes('Badarpur')) {
            option.click();
            break;
        }
    }



    await page.waitForTimeout(2000)
    await page.close();
})

//REVISIT - caching causes an issue on the second consecutive run
