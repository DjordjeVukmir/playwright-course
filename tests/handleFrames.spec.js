import { test, expect } from '@playwright/test';

test('Handle <frame> inside <frameset>', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Get all frames
    const frames = page.frames();
    console.log("Total frames found:", frames.length);

    const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    //await frame1.fill('input[name="mytext1"]', 'Hello');

    await frame1.fill('input[name="mytext1"]', 'Djordje');

    await page.waitForTimeout(3000);


    //Second approach - using frame locator

    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator('input[name="mytext1"]')
    await inputBox.fill('Frame locator + Locator approach')


});
