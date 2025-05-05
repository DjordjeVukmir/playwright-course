import { test, expect } from '@playwright/test';


//single checkbox
test('Handle Checkbox', async ({ page }) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');



    await page.locator('.multiselect').click()

    //1

    const options = await page.locator('ul>li label input')
    await expect(options).toHaveCount(11)

    //2

    const optionsArray = await page.$$('ul>li label input')
    await expect(optionsArray.length).toBe(11)


    //3 select mulitple options from dropdown

    const optionsArraySelect = await page.$$('ul>li label')

    for (let option of optionsArraySelect) {
        const value = await option.innerText(); //or textContent()
        console.log("The value is: ", value)

        if (value.includes('Java') || value.includes('Python')) {
            await option.click();
        }
    }

    await page.waitForTimeout(5000)
});