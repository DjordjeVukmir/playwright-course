import { test, expect } from '@playwright/test';

test('Handle keyboard actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('[name="text1"]').fill('TEST AUTOMATION');
    await page.locator('[name="text2"]');

    //CTRL + A
    await page.keyboard.press('Control+A')

    //CTRL + C
    await page.keyboard.press('Control+C')
    //TAB
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //CTRL + V
    const paste = await page.keyboard.press('Control+V')


    await page.waitForTimeout(5000)

})