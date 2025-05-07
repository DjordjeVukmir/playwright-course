import { test, expect } from '@playwright/test';


test('Handle date picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //1
    //await page.fill('#datepicker', '06/09/2025')
    //2 date select using loops
    const year = "2028";
    const month = "May";
    const day = "18";

    await page.click('#datepicker')

    while (true) {

        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }
        await page.locator('[title="Next"]').click()
    }

    /*const calendarDays = await page.$$('.ui-state-default')
    for (const days of calendarDays) {
        if (await days.textContent() == day) {
            await days.click()
            break;
        }
    }
    await page.waitForTimeout(5000)
*/
    //date selection without loop

    await page.click(`//a[@class='ui-state-default' and text()='${day}']`);
    await page.waitForTimeout(5000)
})