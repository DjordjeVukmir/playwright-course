import { test, expect } from '@playwright/test';

test('Right click', async ({ page }) => {

    page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const button = await page.locator('.context-menu-one.btn.btn-neutral')

    //right click
    await button.click({ button: 'right' })
    await page.waitForTimeout(5000)

})