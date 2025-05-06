import { test, expect } from '@playwright/test';

test('Handle hidden dropdown', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.fill(`[name='username']`, 'Admin');
    await page.fill(`[name='password']`, 'admin123');
    await page.click('button', 'submit');
    await page.click('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]')


    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div')
    //await page.getByText('Master Accountant').click(); -- works

    await page.waitForSelector("//div[@role='listbox']//span");
    const options = await page.$$("//div[@role='listbox']//span")
    for (let option of options) {
        const jobTitle = await option.textContent()
        console.log(jobTitle)
        if (jobTitle.includes('Master Accountant')) {
            await option.click()
            break;
        }
    }
    await page.waitForTimeout(5000)
})