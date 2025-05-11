import { test, expect, chromium } from '@playwright/test';

test('Handle pages/windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();


    const allPages = context.pages()
    console.log(`Number of pages: ${allPages.length}`)

    await page1.goto('https://testautomationpractice.blogspot.com/')
    await expect(page1).toHaveTitle('Automation Testing Practice')
    await page2.goto('https://demoblaze.com')
    await expect(page2).toHaveTitle('STORE')
})

