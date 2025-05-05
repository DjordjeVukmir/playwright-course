import { test, expect } from '@playwright/test';

test("Handle Dropdowns", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple ways to handle dropdown
    //await page.locator('#country').selectOption({ label: 'Germany' })
    //await page.waitForTimeout(2000);
    //await page.locator('#country').selectOption('India')
    //await page.waitForTimeout(2000);
    //await page.locator('#country').selectOption({ value: 'brazil' })
    //await page.waitForTimeout(2000);
    //await page.locator('#country').selectOption({ index: 1 })
    //await page.waitForTimeout(2000);
    //await page.selectOption('#country', 'China')
    //await page.waitForTimeout(2000);

    //Assertions
    //1 check # of options in drop down
    //const numberOfOptions = await page.locator('#country option');
    //await expect(numberOfOptions).toHaveCount(10);
    //2
    //const numberOfOptions = await page.$$('#country option');
    //console.log("Number of options", numberOfOptions.length)
    //await expect(numberOfOptions.length).toBe(10)

    //3 whether specific option is present
    //const content = await page.locator('#country').textContent();
    //await expect(content.includes('Brazil')).toBeTruthy();

    //4
    const options = await page.$$('#country option')
    let status = false;

    for (const option of options) {
        //console.log(await option.textContent())
        let value = await option.textContent()
        if (value.includes('France')) {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();


    //5
    /*
    const options = await page.$$('#country option')

    for (const option of options) {
        //console.log(await option.textContent())
        let value = await option.textContent();

        if (value.includes('France')) {
            await page.selectOption('#country', value);
            break;
        }
    }
    await page.waitForTimeout(5000)
    */
})