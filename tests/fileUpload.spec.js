import { test, expect } from '@playwright/test';


test('Single file', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const singleFileUpload = await page.locator('#singleFileInput');

    await singleFileUpload.setInputFiles('tests/Files/2025-05-03 16_43_08-Playwright with Javascript _ Locating Web Elements _ Playwright built-in locator.png');

    await page.waitForTimeout(5000)

})

test('Multiple files', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const multipleFileUpload = await page.locator('#multipleFilesInput');
    await multipleFileUpload.setInputFiles('tests/Files/2025-05-03 16_43_08-Playwright with Javascript _ Locating Web Elements _ Playwright built-in locator.png', 'tests/Files/2025-05-03 16_11_03-Playwright with Javascript _ Locating Web Elements _ Locators-Property, XPath, C.png');
    await page.waitForTimeout(5000)

    //to remove: locator('#example').setInputFiles([])
})