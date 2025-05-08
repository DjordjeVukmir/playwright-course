import { test, expect } from '@playwright/test'



//config now has enabled screenshots, screenshots are located ON THE REPORT if not stated explicilty as below
test('Page screenshot', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'HomePage.png' })
})


test('Full page screenshot', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true })
})


test('Element screenshot', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#sidebar-right-1').screenshot({ path: 'tests/screenshots/' + Date.now() + 'Element.png' })

})
