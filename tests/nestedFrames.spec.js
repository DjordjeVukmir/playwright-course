import { test, expect } from '@playwright/test';

test('Handle nested frame', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

    frame3.locator("input[name='mytext3']").fill('TEST')
    await page.waitForTimeout(2000)


    const childFrames = await frame3.childFrames();
    await childFrames[0].locator('//*[@id="i6"]/div[3]/div').click();

    await page.waitForTimeout(5000)

})